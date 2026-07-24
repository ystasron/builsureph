"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products, suppliers, prices, categories } from "@/data/mockData";

interface CompareRow {
  supplierName: string;
  supplierId: string;
  avatar: string;
  location: string;
  rating: number;
  verified: boolean;
  price: number;
  deliveryFee: number;
  deliveryDays: number;
  total: number;
  inStock: boolean;
  bulkDiscount: string;
}

export default function ComparePage() {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(100);
  const [category, setCategory] = useState("All Categories");

  const filteredProducts = useMemo(() => {
    if (category === "All Categories") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  const comparison: CompareRow[] = useMemo(() => {
    if (!selectedProduct) return [];

    const rows: CompareRow[] = [];
    const productPrices = prices.filter((p) => p.productId === selectedProduct);

    for (const pp of productPrices) {
      const supplier = suppliers.find((s) => s.id === pp.supplierId);
      if (!supplier) continue;

      rows.push({
        supplierName: supplier.name,
        supplierId: supplier.id,
        avatar: supplier.avatar,
        location: supplier.location,
        rating: supplier.rating,
        verified: supplier.verified,
        price: pp.price,
        deliveryFee: pp.deliveryFee,
        deliveryDays: pp.deliveryDays,
        total: pp.price * quantity + pp.deliveryFee,
        inStock: pp.inStock,
        bulkDiscount: pp.bulkDiscount,
      });
    }

    rows.sort((a, b) => a.total - b.total);
    return rows;
  }, [selectedProduct, quantity]);

  const selectedProductData = products.find((p) => p.id === selectedProduct);
  const savings = comparison.length >= 2 ? comparison[comparison.length - 1].total - comparison[0].total : 0;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="gradient-hero pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-200 hover:text-white mb-4 text-sm transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Price Comparison</h1>
          <p className="text-sky-100/80 max-w-xl">
            Compare real-time material prices from verified suppliers. Find the best deals including delivery costs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Selection Panel */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Material Category</label>
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value); setSelectedProduct(""); }}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:border-sky-400 outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Material</label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:border-sky-400 outline-none"
              >
                <option value="">Choose a material...</option>
                {filteredProducts.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} ({p.unit})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Quantity</label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-sky-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        {selectedProductData && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{selectedProductData.image}</span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{selectedProductData.name}</h2>
                <p className="text-slate-500 text-sm mt-1">{selectedProductData.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedProductData.specifications.map((spec) => (
                    <span key={spec} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Results */}
        {comparison.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">{comparison.length} supplier{comparison.length !== 1 ? "s" : ""} found</p>
              {savings > 0 && (
                <p className="text-sm font-medium text-emerald-600">
                  You can save up to ₱{savings.toLocaleString()} by choosing the cheapest option
                </p>
              )}
            </div>

            <div className="grid gap-4">
              {comparison.map((row, index) => (
                <div
                  key={row.supplierId}
                  className={`bg-white rounded-2xl border-2 transition-all overflow-hidden ${
                    index === 0 ? "border-emerald-400 shadow-lg shadow-emerald-50" : "border-slate-200 hover:border-sky-300"
                  }`}
                >
                  {index === 0 && (
                    <div className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 text-center">
                      BEST VALUE
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Supplier info */}
                      <div className="flex items-center gap-3 md:w-64">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                          {row.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="font-semibold text-slate-900 truncate">{row.supplierName}</p>
                            {row.verified && (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <polyline points="9 12 11 14 15 10" />
                              </svg>
                            )}
                          </div>
                          <p className="text-xs text-slate-500">{row.location}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="text-xs text-slate-600">{row.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Prices */}
                      <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div>
                          <p className="text-xs text-slate-500">Unit Price</p>
                          <p className="text-lg font-bold text-slate-900">₱{row.price.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Delivery</p>
                          <p className="text-lg font-semibold text-slate-700">₱{row.deliveryFee.toLocaleString()}</p>
                          <p className="text-xs text-slate-400">{row.deliveryDays} day{row.deliveryDays > 1 ? "s" : ""}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Total ({quantity} {selectedProductData?.unit}s)</p>
                          <p className={`text-lg font-bold ${index === 0 ? "text-emerald-600" : "text-sky-600"}`}>
                            ₱{row.total.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Stock</p>
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                            row.inStock ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                          }`}>
                            {row.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                      </div>
                    </div>
                    {row.bulkDiscount && (
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span className="text-xs text-amber-700 font-medium">{row.bulkDiscount}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty state */}
        {!selectedProduct && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📊</div>
            <p className="text-lg font-semibold text-slate-700">Select a material to compare prices</p>
            <p className="text-slate-500 mt-1">Choose a category and material above to see supplier pricing</p>
          </div>
        )}
      </div>
    </div>
  );
}

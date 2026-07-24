"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { suppliers, regions, type Supplier } from "@/data/mockData";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "#f59e0b" : "none"}
          stroke={star <= Math.round(rating) ? "#f59e0b" : "#cbd5e1"}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="text-sm text-slate-600 ml-1">{rating}</span>
    </div>
  );
}

function SupplierCard({ supplier }: { supplier: Supplier }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-50 transition-all overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
            {supplier.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-slate-900 truncate">{supplier.name}</h3>
              {supplier.verified && (
                <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500 mb-2">{supplier.location}</p>
            <StarRating rating={supplier.rating} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100">
          <div className="text-center">
            <p className="text-lg font-bold text-sky-600">{supplier.deliveryScore}%</p>
            <p className="text-xs text-slate-500">Delivery</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-sky-600">{supplier.reviews}</p>
            <p className="text-xs text-slate-500">Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-sky-600">{supplier.warrantyMonths}mo</p>
            <p className="text-xs text-slate-500">Warranty</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {supplier.specialties.map((s) => (
            <span key={s} className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium">
              {s}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-4 py-2 text-sm font-medium text-sky-600 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors"
        >
          {expanded ? "Show Less" : "View Details"}
        </button>
      </div>

      {expanded && (
        <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
            </svg>
            <span className="text-slate-600">{supplier.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-slate-600">{supplier.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-slate-600">Est. {supplier.established} &middot; DTI: {supplier.dtiNumber}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {supplier.certifications.map((cert) => (
              <span key={cert} className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                {cert}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SuppliersPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [sortBy, setSortBy] = useState<"rating" | "delivery" | "reviews">("rating");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = [...suppliers];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.specialties.some((sp) => sp.toLowerCase().includes(q)) ||
          s.location.toLowerCase().includes(q)
      );
    }

    if (region !== "All Regions") {
      result = result.filter((s) => s.region === region);
    }

    if (verifiedOnly) {
      result = result.filter((s) => s.verified);
    }

    result.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "delivery") return b.deliveryScore - a.deliveryScore;
      return b.reviews - a.reviews;
    });

    return result;
  }, [search, region, sortBy, verifiedOnly]);

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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Supplier Directory</h1>
          <p className="text-sky-100/80 max-w-xl">
            Browse DTI-verified suppliers across the Philippines. Compare ratings, delivery performance, and certifications.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search suppliers, materials, or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm"
            />
          </div>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:border-sky-400 outline-none w-full md:w-auto"
          >
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "rating" | "delivery" | "reviews")}
            className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:border-sky-400 outline-none w-full md:w-auto"
          >
            <option value="rating">Sort by Rating</option>
            <option value="delivery">Sort by Delivery</option>
            <option value="reviews">Sort by Reviews</option>
          </select>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer whitespace-nowrap select-none w-full md:w-auto justify-center">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
            />
            Verified Only
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm text-slate-500 mb-6">{filtered.length} supplier{filtered.length !== 1 ? "s" : ""} found</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((supplier) => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-semibold text-slate-700">No suppliers found</p>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { certifications, type Certification } from "@/data/mockData";

function CertResult({ cert }: { cert: Certification }) {
  const isExpired = cert.status === "expired";
  const isRevoked = cert.status === "revoked";
  const isValid = cert.status === "valid";

  return (
    <div className={`bg-white rounded-2xl border-2 overflow-hidden ${
      isValid ? "border-emerald-300" : isExpired ? "border-amber-300" : "border-red-300"
    }`}>
      {/* Status banner */}
      <div className={`px-4 py-2 text-center text-sm font-bold text-white ${
        isValid ? "bg-emerald-500" : isExpired ? "bg-amber-500" : "bg-red-500"
      }`}>
        {isValid ? "CERTIFICATION VALID" : isExpired ? "CERTIFICATION EXPIRED" : "CERTIFICATION REVOKED"}
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{cert.productName}</h3>
            <p className="text-sm text-slate-500">{cert.brand}</p>
          </div>
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isValid ? "bg-emerald-50" : isExpired ? "bg-amber-50" : "bg-red-50"
          }`}>
            {isValid ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ) : isExpired ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            )}
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-lg bg-slate-50">
            <p className="text-xs text-slate-500 mb-0.5">Certificate Code</p>
            <p className="text-sm font-mono font-semibold text-slate-900">{cert.code}</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <p className="text-xs text-slate-500 mb-0.5">Standard</p>
            <p className="text-sm font-semibold text-slate-900">{cert.standard}</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <p className="text-xs text-slate-500 mb-0.5">Issued</p>
            <p className="text-sm font-semibold text-slate-900">{cert.issuedDate}</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <p className="text-xs text-slate-500 mb-0.5">Expiry</p>
            <p className={`text-sm font-semibold ${isExpired || isRevoked ? "text-red-600" : "text-slate-900"}`}>{cert.expiryDate}</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 col-span-2">
            <p className="text-xs text-slate-500 mb-0.5">Batch Number</p>
            <p className="text-sm font-mono font-semibold text-slate-900">{cert.batchNumber}</p>
          </div>
        </div>

        {/* Test Results */}
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Laboratory Test Results</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 pr-4 font-medium text-slate-500">Property</th>
                <th className="text-left py-2 pr-4 font-medium text-slate-500">Result</th>
                <th className="text-left py-2 pr-4 font-medium text-slate-500">Standard</th>
                <th className="text-center py-2 font-medium text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {cert.testResults.map((test, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-2.5 pr-4 text-slate-700">{test.property}</td>
                  <td className="py-2.5 pr-4 font-semibold text-slate-900">{test.value}</td>
                  <td className="py-2.5 pr-4 text-slate-500">{test.standard}</td>
                  <td className="py-2.5 text-center">
                    {test.pass ? (
                      <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-50">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-red-50">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<Certification | null>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = () => {
    setSearched(true);
    const found = certifications.find(
      (c) => c.code.toLowerCase() === code.trim().toLowerCase() || c.batchNumber.toLowerCase() === code.trim().toLowerCase()
    );
    setResult(found || null);
  };

  const handleQuickCheck = (certId: string) => {
    const found = certifications.find((c) => c.id === certId);
    if (found) {
      setCode(found.code);
      setResult(found);
      setSearched(true);
    }
  };

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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Quality Verification</h1>
          <p className="text-sky-100/80 max-w-xl">
            Verify product authenticity and compliance with Philippine construction standards using certificate or batch codes.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Enter Verification Code</h2>
              <p className="text-xs text-slate-500">Scan a QR code or enter the certificate/batch number</p>
            </div>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              placeholder="e.g. BS-CERT-2026-00142 or PC-2026-0715-001"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none font-mono"
            />
            <button
              onClick={handleVerify}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all"
            >
              Verify
            </button>
          </div>
        </div>

        {/* Quick check samples */}
        {!searched && (
          <div className="mb-8">
            <p className="text-sm font-medium text-slate-700 mb-3">Try a sample verification:</p>
            <div className="grid gap-2">
              {certifications.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => handleQuickCheck(cert.id)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      cert.status === "valid" ? "bg-emerald-500" : cert.status === "expired" ? "bg-amber-500" : "bg-red-500"
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{cert.productName}</p>
                      <p className="text-xs text-slate-500">{cert.code}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    cert.status === "valid" ? "bg-emerald-50 text-emerald-700" : cert.status === "expired" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"
                  }`}>
                    {cert.status}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {searched && result && <CertResult cert={result} />}

        {/* Not found */}
        {searched && !result && (
          <div className="bg-white rounded-2xl border-2 border-red-200 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Record Found</h3>
            <p className="text-slate-500 text-sm">
              No certification matches the code &quot;{code}&quot;. Please check the code and try again.
            </p>
            <button
              onClick={() => { setSearched(false); setCode(""); setResult(null); }}
              className="mt-4 px-4 py-2 rounded-lg text-sm font-medium text-sky-600 hover:bg-sky-50 transition-colors"
            >
              Try Another Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCcw, Home, AlertTriangle } from 'lucide-react';


export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        
        {/* Error Icon with Warning Style */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative bg-white p-5 rounded-full shadow-lg border border-red-50">
              <AlertTriangle className="text-red-500" size={60} />
            </div>
          </div>
        </div>

        {/* Error Messages */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Something went wrong!
          </h1>
          <p className="text-slate-500 text-lg">
            An unexpected error has occurred. We've been notified and are working to fix it.
          </p>
          
          {/* Optional: Show specific error message for debugging (remove in production if sensitive) */}
          <div className="mt-4 p-3 bg-red-50/50 border border-red-100 rounded-lg">
            <p className="text-xs font-mono text-red-600 truncate">
              Error: {error?.message || "Unknown Application Error"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Reset/Try Again Button */}
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-lg shadow-slate-200"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>
          
          {/* Home Button */}
          <Link 
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-200 active:scale-95"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
        </div>

        {/* Support Section */}
        <p className="mt-12 text-sm text-slate-400">
          If the problem persists, please <Link href="/support" className="text-slate-900 font-medium hover:underline">contact support</Link>.
        </p>

      </div>
    </div>
  );
}
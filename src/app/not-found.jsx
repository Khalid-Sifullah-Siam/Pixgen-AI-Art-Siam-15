"use client";

import React from 'react';
import Link from 'next/link';
import { Home, MoveLeft, AlertCircle } from 'lucide-react';

/**
 * Custom 404 Not Found Page
 * Framework: Next.js (App Router)
 * Styling: Tailwind CSS
 * Icons: Lucide React
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        
        {/* Animated Visual Element */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            
            {/* Icon */}
            <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-gray-50">
              <AlertCircle className="text-indigo-600 stroke-[1.5]" size={80} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-9xl font-black text-gray-900 tracking-tighter">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Page Not Found
          </h2>
          
          <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or never existed in the first place.
          </p>
        </div>

        {/* Navigation Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Back to Home Button */}
          <Link 
            href="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-2xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          {/* Go Back Button */}
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border-2 border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <MoveLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Footer/Support Hint */}
        <div className="mt-16 pt-8 border-t border-gray-50">
          <p className="text-sm text-gray-400">
            Lost? Reach out to our <Link href="/contact" className="text-indigo-600 font-medium hover:underline underline-offset-4">support team</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
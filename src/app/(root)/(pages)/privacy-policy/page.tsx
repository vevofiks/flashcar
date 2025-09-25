'use client'

export default function WorkInProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-4 border-gray-600 border-t-amber-400 rounded-full animate-spin mb-6"></div>
      
      {/* Text */}
      <h1 className="text-3xl font-bold mb-2">🚧 Work in Progress 🚧</h1>
      <p className="text-gray-400">This page is under development. Please check back soon.</p>
    </div>
  );
}

"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 sm:border-4 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  );
} 
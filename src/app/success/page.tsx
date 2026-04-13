import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0F1B2D] via-[#162A45] to-[#0F1B2D] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 py-16 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1A7A6D] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-[#4A9CC7] mb-8">
          Thank you for your purchase. Your Night Shift Nurse Survival Bundle is ready to download.
        </p>
        <Link
          href="/api/download"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A7A6D] hover:bg-[#15685D] text-white rounded-lg text-lg font-semibold transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </Link>
        <p className="text-xs text-[rgba(255,255,255,0.35)] mt-4">
          Questions? Contact us.
        </p>
      </div>
    </main>
  );
}
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-indigo-500">404</h1>
      <p className="text-xl text-gray-300 mt-3">Uh-oh!</p>
      <p className="text-md text-gray-400 mt-2">We can't find that page.</p>
      <Link href="/" className="mt-5 text-indigo-500 hover:text-indigo-600 text-lg font-semibold">
          Go back to Home
      </Link>
    </div>
  );
}

export default function Loading() {
  return (
    <div
        aria-label="Loading content"
        className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gray-50 p-8"
    >
    <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
    <p className="text-2xl font-semibold text-gray-900 mt-8 transition-opacity duration-500 ease-in-out">
        Loading...
    </p>
    </div>
  );
}

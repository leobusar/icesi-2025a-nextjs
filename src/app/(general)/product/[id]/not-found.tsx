import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>Product Not Found</h1>
      <p>Sorry</p>
      <Link className="mt-4 p-2 bg-gray-900 text-white rounded hover:bg-gray-600 transition-all" href="/">Return home</Link>
    </div>
  );
}
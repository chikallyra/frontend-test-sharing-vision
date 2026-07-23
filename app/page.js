import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-500 mb-8">Frontend Sharing Vision Test</p>
        
        <div className="flex flex-col space-y-4">
          <Link 
            href="/all-posts" 
            className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            All Posts
          </Link>
          <Link 
            href="/add-new" 
            className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-emerald-700 transition duration-200"
          >
            Add New Article
          </Link>
          <Link 
            href="/preview" 
            className="w-full bg-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Preview Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Preview() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
  
  const posts = [
    { id: 1, title: "Peluncuran aplikasi baru dari Sharing Vision Tech", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", status: "Publish" },
    { id: 2, title: "Panduan Memulai Next.js 14", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", status: "Publish" },
    { id: 3, title: "Draft Artikel Rahasia", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", status: "Drafts" },
    { id: 4, title: "Mengenal Tailwind CSS Lebih Dalam", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", status: "Publish" },
    { id: 5, title: "Masa Depan AI di Tahun 2024", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", status: "Publish" },
  ];

  const publishedPosts = posts.filter(post => post.status === "Publish");
  const totalPages = Math.ceil(publishedPosts.length / itemsPerPage);
  const currentPosts = publishedPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end border-b border-gray-300 pb-6 mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Blog Preview</h1>
            <p className="text-gray-500 mt-2">Latest published articles</p>
          </div>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Back to Dashboard
          </Link>
        </div>
        
        <div className="grid gap-6">
          {currentPosts.map(post => (
            <article key={post.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed">{post.content}</p>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">Read more</span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition ${
                currentPage === page 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
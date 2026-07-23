"use client";
import { useState } from "react";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";

type Post = {
  id: number;
  title: string;
  category: string;
  status: "Published" | "Drafts" | "Trashed";
};

export default function AllPosts() {
  const [activeTab, setActiveTab] = useState<"Published" | "Drafts" | "Trashed">("Published");
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Peluncuran aplikasi baru dari Sharing Vision Tech", category: "Technology", status: "Published" },
    { id: 2, title: "Panduan Next.js 14", category: "Tutorial", status: "Published" },
    { id: 3, title: "Draft Rahasia", category: "News", status: "Drafts" },
  ]);

  const handleTrash = (id: number) => {
    setPosts(posts.map(post => post.id === id ? { ...post, status: "Trashed" } : post));
  };

  const filteredPosts = posts.filter(post => post.status === activeTab);
  const tabs: ("Published" | "Drafts" | "Trashed")[] = ["Published", "Drafts", "Trashed"];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">All Posts</h1>
          <Link href="/add-new" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium">
            + Add New
          </Link>
        </div>

        <div className="flex space-x-1 border-b border-gray-200 mb-6">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`py-3 px-6 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab 
                  ? "border-b-2 border-blue-600 text-blue-600" 
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-800 font-medium">{post.title}</td>
                    <td className="p-4 text-gray-600">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </td>
                    <td className="p-4 flex justify-center space-x-3">
                      <Link href={`/edit/${post.id}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button onClick={() => handleTrash(post.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-500">
                    No articles found in {activeTab}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
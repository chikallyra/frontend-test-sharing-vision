"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddNew() {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "", content: "", category: "" });

  const handleSubmit = (status: "Publish" | "Drafts") => {
    console.log("Saving article:", { ...formData, status });
    router.push("/all-posts");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Add New Article</h1>
          <Link href="/all-posts" className="text-gray-500 hover:text-gray-700 text-sm font-medium">
            Back to Posts
          </Link>
        </div>
        
        <div className="flex flex-col space-y-6">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Title</label>
            <input 
              type="text" 
              placeholder="Enter article title..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              value={formData.title} 
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Category</label>
            <input 
              type="text" 
              placeholder="e.g. Technology, News, Tutorial"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              value={formData.category} 
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Content</label>
            <textarea 
              placeholder="Write your article content here..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg h-64 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={formData.content} 
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>

          <div className="flex space-x-4 pt-4 border-t border-gray-100">
            <button 
              onClick={() => handleSubmit("Publish")}
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Publish
            </button>
            <button 
              onClick={() => handleSubmit("Drafts")}
              className="bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
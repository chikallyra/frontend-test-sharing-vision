import { useState } from 'react';
import { useRouter } from 'next/router'; 

export default function AddNew() {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: '', content: '', category: '' });

  const handleSubmit = (status) => {
    console.log("Menyimpan artikel:", { ...formData, status });
    router.push('/all-posts');
  };

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Add New Article</h1>
      
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input 
            type="text" 
            className="w-full border p-2 rounded" 
            value={formData.title} 
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input 
            type="text" 
            className="w-full border p-2 rounded" 
            value={formData.category} 
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Content</label>
          <textarea 
            className="w-full border p-2 rounded h-32"
            value={formData.content} 
            onChange={(e) => setFormData({...formData, content: e.target.value})}
          />
        </div>

        <div className="flex space-x-4 mt-4">
          <button 
            onClick={() => handleSubmit('Published')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Publish
          </button>
          <button 
            onClick={() => handleSubmit('Drafts')}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Draft
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import Link from 'next/link';
import { Edit, Trash } from 'lucide-react'; 

export default function AllPosts() {
  const [activeTab, setActiveTab] = useState('Published');
  const [posts, setPosts] = useState([
    { id: 1, title: 'Belajar Next.js', category: 'Tech', status: 'Published' },
    { id: 2, title: 'Draft Artikel', category: 'News', status: 'Drafts' },
  ]);

  const handleTrash = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, status: 'Trashed' } : post));
  };

  const filteredPosts = posts.filter(post => post.status === activeTab);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <Link href="/add-new" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add New
        </Link>
      </div>
      
      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {['Published', 'Drafts', 'Trashed'].map(tab => (
          <button 
            key={tab} 
            className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tabel */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(post => (
            <tr key={post.id} className="text-center">
              <td className="border p-2">{post.title}</td>
              <td className="border p-2">{post.category}</td>
              <td className="border p-2 space-x-2 flex justify-center items-center">
                <Link href={`/edit/${post.id}`}>
                  <Edit className="w-5 h-5 text-blue-500 cursor-pointer inline" />
                </Link>
                <Trash 
                  className="w-5 h-5 text-red-500 cursor-pointer inline" 
                  onClick={() => handleTrash(post.id)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
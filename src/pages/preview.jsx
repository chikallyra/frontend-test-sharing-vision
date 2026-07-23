import { useState } from 'react';

export default function Preview() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
  
  const posts = [
    { id: 1, title: 'Belajar Next.js', content: 'Isi konten...', status: 'Published' },
    { id: 2, title: 'React Hooks', content: 'Isi konten...', status: 'Published' },
    { id: 3, title: 'Draft Artikel', content: 'Isi konten...', status: 'Drafts' },
    { id: 4, title: 'Tailwind CSS', content: 'Isi konten...', status: 'Published' },
    { id: 5, title: 'Node JS Guide', content: 'Isi konten...', status: 'Published' },
  ];

  const publishedPosts = posts.filter(post => post.status === 'Published');
  const totalPages = Math.ceil(publishedPosts.length / itemsPerPage);
  const currentPosts = publishedPosts.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Blog Preview</h1>
      
      <div className="space-y-6">
        {currentPosts.map(post => (
          <div key={post.id} className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 border rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
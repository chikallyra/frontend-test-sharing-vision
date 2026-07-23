"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Edit, Trash } from 'lucide-react';

export default function AllPostPage() {
    const [activeTab, setActiveTab] = useState('Published');

    const [post, setPost] = useState([
        {id: 1, title: "Peluncuran aplikasi baru dari Sharing Vision", category:"Tech", status: "Published", date: "2026-06-01"},
        {id: 1, title: "Draft Artikel", category:"News", status: "Drafts", date: "2026-08-01"},
    ]);

    const handleTrash = (id: number) => {
        setPost(post.map(post => post.id === id ? {...post, status: "Trashed"} : post));
    };

    const filteredPosts = post.filter(post => post.status === activeTab);

    return (
        <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">All Posts</h1>
        
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
                    <Edit className="w-5 h-5 text-blue-500 cursor-pointer" />
                    </Link>
                    <Trash 
                    className="w-5 h-5 text-red-500 cursor-pointer" 
                    onClick={() => handleTrash(post.id)} 
                    />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )

}
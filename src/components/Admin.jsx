import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://portfolio-backend-ly8efkkdf-rajat-disawals-projects.vercel.app';

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/blogs`, {
          headers: { 'Authorization': `Bearer ${token}` } // Include token in the header
        });
        setBlogs(res.data);
      } catch (error) {
        setError('Error fetching blogs');
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, [token]);

  const handleCreate = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/blogs`, { title, body }, {
        headers: { 'Authorization': `Bearer ${token}` } // Include token in the header
      });
      setBlogs([...blogs, res.data]);
      setTitle(''); // Clear the title input
      setBody(''); // Clear the body input
    } catch (error) {
      setError('Error creating blog');
      console.error('Error creating blog:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/blogs/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` } // Include token in the header
      });
      setBlogs(blogs.filter(blog => blog._id !== id)); // Remove deleted blog from the list
    } catch (error) {
      setError('Error deleting blog');
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea 
          placeholder="Body" 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button 
          onClick={handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Blog
        </button>
      </div>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="mb-2">{blog.body}</p>
            <button 
              onClick={() => handleDelete(blog._id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

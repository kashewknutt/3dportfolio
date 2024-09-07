import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/api/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  const handleCreate = async () => {
    try {
      const res = await axios.post('/api/blogs', { title, body }, {
        headers: { 'Authorization': token }
      });
      setBlogs([...blogs, res.data]);
    } catch (error) {
      alert('Error creating blog');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`, {
        headers: { 'Authorization': token }
      });
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      alert('Error deleting blog');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleCreate}>Create Blog</button>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

// models/blogModel.js
const db = require('../db');

const getAllBlogs = (callback) => {
  const query = 'SELECT * FROM blogs';
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const createBlog = (blog, callback) => {
  const query = 'INSERT INTO blogs (title, content) VALUES (?, ?)';
  db.query(query, [blog.title, blog.content], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

const getBlogById = (blogId, callback) => {
  const query = 'SELECT * FROM blogs WHERE id = ?';
  db.query(query, [blogId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result[0]);
  });
};

const updateBlog = (blogId, updatedBlog, callback) => {
  const query = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
  db.query(query, [updatedBlog.title, updatedBlog.content, blogId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

const deleteBlog = (blogId, callback) => {
  const query = 'DELETE FROM blogs WHERE id = ?';
  db.query(query, [blogId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog
};

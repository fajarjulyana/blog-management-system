// routes/blogRoute.js
const express = require('express');
const router = express.Router();
const blogModel = require('../models/blogModel');

router.get('/blogs', (req, res) => {
  blogModel.getAllBlogs((err, blogs) => {
    if (err) {
      console.error('Error fetching blogs from the database: ' + err);
      return res.status(500).send('Internal Server Error');
    }
    res.render('blogs', { blogs: blogs });
  });
});

router.get('/blogs/new', (req, res) => {
  res.render('newBlog');
});

router.post('/blogs/new', (req, res) => {
  const blog = {
    title: req.body.title,
    content: req.body.content
  };

  blogModel.createBlog(blog, (err, result) => {
    if (err) {
      console.error('Error creating a new blog: ' + err);
      return res.status(500).send('Internal Server Error');
    }
    res.redirect('/blogs');
  });
});

router.get('/blogs/:id/edit', (req, res) => {
  const blogId = req.params.id;
  blogModel.getBlogById(blogId, (err, blog) => {
    if (err) {
      console.error('Error fetching blog from the database: ' + err);
      return res.status(500).send('Internal Server Error');
    }
    res.render('editBlog', { blog: blog });
  });
});

router.post('/blogs/:id/edit', (req, res) => {
  const blogId = req.params.id;
  const updatedBlog = {
    title: req.body.title,
    content: req.body.content
  };

  blogModel.updateBlog(blogId, updatedBlog, (err, result) => {
    if (err) {
      console.error('Error updating blog: ' + err);
      return res.status(500).send('Internal Server Error');
    }
    res.redirect('/blogs');
  });
});

router.post('/blogs/:id/delete', (req, res) => {
  const blogId = req.params.id;

  blogModel.deleteBlog(blogId, (err, result) => {
    if (err) {
      console.error('Error deleting blog: ' + err);
      return res.status(500).send('Internal Server Error');
    }
    res.redirect('/blogs');
  });
});

module.exports = router;

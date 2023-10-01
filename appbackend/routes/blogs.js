const express = require('express')
const Blog = require('../models/BlogModel')

const {
    createBlog,
    getBlog,
    getBlogs,
    updateBlog,
    deleteBlog
} = require('../controllers/BlogController')

const router  = express.Router()

router.get('/', getBlogs)

//get a single blog
router.get('/:id', getBlog)

//post a new blog
router.post('/', createBlog)

// delete
router.delete('/:id', deleteBlog)

// update
router.patch('/:id', updateBlog)


module.exports = router
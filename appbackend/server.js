require('dotenv').config()

const express  = require('express')
const blogsRoutes = require('./routes/blogs')

const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/blogs',blogsRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port 4000 !')
        })
    })
    .catch((error) =>{
        console.log(error)
    })
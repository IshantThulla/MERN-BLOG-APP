import {useState} from 'react'

import { useBlogsContext } from '../hooks/useBlogsContext'


const BlogForm = () => {
    const {dispatch} = useBlogsContext()
    const [title, setTitle] = useState('')
    const [summ, setSumm] = useState('')
    const [desc, setDesc] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blog = {title, summ, desc}

        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setDesc('')
            setSumm('')
            setError(null)
            console.log("New blog added", json)
            dispatch({type: 'CREATE_BLOG', payload:json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Blog</h3>

            <label>Blog Title: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Blog Summary: </label>
            <input
                type="text"
                onChange={(e) => setSumm(e.target.value)}
                value={summ}
            />

            <label>Blog Description: </label>
            <input
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
            />

            <button>Add Blog</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default BlogForm
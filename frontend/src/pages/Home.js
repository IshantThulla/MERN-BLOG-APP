import { useEffect} from 'react'

import { useBlogsContext } from '../hooks/useBlogsContext'

//components

import BlogDetails from '../components/BlogDetails'


const Home = () => {

    const {blogs, dispatch} = useBlogsContext()
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_BLOGS', payload: json})
            }
        }
        fetchBlogs()
    }, [])

    return(
        <div className="home">
            <div className="blogs">
                {blogs && blogs.map((blog) => (
                    <BlogDetails key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default Home
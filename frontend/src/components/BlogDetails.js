import { useBlogsContext } from "../hooks/useBlogsContext"

const BlogDetails = ({blog}) =>{

    const {dispatch} = useBlogsContext()

    const handleClick = async () => {
        const response = await fetch('/api/blogs/'+ blog._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if(response.ok){
            dispatch({type: 'DELETE_BLOG', payload: json})
        }
    }
    return(
        <div className="blog_details">
            <h4>{ blog.title}</h4>
            <p><strong>Summary</strong> { blog.summ }</p>
            <p><strong>Descript</strong> {blog.desc}</p>
            <p>{blog.createdAt}</p>
            <span onClick= {handleClick}>delete</span>
        </div>
    )
}

export default BlogDetails
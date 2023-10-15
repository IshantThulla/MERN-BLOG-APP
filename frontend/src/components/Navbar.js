import { Link } from 'react-router-dom'
const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1> Blog App</h1>
                </Link>
                <Link to="/upcoming">
                <p>Upcoming Features</p>
                </Link>
                <Link to="/newBlog">
                <p>New Blog</p>
                </Link>
            </div>
        </header>
    )
}

export default Navbar
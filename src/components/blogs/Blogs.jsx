import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddtoBookmark, handleMarkASRead}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
         fetch('blog.json')
         .then(res => res.json())
         .then(data=>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog ={blog} handleAddtoBookmark={handleAddtoBookmark} handleMarkASRead={handleMarkASRead} ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddtoBookmark: PropTypes.func
    // handleMarkASRead: PropTypes.func
}

export default Blogs;
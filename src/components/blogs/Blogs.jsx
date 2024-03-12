import { useEffect, useState } from "react";
import Blog from "../blog/Blog";


const Blogs = ({handleAddtoBookmark}) => {

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
                blogs.map(blog => <Blog key={blog.id} blog ={blog} handleAddtoBookmark={handleAddtoBookmark} ></Blog> )
            }
        </div>
    );
};

export default Blogs;
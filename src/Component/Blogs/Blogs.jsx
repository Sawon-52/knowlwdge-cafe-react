import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {
        blogs.map(blog => <Blog blog={blog} key={blogs.id}></Blog>)
      }
      
    </div>
  );
};

export default Blogs;

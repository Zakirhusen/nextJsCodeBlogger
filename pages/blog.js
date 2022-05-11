import { useEffect, useState } from "react";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    //   console.log("use effect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        console.log(res.status);
        let allBlogs = res.json();
        return allBlogs;
      })
      .then((res) => {
        setBlogs(res);
      });
  }, []);
  return (
    <div className="blogs w-1/2 borderborder-black mx-auto my-6">
      <h1 className="text-3xl font-bold my-6 capitalize">latest blogs</h1>
      <div className="blogs space-y-5 mx-auto">
        {blogs.map((item) => {
          let { title, content, slug } = item;
          return (
            <div className="blogitem" key={slug}>
            <Link href={`/${slug}`}>
                <h2 className="font-semibold cursor-pointer text-xl capitalize">{title}</h2>
              </Link>
              <p>{content.slice(0, 120)} ...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
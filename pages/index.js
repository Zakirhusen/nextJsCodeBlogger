import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("use effect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        // console.log(res.status);
        let allBlogs = res.json();
        // console.log(allBlogs);
        // // console.log('this',typeof(res));
        return allBlogs;
      })
      .then((res) => {
        // console.log(typeof(res));
        setBlogs(res);
      });
  }, []);
  // console.log("Allblogs", blogs);
  // console.log("component is runnig");

  return (
    <div className="">
      <Head>
        <title>Code Blogger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <Image
          src="/coder.avif"
          className="rounded "
          height={250}
          width="400"
        />
      </div>
      <div className="blogs w-1/2 borderborder-black mx-auto my-6">
        <h1 className="text-lg font-semibold capitalize text-center my-4 ">
          a blog for coder who can hunt for code
        </h1>
        <h1 className="text-3xl font-bold my-6 capitalize">latest blogs</h1>
        <div className="blogs space-y-5 mx-auto">
          {blogs.map((item) => {
            let { title, content ,slug} = item;
            return (
              <div className="blogitem" key={slug}>
              <Link href={`/${slug}`}>
            <h2 className="font-semibold cursor-pointer text-xl capitalize">
              {title}
            </h2>
              </Link>
            <p>
              {content.slice(
                0,
                120
              )}{" "}
              ...
            </p>
        </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;

import { useRouter } from "next/router";
import * as fs from "fs";
import { useEffect, useState } from "react";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.data);
  // const router = useRouter();
  // const { slug } = router.query;
  // console.log("slug is ", slug);
  // // console.log(router.isReady)
  // useEffect(() => {
  //   //   console.log("use effect is running");
  //   if (!router.isReady) return;
  //   console.log("slug inside useeffect", slug);
  //   console.log("router ready", router.isReady);
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`)
  //     .then((res) => {
  //       // console.log(res.status);
  //       let allBlogs = res.json();
  //       return allBlogs;
  //     })
  //     .then((res) => {
  //       setBlog(res);
  //     });
  // }, [router.isReady]);
  // console.log("blog is ");

  return (
    <div className="blog w-1/2 borderborder-black mx-auto my-6">
      <div className="blogitem">
        <h2 className="font-semibold  text-3xl my-3 capitalize">
          {blog && blog.title}
        </h2>
        <p className="text-lg">{blog && blog.content}</p>
      </div>
    </div>
  );
};

// Data fetching using server side rendering
// export async function getServerSideProps(context) {

//   // console.log("CONTEXT",context)
//   console.log("this is ssr params",context.params)
//   let {slug}=context.params
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`)
//   const data = await res.json()
//   console.log("this is ssr query",context.query)
// let dat=false;
//   if (!data) {
//     return {
//       redirect:{destination:'/contact',
//       permanent:false},
//       // notFound: true,
//     }
//   }

//   return {

//       // notFound: true,

//    props: { data }, // will be passed to the page component as props
//   }
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-django" } },
      { params: { slug: "how-to-learn-nextJs" } },
      { params: { slug: "how-to-learn-flask" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log("this is ssr params", context.params);
  console.log("this is ssr query", context.query);
  let { slug } = context.params;

  let blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  let data = blog;

  return {
    props: { data: JSON.parse(data) }, // will be passed to the page component as props
  };
}

export default Slug;

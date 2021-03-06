// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function handler(req, res) {
  // console.log(req); 
  // console.log(req.method);
  // console.log(req.query);
  // console.log("url is ",req.url);

  let files = await fs.promises.readdir("blogdata");
  
  let allBlogs = [];
  for (let element of files) {
    let d = await fs.promises.readFile(`blogdata/${element}`, "utf-8");
    allBlogs.push(JSON.parse(d));
    // console.log(allBlogs);
  }
  // console.log(allBlogs);
  console.log("file names as",files);
   res.status(200).json(allBlogs);
}

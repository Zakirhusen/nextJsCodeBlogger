// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  // console.log(req);
  // console.log(req.method);
  // console.log(req.query);
  // console.log("url is ",req.url);
  fs.readFile(`blogdata/${req.query.slug}` ,"utf-8",(err,data)=>{
      // console.log(req.query.slug); 
      // console.log(req.query); 
    if(err){
      console.log(err);
      res.status(500).json({error:`no such blog found with name ${req.query.slug}`})
    }else{
      // console.log(JSON.parse(data)) 
      res.status(200).json(JSON.parse(data))
    }
  })
}

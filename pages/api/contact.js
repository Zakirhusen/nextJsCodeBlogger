import * as fs from "fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    let fileLen=await fs.promises.readdir("contactData")
    // console.log("file length is",fileLen.length);
    // console.log(req.body);

    fs.writeFile(`contactData/${fileLen.length+1}.json`,JSON.stringify(req.body),(callbackFunc) => {});
    res.status(200).json(req.body);
  } else {
    // Handle any other HTTP method
    res.status(200).json({ asfasdf: "asdf" });
  }
}

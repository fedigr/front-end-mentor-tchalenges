/*

||== this is a very simple express server == ||

*/

let express = require("express")
let path =  require("path")
let wikla = express();

const parentDir = path.resolve(__dirname, '..');
  let arr =[
    express.static(path.join(parentDir ,"client","js")),
    express.static(path.join(parentDir ,"client","style")),
    express.static(path.join(parentDir,"client","assets"))
];

wikla.use(arr)
wikla.get("/" ,(req,res)=>{
    res.sendFile(path.join(parentDir,"client","html" ,"index.html"))
})

wikla.listen(8080 ,()=>{
    console.log("server is run")
})
/*

||== this a very simple express server == ||

*/

let express = require("express")
let path =  require("path")
let app = express();
app.use(express.static(path.join(__dirname  ,"client","js")))

app.use(express.static(path.join(__dirname  ,"client","style")))

app.use(express.static(path.join(__dirname  ,"client","assets")))

app.get("/" ,(req,res)=>{
    res.sendFile(path.join(__dirname , "client","html" ,"index.html"))
})
app.listen(8080 ,()=>{
    console.log("server is run")
})
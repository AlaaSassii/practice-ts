const express = require("express");
const app = express() ; 



app.get("/" ,(req , resp)=>{
            resp.send("hello world")
})

app.listen(3001 , ()=>{
            console.log("running on port 3001")
})
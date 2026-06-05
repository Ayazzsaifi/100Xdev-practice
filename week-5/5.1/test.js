const express=require('express');
const app=express();


app.get('/',function(req,res){
    res.setHeader("x-custom-message","hello")
    res.send("done")
})


app.listen(3000);
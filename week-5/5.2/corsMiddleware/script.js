const express = require('express');
const app = express();
const cors=require("cors");

app.use(express.json());
app.use(cors()); 

app.get('/',function(req,res){
    res.json({
        msd:"working"
    })
})
app.post('/sum', function (req, res) {
    console.log("starting")
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log("value of a is "+a+" value of b is "+b)
    res.json({
        answer: a + b
    })
})

app.listen(3000);

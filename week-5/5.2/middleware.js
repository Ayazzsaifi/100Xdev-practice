const express = require('express');
const app=express();

let countRequest= 0;
let a=0;
let b=0;



//MIDDLEWARE//
// function reqInc(req,res,next){
//     const aValue= parseInt(req.params.a);
//     const bValue=parseInt(req.params.b);
//     countRequest =countRequest+1;
//     console.log("number of req " + countRequest);
//     let a=aValue;
//     let b=bValue;
//     if(a>b){
//         res.json({
//             msg:"cant be calculated"
//         })
//     }
//     else{
//         next();
//     }
// }


// //ROUTE
// app.get('/sum/:a/:b',reqInc, function(req,res){
//     const aValue= parseInt(req.params.a);
//     const bValue=parseInt(req.params.b);
//     let a=aValue;
//     let b=bValue;

//     res.json({
//         ans:aValue+bValue
//     })
// })

// there is a way to make it good by making a seprate function for sum and then call it in route//


function reqInc(req,res,next){
    const aValue= parseInt(req.params.a);
    const bValue=parseInt(req.params.b);
    countRequest =countRequest+1;
    console.log("number of req " + countRequest);
    let a=aValue;
    let b=bValue;
    if(a>b){
        res.json({
            msg:"cant be calculated"
        })
    }
    else{
        next();
    }
}

function sumOfab (req,res){
    const aValue= parseInt(req.params.a);
    const bValue=parseInt(req.params.b);
    let a=aValue;
    let b=bValue;

    res.json({
        ans:aValue+bValue
    })
}

app.get('/sum/:a/:b',reqInc,sumOfab);

app.listen(3000);
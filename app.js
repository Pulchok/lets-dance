const express=require("express")
const path=require("path");
const app=express();
const port=8000;



//for serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded())
//Set the template as pug
app.set('view engine','pug')

//Set the views directory
app.set('views',path.join(__dirname,'views'));
app.get("/",(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params);
});




app.listen(port,()=>
{
    console.log(`Welcome to express at port ${port}`);
})
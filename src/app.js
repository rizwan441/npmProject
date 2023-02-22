const express = require ('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.Port || 4000;


// public static path

const staticPath  =path.join(__dirname,"../public")
const template_path  =(path.join(__dirname,"../templete/views"))
const partial_path  =path.join(__dirname,"../templete/partials");



app.set('view engine','hbs')
app.set('views',template_path);
hbs.registerPartials(partial_path);
app.use(express.static(staticPath))

// routing
app.get('', (req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.render("about")
})
app.get('/weather', (req,res)=>{
    res.render("weather")
})
app.get('*', (req,res)=>{
    res.render("404Error",{
        errorMsg:"oops page not found"

    })
})

app.listen(port,()=>{
    console.log(`listning to the port ${port}`)
})
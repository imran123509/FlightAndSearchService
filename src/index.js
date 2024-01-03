const express=require('express');
const {PORT}=require('./config/ServerConfig')
const app=express();

app.listen(PORT, ()=>{
    console.log(`server is connect ${PORT}`)
   //console.log(process.env)
})
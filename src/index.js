const express=require('express');

const {PORT}=require('./config/ServerConfig')
const cityrepository=require('./repository/city-repository');
const app=express();

app.listen(PORT, ()=>{
    console.log(`server is connect ${PORT}`)
   //console.log(process.env)
//    const repo= new cityrepository();
//    repo.createCity({name: "New Delhi"});
})
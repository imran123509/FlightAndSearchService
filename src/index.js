const express=require('express');

const {PORT}=require('./config/ServerConfig');
const ApiRoutes = require('./routes/index');
const bodyParser = require('body-parser')
// const cityrepository=require('./repository/city-repository');



const app=express();
// const router=app.router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', ApiRoutes);           

app.listen(PORT, ()=>{
    console.log(`server is connect ${PORT}`)
   //console.log(process.env)
//    const repo= new cityrepository();
//    repo.createCity({name: "New Delhi"});
})
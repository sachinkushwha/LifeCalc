const express=require('express');
const userRouting=require('./routes/userRouting');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded());
app.use(userRouting);
app.listen(3000,()=>{
    console.log('server start on port http://localhost:3000');
});
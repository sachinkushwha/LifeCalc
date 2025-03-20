const express=require('express');
const userRouting=express.Router();
const userControllers=require('../controllers/user');
userRouting.get('/',userControllers.getHome);
userRouting.post('/',userControllers.postHome);

module.exports=userRouting;
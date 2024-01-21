const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URL

const connectDB = async () =>{
    try{
        await mongoose.connect(uri);        
        console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
    }catch (error){
        console.log(`${error}`.bgRed); 
    }
}

module.exports = connectDB
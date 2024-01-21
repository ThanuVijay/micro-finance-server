const express = require('express');
const connectDB = require('./config/connectDB');
const userRouter = require('./routes/userRoute');
const dotenv = require('dotenv');

//config dotenv 
dotenv.config();

//database call
connectDB();

//rest object 
const app = express();

//middlewares 
app.use(express.json())
// app.use(morgan('dev'))
// app.use(cors())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>hello from server</h1>")
})

app.use('/api/user',userRouter)

const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const connectDB = require('./config/connectDB');
const userRouter = require('./routes/userRoute');
const centerRouter = require('./routes/centerRoute');
const BranchRouter = require('./routes/branchRoute');
const dotenv = require('dotenv');
const cors = require('cors');

//config dotenv 
dotenv.config();

//database call
connectDB();

//rest object 
const app = express();

//middlewares 
app.use(express.json())
// app.use(morgan('dev'))
app.use(cors())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>hello from server</h1>")
})

app.use('/api/user',userRouter)
app.use('/api/center',centerRouter)
app.use('/api/branch',BranchRouter)

const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
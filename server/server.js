const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const routes=require('../server/routes/ToDoRoutes')

require('dotenv').config();

const app=express();

app.use(express.json())
app.use(cors());

const PORT=process.env.port || 3000;

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log(`mongodb connected...`))
.catch(()=>console.log(`error to connect....`))


app.use(routes);
app.listen(PORT,()=>
    console.log(`listeing on port : ${PORT}`)
)


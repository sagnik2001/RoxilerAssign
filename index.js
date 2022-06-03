const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require("dotenv");
const TodoRoutes = require('./routes/todos')
const UserRoutes = require('./routes/users')
 

dotenv.config();
app.use(cors())

const URL = process.env.localhost || 3000;

// Middlewares And Routes

app.use(express.json())

app.use("/todos",TodoRoutes)
app.use("/user",UserRoutes)


app.listen(URL,()=>{
    console.log("Server is running")
})




const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/route')


app.use(express.json())

app.use(express.urlencoded())

app.use(cors())

app.use('/', router)




const connectDB = require('./config/Dbconfig')
connectDB()
app.listen(4000, () => console.log("server listening on port 4000"))
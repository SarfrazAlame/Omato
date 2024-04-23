import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js'


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDb()

// api endpoints
app.use("/api/food", foodRouter)

app.get("/", (req, res) => {
    res.send("Appi working")
})

app.listen(port, () => {
    console.log(`Server is runnign on ${port}`)
})

import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRouter.js'
import 'dotenv/config'


// app config
const app = express()
const port = 8080

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDb()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)


app.get("/", (req, res) => {
    res.send("Appi working")
})

app.listen(port, () => {
    console.log(`Server is runnign on ${port}`)
})


import express from 'express'
import cors from 'cors'


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Appi working")
})

app.listen(port, () => {
    console.log(`Server is runnign on ${port}`)
})

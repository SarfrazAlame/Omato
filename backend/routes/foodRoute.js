import express from 'express'
import { addFood } from '../controller/foodController.js'
import multer from 'multer'

const foodRouter = express.Router()

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}`)
    }
})


foodRouter.post("/add", addFood)


export default foodRouter
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const multer = require("multer")
const path = require("path")
const { log } = require("console")

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(cookieParser())




app.listen(3001, () => {
    console.log("Server is running at port 3001.")
})
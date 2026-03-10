const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const noteRoutes = require("./routes/noteRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/notes", noteRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
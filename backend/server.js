require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, res.method)
  next()
})

// routes
app.use('/workouts', workoutRoutes)

// Connect to my DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  // listening for reqs
  app.listen(process.env.PORT, () => 
    console.log('Connected to db and listening on port', process.env.PORT)
  )
})
.catch((error) => {
  console.log(error)
})

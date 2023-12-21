require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, res.method)
  next()
})

// routes
app.use('/workouts', workoutRoutes)

// listening for reqs
app.listen(process.env.PORT, () => 
  console.log('listening on port', process.env.PORT)
)
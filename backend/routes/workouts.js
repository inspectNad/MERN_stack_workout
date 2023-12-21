const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts
} = require('../controllers/workoutController')

const router = express.Router()

// Get all workouts
router.get('/', getWorkouts)

// Get single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', (req, res ) => {
  res.json({mssg: 'Delete a workout'})
})

router.patch('/:id', (req, res ) => {
  res.json({mssg: 'Update new workout'})
})


module.exports = router
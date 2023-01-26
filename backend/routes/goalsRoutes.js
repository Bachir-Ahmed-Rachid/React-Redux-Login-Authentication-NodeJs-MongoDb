const express=require('express')
const { setGoal, updateGoal, deleteGoal, getGoals } = require('../controllers/goalsController')
const router=express.Router()

router.route('/')
    .get(getGoals)
    .post(setGoal)
router.route('/:id')
    .put(updateGoal)
    .delete(deleteGoal)

module.exports=router   
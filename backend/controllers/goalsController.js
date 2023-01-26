const Goal=require('../model/goalModel')
const asyncHandler = require("express-async-handler")

//@desc Get goals
//@route GET/api/goals
//@access Private
exports.getGoals=asyncHandler(async(req,res)=>{
    const goal=await Goal.find({})
    res.status(200).json(goal)
   
})

//@desc Set goals
//@route POST/api/goal
//@access Private
exports.setGoal=asyncHandler(async(req,res)=>{
    const{text}=req.body
    console.log(text)
    try {
        const goal=await Goal.create({text:text})
        res.status(200).json(goal)
    } catch (error) {
        res.status(400)
        throw new Error('pleas add a text field')
    }

  
   
})

//@desc Update goals
//@route PUT/api/goal/:id
//@access Private
exports.updateGoal=asyncHandler(async(req,res)=>{
    const{id}=req.params
    const{text}=req.body
    try {
        const goal=await Goal.findByIdAndUpdate(id,{text:text},{new:true})
        res.status(200).json(goal)
    } catch (error) {
        res.status(400)
        throw new Error('pleas add a text field')
    }
    
   
})

//@desc Delete goals
//@route DELETE/api/goal/:id
//@access Private
exports.deleteGoal=asyncHandler(async(req,res)=>{
    const{id}=req.params
    try {
        const goal=await Goal.findByIdAndDelete(id)
        res.status(200).json(goal)
    } catch (error) {
        res.status(400)
        throw new Error('pleas add a text field')
    }
   
   
})
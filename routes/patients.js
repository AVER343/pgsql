const express = require('express')
const Patient=require('../hospital/patient') 
const router =express.Router()
router.get('/',async(req,res)=>{
   const patient = await Patient.findAll()
   res.send({patient})
})
router.post('/patient',async(req,res)=>{
    try{
      const {firstName,homeAddress,lastName,age,gender,dob,username} = req.body
      const patient = new Patient(firstName,lastName,age,dob,homeAddress,gender,username)
      const newPat = await patient.save()
      res.send({newPat})
    }
    catch(e){
      if(!e.message){
         return res.status(400).send({errors:[{error:'Something went wrong !'}]})
      }
      res.status(400).send({errors:[{error:e.message}]})
    }
})
module.exports = router
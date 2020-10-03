const express = require('express')
const Patient=require('../hospital/patient') 
const Episode=require('../hospital/episodes') 
const pool=require('../db/database') 
const router =express.Router()
router.get('/medical/history/:id',async(req,res)=>{
    const medical = await pool.query('SELECT "patient_id",age,gender,username,allergies, illnesses, surgeries FROM medical_history JOIN patients ON patients.id=medical_history."patient_id" WHERE patients.id=$1',[req.params.id])
    res.send(medical.rows)
})
router.post('/medical/history/:id',async(req,res)=>{
    const {allergies, illnesses, surgeries}=req.body
    const medical = await pool.query('INSERT INTO medical_history("patient_id",allergies, illnesses, surgeries) VALUES($1,$2,$3,$4)',[req.params.id,allergies, illnesses, surgeries])
    res.send(medical.rows)
})
module.exports=router
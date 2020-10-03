const express = require('express')
const Episode=require('../hospital/episodes') 
const router =express.Router()
const pool = require('../db/database')
router.get('/episode/all',async (req,res)=>{
    const episodes = await Episode.findAll()

    res.send(episodes)
})
router.get('/episodes/complaints',async (req,res)=>{  
    const episodes = await pool.query('SELECT "complaintType",age,patient_id FROM episodes JOIN patients ON patients.id=episodes."patient_id";')  
    res.send(episodes.rows)
})
router.get('/episode/all/datewise',async (req,res)=>{
    let {startingDate,endingDate} = req.body
    const episodes = await Episode.findEpisodesAll(startingDate,endingDate)
    res.send(episodes);
})
router.post('/episode/:id',async (req,res)=>{
    const {complaintType} =req.body
   const newEpisode = new Episode(complaintType,req.params.id)
  const newone=  await newEpisode.save()
    res.send(newOne)
})

router.get('/episode/:id',async (req,res)=>{
    const episodes = await Episode.findbyId(req.params.id);
    res.send(episodes);
})
router.get('/episode/datewise/:id',async (req,res)=>{
    let {startingDate,endingDate} = req.body
    const episodes = await Episode.findEpisodes(req.params.id,startingDate,endingDate)
    res.send(episodes);
})

module.exports = router
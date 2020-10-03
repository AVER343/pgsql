const express =require('express');
const app = express();
const Patient = require('./routes/patients')
const Episode = require('./routes/episodes')
const Medical = require('./routes/medicalHistory')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const PORT = 3000
app.use(Patient)
app.use(Episode)
app.use(Medical)
app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`)
})
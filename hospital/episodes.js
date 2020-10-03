const { end } = require('../db/database');
const pool = require('../db/database')
class Episodes {
    constructor(complaintType,patient_id)
    {
        this.complaintType = complaintType;
        this.patient_id=patient_id;
    }
    async save(){
       try {
        const date =Date.now()
         let ret = await pool.query('INSERT INTO episodes("complaintType","patient_id","episodeTime") VALUES($1,$2,$3);',[this.complaintType,this.patient_id,date])
        return ret
        } 
       catch (error) {
           throw new Error(error.message);
       }
    }
    static async findbyId(id){
        try {
            let ret = await pool.query('SELECT * FROM episodes WHERE patient_id=$1',[id])
            return ret.rows
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static async findAll(){
        try {
            let ret = await pool.query('SELECT * FROM episodes',[])
            return ret.rows
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static async findEpisodes(id,startingDate,endingDate){
        try {
            startingDate=Date.parse(startingDate)
            endingDate=Date.parse(endingDate)
            console.log({startingDate,endingDate})
           let greater = await pool.query('SELECT * FROM episodes WHERE "patient_id"=$1 AND "episodeTime" BETWEEN $2 AND $3 ;',[id,startingDate,endingDate])
           return greater.rows
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
module.exports = Episodes
const pool = require('../db/database')
class Patient {
    constructor(firstName,lastName,age,dob,homeAddress,gender,username){
        this.username=username;
        this.firstName= firstName;
        this.lastName= lastName;
        this.dateOfBirth= dob;
        this.gender= gender;
        this.age= age;
        this.address = homeAddress;
      }
    async save(){
      try {
          let result = await pool.query('INSERT INTO patients("firstName","lastName",age,"dateOfBirth","homeAddress",gender,username) VALUES($1,$2,$3,$4,$5,$6,$7);'
                      ,[this.firstName,this.lastName,this.age,this.dateOfBirth,this.address,this.gender,this.username])
          return result.rows
      } 
      catch (error) {
        throw new Error(error.message)
      }
    }
    static async find(username){
      let result = await pool.query('SELECT * FROM PATIENTS WHERE username=$1',[username])
      if(result.rows.length==0)
      {
        return null
      }
        return result.rows
    }
    static async findById(id) {
        let result = await pool.query('SELECT * FROM patients WHERE id=$1',[id])
        return result.rows
    }
    static async findAll() {
        let result = await pool.query('SELECT * FROM patients')
        return result.rows
    }
}
module.exports = Patient
const logservice = require('./log.service.js')
//q3
async function createCollection (req,res,next) {
   try{
    const result = await logservice.createCollection()
    res.status(201).json(result)
    
   }catch(error){
    next(error)
   }
}
//q7
async function insertLogs(req,res,next) {
    try{
     const data = await logservice.insertIntoLogs(req.body)
    res.status(200).json(data)
    }catch(error){
        next(error)
    }
}

module.exports = {createCollection,insertLogs}
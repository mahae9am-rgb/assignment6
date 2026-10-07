const {getDB}= require('../../common/db/mongodb.js')
//q3
async function createcollection() {
    const db = getDB()
   return  await db.createCollection("logs",{
    capped: true,
    size: 100000

    })
    
}
//q7
async function insertLogs(data) {
    const db = getDB()
     return await db.collection("logs").insertOne(data)
}

module.exports = {createcollection,insertLogs}
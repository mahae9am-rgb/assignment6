const {MongoClient}= require('mongodb')
const client =  new MongoClient('mongodb://localhost:27017')
let db
 async function connectDB(){
    await client.connect()
db = client.db('c48mongo') 
return db
}
function getDB(){
    if(!db){throw new Error('please connect')}
    return db
}

 module.exports = {connectDB,getDB}
const  { getDB } = require('../../common/db/mongodb.js')
//q2
async function createAuthor(data) {
  const db= getDB()
  const result = await db.collection('authors').insertOne(data)
  return result
} 



module.exports = { createAuthor}
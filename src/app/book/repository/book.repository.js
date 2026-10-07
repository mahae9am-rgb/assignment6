const { bsonType } = require('bson')
const {getDB} =require('../../../common/db/mongodb.js')
const { get } = require('../book.route.js')
//q1
async function createCollection() {
    const db = getDB()
    return await db.createCollection("books",{
        validator:{
            $jsonSchema:{
                bsonType:"object",
                required:["title"],
                properties:{
                    title:{
                        bsonType:"string",
                        minLength:1,
                        description:"title is required and must non-empty-strring"
                    }
                }
            }
        }
    })
}
//q4
async function createIndexField(field){
    const db = getDB()
    indexName=  await db.collection("books").createIndex({[field]:1})
    return indexName
}
//q5
async function insertBooks(data) {
    const db = getDB()
    const result = await db.collection("books").insertOne(data)
    return result

    
} 
//q6
async function insertAndUpdate(data) {
    const db= getDB()
    const result = await db.collection("books").insertMany(data)
    console.log(result);
    return {acknowledge:true,insertedIds:result.insertedIds}
    
}
//q8
async function updateBooks() {
    const db= getDB()
    const x =  await db.collection("books").updateOne({title:"Future"},{$set:{year:2022}})
    return {acknowledged:x.acknowledged,
        matchedCount:x.matchedCount,
        modifiedCount:x.modifiedCount}
}
//q9

async function findBooks(title) {
    const db = getDB()
    const data = await db.collection("books").findOne({title})
    return data
}
//q10
async function findBooksYears(from,to){
    const db= getDB()
const start = Number(from)
const end = Number(to)
    const data = await db.collection("books").find({year:{$gte:start,$lte:end}}).toArray()
return data
}
//q11
async function getBooksGner(genre) {
    const db = getDB()
    const result = await db.collection("books").find({genre:genre}).toArray()
    return result
    
}
//Q12
async function skipLimitBooks() {
    const db = getDB()
    const limit = 3
    const skip = 2
    return await db.collection("books").find().sort({year:-1}).limit(limit).skip(skip).toArray()
    
}
//Q13
async function getBooksWithYearInt() {
    const db = getDB()
    return await db.collection("books").find({year:{$type:"int"}}).toArray()
    
}

//q14.
async function getbooksGeners(genres) {
    const db = getDB()
    const data = await db.collection("books").find({
        genres:{$nin:["Horror","Science Fiction"]}
    }).toArray()
    
    
    return data
}
//q15
async function deleteBooks() {
    const db=  getDB()
    const data = await db.collection("books").deleteMany({year:{$lt:2000}})
return {acknowledge:true,deletedCount:data.deletedCount}
}
//q16
async function filterBooks() {
    const db =getDB()
    const data = await db.collection("books").aggregate([
        {$match:{year:{$gte:2000}}},
        {$sort:{year:-1}}
    ]).toArray()
    return data
}
//q17
async function aggreateBooks() {
    const db= getDB()
    const data = await db.collection("books").aggregate([
        {$match:{year:{$gte:2000}}}
        ,{$project:{title:1,author:1,year:1}}
    ]).toArray()
return data
}
//q18
async function aggregrateBooks3() {
    const db= getDB()
    return await db.collection("books").aggregate([{$unwind:"$genres"}]).toArray()
    
}
//q19
async function joinTwoCollection() {
    const db = getDB()
    const data = await db.collection("logs").aggregate([
       {$lookup:{
        from:"books",
        localField:"book_id",
        foreignField:"_id",
        as:"book_details"
       }},{
        $project:{
            _id:0,
            action:1,
            "book_details.title":1,
            "book_details.author":1,
            "book_details.year":1
        }
       }
    ]).toArray()
    return data
    
}
 module.exports ={createCollection,createIndexField,
    insertBooks,insertAndUpdate,updateBooks,
    findBooks,findBooksYears,getBooksGner,
    skipLimitBooks,getBooksWithYearInt
    ,getbooksGeners,deleteBooks,filterBooks,aggreateBooks,
    aggregrateBooks3,joinTwoCollection}


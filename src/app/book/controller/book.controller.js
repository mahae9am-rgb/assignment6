const bookService = require('../service/book.service.js')
//q1
async function createCollections(req,res,next) {
    try{
    await bookService.createCollection()
    res.status(201).json({ok:1})

    }catch(error){
        next(error)
    }
    
}
//q4
async function createIndex(req,res,next) {
    try{
    
      const data=  await bookService.createIndexField(req.body)
      res.send(data)
    }catch(error){
        next(error)
    }
    
}
//q5
async function inserted(req,res,next) {
    try{

    const result = await bookService.insertedBooks(req.body)
    res.status(201).json(result)
    
    }catch(error){
        next(error)
    }
}
//q6
async function insertAndUpdate(req,res,next) {
   try{
 const data = await bookService.insertAndUpdated(req.body)
    res.status(200).json(data)
   }
    catch(error){
        next(error)
   }
}
//q8
async function updatedBook(req,res,next) {
   try{
    const {year}=req.body
 const data = await bookService.updated(year)
   res.status(200).json(data)
   }
    catch(error){
        next(error)
   }
}
//q9
async function findeBooksTitle(req,res,next) {
    try{
        const {title} = req.query
    const result = await bookService.findBook(title)
    res.status(200).json(result)
    }catch(error){
        next(error)
    }
}
//q10
async function findeBooksYears(req,res,next) {
    try{
        const {from,to} = req.query
    const result = await bookService.findYearBooks(from,to)
    res.status(200).json(result)
    }catch(error){
        next(error)
    }
}
//q11
async function getBookGenre(req,res,next) {
    try{
        const {genre}= req.query
        const data = await bookService.findGenreBooks(genre)
        res.status(200).json(data)

    }catch(error){
        next(error)
    }
    
}
//q12
async function limitSkipBooks(req,res,next) {
    try{
    const {limit,skip}= req.query
    const data = await bookService.skipBooks(limit,skip)
    res.status(200).json(data)
    }catch(error){
        next(error)
    }
    
}
//q13
async function getBooksInt(req,res,next) {
    try{
        const {year}= req.query
     const data=  await bookService.getYearsInt(year)
     res.json({data})
    }catch(error){
        next(error)
    }
    
}
//q14
async function getBooksByGenres(req,res,next) {
  try{
      const {genres}=req.query
    const data = await bookService.getBooksByGenres(genres)
    res.json(data)
  }catch(error){
    next(error)
  }
    
}
//q15
async function deleteBooks(req,res,next){
try{
        const {year}= req.query
    const data = await bookService.deleteSomeBooks(year)
    res.json(data)

}catch(error){
    next(error)
}
}
//q16
async function filterBooks(req,res,next) {
    try{
const {year}= req.query
const data= await bookService.filterBooksYears(year)
res.json(data)
    }catch(error){next(error)}
    
}
//q17
async function aggregatebooksFields(req,res,next) {
    try{
        const {title,author,year}=req.query
        const data = await bookService.aggregateBooksFields(title,author,year)
    res.json(data)
    }catch(error){
        next(error)
    }
    
}
//q18
async function aggregrate3(req,res,next) {
    try{
        const {title,genres}= req.query
        const data = await bookService.aggregrateBooks3(title,genres)
        res.json(data)
    }catch(error){
        next(error)
    }
    
}
//q19
async function booksAlogs(req,res,next) {
   try{
    const {title,author,year}= req.query
     const data = await bookService.booksAndLogs(title,author,year)
    res.json(data)
   }catch(error){
    next(error)
   }
}
module.exports ={ createCollections,createIndex,
    inserted,insertAndUpdate,insertAndUpdate,updatedBook,
    findeBooksTitle,findeBooksYears,
    getBookGenre,limitSkipBooks,
    getBooksInt,getBooksByGenres,
    deleteBooks,filterBooks,
    aggregatebooksFields,
    aggregrate3,booksAlogs}
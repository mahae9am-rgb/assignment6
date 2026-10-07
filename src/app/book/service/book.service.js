const bookrepo =  require('../repository/book.repository.js')
//q1
async function createCollection() {
    return await bookrepo.createCollection()
}
//q4
async function createIndexField() {
    const indexName = await bookrepo.createIndexField('title')
    return {index:indexName}
}
//q5
async function insertedBooks(data) {
    return await bookrepo.insertBooks(data)
    
}
//q6
async function insertAndUpdated(data) {
    return await bookrepo.insertAndUpdate(data)
    
}
//q8
async function updated() {
    return await bookrepo.updateBooks()
    
}
//q9
async function findBook(title) {
    return await bookrepo.findBooks(title)
    
}
//q10 
async function findYearBooks(from,to) {

return await bookrepo.findBooksYears(from,to)    
}
//q11
async function findGenreBooks(genre) {
    return await bookrepo.getBooksGner(genre)
    
}
//q12
async function skipBooks() {
    return await bookrepo.skipLimitBooks()
    
}
//q13
async function getYearsInt(year) {
    return await bookrepo.getBooksWithYearInt(year)
    
}
//q14
async function getBooksByGenres(genres) {
    return await bookrepo.getbooksGeners(genres)
    
}
//q15
async function deleteSomeBooks() {
    return await bookrepo.deleteBooks()
    
}
//q16
async function filterBooksYears() {
    return await bookrepo.filterBooks()
    
}
//q17
async function aggregateBooksFields() {
    return await bookrepo.aggreateBooks()
    
}
//q18
async function aggregrateBooks3() {
    return await bookrepo.aggregrateBooks3()   
}
//q19
async function booksAndLogs() {
    return await bookrepo.joinTwoCollection()
    
}

module.exports = {createCollection,createIndexField,
    insertedBooks,insertAndUpdated,updated,findBook,
    findYearBooks,findGenreBooks,
    skipBooks,getYearsInt,
    getBooksByGenres,deleteSomeBooks,filterBooksYears,
    aggregateBooksFields,
    aggregrateBooks3,booksAndLogs}
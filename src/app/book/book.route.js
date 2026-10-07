const {Router} = require('express')
const bookRouter = Router()
const bookController= require('./controller/book.controller.js')


bookRouter.post('/collection/books',bookController.createCollections)

bookRouter.post('/collection/books/index',bookController.createIndex)

bookRouter.post('/books',bookController.inserted)
bookRouter.post('/books/batch',bookController.insertAndUpdate)

bookRouter.patch('/books/Future',bookController.updatedBook)

bookRouter.get('/title',bookController.findeBooksTitle)
bookRouter.get('/books/year',bookController.findeBooksYears)
bookRouter.get('/books/genre',bookController.getBookGenre)
bookRouter.get('/books/skip-limit',bookController.limitSkipBooks)
bookRouter.get('/books/year-integer',bookController.getBooksInt)
bookRouter.get('/books/exclude-genres',bookController.getBooksByGenres)
bookRouter.get('/books/before-year',bookController.deleteBooks)
bookRouter.get('/books/aggregate1',bookController.filterBooks)
bookRouter.get('/books/aggregate2',bookController.aggregatebooksFields)
bookRouter.get('/books/aggregate3',bookController.aggregrate3)
bookRouter.get('/books/aggregate4',bookController.booksAlogs)
module.exports = bookRouter
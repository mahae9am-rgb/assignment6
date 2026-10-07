//q2
const authorRepo = require('./auth.repository.js')
 async function createAuthors(data) {
       return await authorRepo.createAuthor(data)
}
//q3

module.exports = {createAuthors}
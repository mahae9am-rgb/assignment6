const logRepository = require('../log/log.repository.js')
//q3
async function createCollection() {
     await logRepository.createcollection()
    return {ok:1}
}

//q7
async function insertIntoLogs(data) {
    return await logRepository.insertLogs(data)
}
module.exports ={createCollection,insertIntoLogs}
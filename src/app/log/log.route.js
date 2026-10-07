const {Router} = require('express')
const logRoute = Router()
const logController = require('./log.controller.js')
logRoute.post('/collection/logs/capped',logController.createCollection)
logRoute.post('/logs',logController.insertLogs)
module.exports = logRoute
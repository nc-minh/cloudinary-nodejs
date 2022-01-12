var express = require('express')
var router = express.Router()

const uploadControllers = require('../app/controllers/upload.controllers')
const deleteControllers = require('../app/controllers/delete.controllers')
const uploadVideoControllers = require('../app/controllers/upload-video.controllers')
const deleteVideoControllers = require('../app/controllers/delete-video.controllers')

router.post('/upload', uploadControllers.upload)
router.delete('/delete', deleteControllers.delete)
router.post('/upload-video', uploadVideoControllers.uploadVideo)
router.delete('/delete-video', deleteVideoControllers.deleteVideo)

module.exports = router
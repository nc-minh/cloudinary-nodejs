const express = require('express')
const router = express.Router()

const UploadControllers = require('../app/controllers/upload.controllers')
const DeleteControllers = require('../app/controllers/delete.controllers')
const UploadVideoControllers = require('../app/controllers/upload-video.controllers')
const DeleteVideoControllers = require('../app/controllers/delete-video.controllers')

router.post('/upload', UploadControllers.upload)
router.delete('/delete', DeleteControllers.delete)
router.post('/upload-video', UploadVideoControllers.uploadVideo)
router.delete('/delete-video', DeleteVideoControllers.deleteVideo)

module.exports = router
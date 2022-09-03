var crypto = require("crypto")
var cloudinary = require('cloudinary').v2
class UploadVideoControllers{
    async uploadVideo(req, res){
        const file = req.body.data
        var random = crypto.randomBytes(15).toString('hex')
        await cloudinary.uploader.upload(file, {
            resource_type: 'video',
            chunk_size: '100mb',
            public_id: `video/${random}`
        },function (error, result) {
            if(error){
                res.json({
                    error: error
                })
            }else{
                res.json({
                    public_id: result.public_id,
                    url: result.url,
                    message: 'succes'
                })
            }
        })
    }
}

module.exports = new UploadVideoControllers
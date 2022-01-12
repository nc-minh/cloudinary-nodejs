var crypto = require("crypto")
var cloudinary = require('cloudinary').v2
class UploadVideoControllers{
    async uploadVideo(req, res){
        const file = req.body.data
        var random = crypto.randomBytes(20).toString('hex')
        console.log(random)
        await cloudinary.uploader.upload(file, {
            resource_type: 'video',
            chunk_size: '100mb',
            public_id: `video/${random}`
        },function (error, result) {
            if(error){
                console.log(error)
                res.json({
                    error: error
                })
            }else{
                console.log(result)
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
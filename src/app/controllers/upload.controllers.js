const fs = require('fs')
var cloudinary = require('cloudinary').v2
class UploadControllers{
    async upload(req, res){
        const file = req.body.data
        await cloudinary.uploader.upload(file,function (error, result) {
            if(error){
                console.log(error)
                res.json({
                    error: error
                })
            }else{
                console.log(result)
                res.json({
                    data: result,
                    message: 'succes'
                })
            }
        })
    }
}

module.exports = new UploadControllers
var cloudinary = require('cloudinary').v2
class DeleteVideoControllers{
    async deleteVideo(req, res){
        const public_id = req.body.id
        if(!public_id){
            res.json({
                message: 'Missing required parameter - public_id',
                status: 'failure'
            })
        }else{
            await cloudinary.uploader.destroy(public_id, {
                resource_type: 'video'
            },function (error, result) {
                if(error){
                    res.json({
                        error: error
                    })
                }else{
                    res.json({
                        data: result,
                        message: 'succes'
                    })
                }
            })
        }
        
    }
}

module.exports = new DeleteVideoControllers
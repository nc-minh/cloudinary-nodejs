var cloudinary = require('cloudinary').v2
const express = require('express')
const path = require('path')
const fs = require('fs')
const fileUpload = require('express-fileupload')
const app = express()
const port = 3000

app.use(fileUpload({ useTempFiles: true }))

cloudinary.config({
    cloud_name: 'domvksfsk',
    api_key: '285966514612574',
    api_secret: 'ZRjeOXHkDWPxmv7mt-Qp9aZKEEU'
});

//config public resources
app.use('/', express.static(path.join(__dirname, '/')))



app.get('/', (req, res) => {
    var url = path.join(__dirname, 'index.html')
    res.sendFile(url)
})

app.post('/upload', async (req, res) => {

    if (!req.files) {
        res.status(400).json({
            message: 'Upload failed - missing files!',
            status: 'missing'
        })
    } else {
        const file = req.files.file

        console.log(file.tempFilePath)

        await cloudinary.uploader.upload(file.tempFilePath,function (error, result) {
                try {
                    // fs.unlinkSync(file.tempFilePath)
                    res.json({
                        data: result,
                        msg: 'succes'
                    })
                    
                } catch (error) {
                    console.log(error)
                    res.json({
                        error: error
                    })
                }
            })
    }

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
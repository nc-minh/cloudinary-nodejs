var cloudinary = require('cloudinary').v2
const express = require('express')
const app = express()
const path = require('path')
const fileUpload = require('express-fileupload')
const port = 3000
require('dotenv').config()
var bodyParser = require('body-parser')
app.use(express.json({limit: '200mb'}))
app.use(express.urlencoded({limit: '200mb'}))
// parse application/json
app.use(bodyParser.json({limit: '200mb', type:'application/json'}))
app.use(bodyParser.urlencoded({limit: '200mb', extended: true, parameterLimit:1000000, type:'application/x-www-form-urlencoded'}))

app.use(fileUpload({ useTempFiles: true }))

const key = require('./src/app/middlewares/configure')
cloudinary.config(key)

//config public resources
app.use('/public', express.static(path.join(__dirname, '/public')))

//route init
const route = require('./src/routes/app.route.js')
route(app)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
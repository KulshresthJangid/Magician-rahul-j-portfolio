const { application } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const { nextTick } = require('process')

const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))

console.log(publicDirectoryPath)

app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }

    var fileName = 'index.html'
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName);
        }
    })
})

app.listen(process.env.PORT || 11856 , (req, res) => {
    console.log(`Server is up and running on 3000`)
})
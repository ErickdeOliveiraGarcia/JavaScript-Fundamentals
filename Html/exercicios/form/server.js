const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extend: true }))

app.post('/usuarios',(req, resp)=>{
    console.log(red.body)
    resp.send('<h1>Parábens</h1>')
})
app.listen(3003)
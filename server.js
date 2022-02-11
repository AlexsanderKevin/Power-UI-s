// var http = require('http')
// var static = require('node-static')

// var path = new static.Server(`${__dirname}/app`)

// http.createServer((req, res) => {
//     req.addListener('end', function(){
//         path.serve(req,res)
//     }).resume()
// }).listen(5505)

// console.log('server running...')
const express = require("express")
const app = express()
const porta = 3001

app.use(express.static('public'))

app.listen(porta, () => {
    console.log(`Running at port: ${porta}`)
})
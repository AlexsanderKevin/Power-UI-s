var http = require('http')
var static = require('node-static')

var path = new static.Server(`${__dirname}/app`)

http.createServer((req, res) => {
    req.addListener('end', function(){
        path.serve(req,res)
    }).resume()
}).listen(5500)

console.log('server running...')
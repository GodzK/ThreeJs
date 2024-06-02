const http = require("http")

const host = 'localhost'

const port = 3500

const requestListener = function(req , res) {
    res.writeHead(200)
    res.end("This is My First Node Js By Lobster")
}

const server = http.createServer(requestListener)
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${3500}`)

})
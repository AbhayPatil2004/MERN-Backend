const http = require('http')

// function requestListner( req , res ){
//     console.log("Server created Succsfully")
// }

// http.createServer(requestListner)

const server = http.createServer((req , res) => {
    
    console.log(req)
    console.log( req.url , req.method , req.headers )
    process.exit()
})

const PORT = 3000

server.listen(PORT , () => {
    console.log("Server Is Listening")
})
const http = require('http')
const requestHandler = require('./app')

// import { requestHandler } from './user'

const server = http.createServer( requestHandler )

server.listen( 3000 , () => {
    console.log("Server is Listening")
})
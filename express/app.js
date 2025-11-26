const http = require('http')
const express = require('express')

const app = express()

// const server = http.createServer( ( req , res ) => {
//     console.log(req)
// })

// server.listen( 3002 , () => {
//     console.log("Server is Listening")
// })

// app.get("/" , ( req , res ) => {

// })

app.use( "/" , ( req , res , next ) => {
    console.log(req.url , "First Middleware")
    next()
})
app.use( "submit-details" , ( req , res , next ) => {
    console.log(req.url , "Second Middleware")
    res.send("<p>Welcome to my page</p>")
    // next()
})


app.listen( 3000 , () => {
    console.log("Server is Listening")
})
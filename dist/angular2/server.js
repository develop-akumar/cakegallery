let Express = require('express')
let cors = require('cors')
let path = require('path')
const Port = process.env.PORT || 5000

let server = Express()

server.use(Express.static(path.resolve(__dirname,'build')))

server.use(cors())

server.get('/*',(req,res)=>{
    res.sendFile(path.resolve(__dirname+'/build/index.html'))
})
server.listen(Port,()=>{
    console.log("Server is listening on", Port)
})


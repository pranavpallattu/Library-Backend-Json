// import json library

const jsonServer = require('json-server')

// create server

const libraryManage = jsonServer.create()

// create middleware

const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')

libraryManage.use(middleware)
libraryManage.use(router)

const PORT = 4000 || process.env.PORT

libraryManage.listen(PORT,()=>{
    console.log(`Server running successful at port no: ${PORT}`);
    
})
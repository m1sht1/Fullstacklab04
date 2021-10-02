let express = require("express")
let app = express()
app.use("/", express.static("public"))
app.get("/hello", (req, res) =>{
    res.send("<h1>Hello Express JS</h1>")
})
app.get("/hello", (req,res)=>{
    res.send("<h1> Hello</h1>")
})
app.post("/hello", (req,res)=>{
    res.send("<h1> Hello</h1>")
})
app.delete("/hello", (req,res)=>{
    res.send("<h1> Hello</h1>")
})
app.patch("/hello", (req,res)=>{
    res.send("<h1> Hello</h1>")
})
app.get("/name", (req,res)=>{
    let first_name= req.query.first_name
    let last_name = req.query["lnm"]
    let full_name = `$(first_name), $(last_name)`
    response = {
        status:"success",
        first_name,
        last_name,
    }
    res.send(response)
    
})
app.get("/student/:sid([0-9]{5})", (req, res) => {

res.send(req.params.sid)

})
let server = app.listen(8089, ()=>{
    console.log(server.address())
    let host = server.address().host
    let port = server.port
    console.log("server is running at http://%s:%s", host,port)
    
})
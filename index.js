const express=require("express")
const mongoose= require("mongoose")
const donorController=require("./Controller/donorcontroller")
const historyController=require("./Controller/historyController")
const linkedlistController=require("./Controller/LinkedListController")
const sessionController = require("./controller/sessionController")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//donor Api
app.get("/donor",donorController.getAllDonors)
app.post("/donor",donorController.addDonor)
app.put("/donor",donorController.updateDonor)
app.delete("/donor",donorController.deletedonor)

//linkelist api
app.get("/donor",donorController.getAllDonors)
app.post("/donor",donorController.addDonor)
app.put("/donor",donorController.updateDonor)
app.delete("/donor",donorController.deletedonor)

//history Api
app.get("/history", historyController.getAllDonors)
app.post("/history", historyController.addDonor)

//session Api
app.get("/session", sessionController.getAllUsers)
app.post("/login", sessionController.login)


mongoose.connect("mongodb://localhost/blooddonor2023",function(err){
    if(err)
    {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else{
        console.log("db Connected!!")
    }
 })

app.listen(9001,function(err){
    if(err)
    {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else{
        console.log("Server Connected at port number 9001")
    }
})
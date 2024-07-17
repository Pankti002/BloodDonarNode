const donorModel=require("../Model/donorModel")
const fs = require('fs');

//add Donor--signup
module.exports.addDonor=function(req,res) {
     let userName=req.body.userName;const LinkedListModel = require("../model/linkedListModel")

//add Donor--signup

module.exports.addDonor = function (req, res) {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let bloodType = req.body.bloodType;
    let contactNo = req.body.contactNo

    let donor = new LinkedListModel({
        "userName": userName,
        "email": email,
        "password": password,
        "bloodType": bloodType,
        "contactNo": contactNo
    })

    donor.save(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Added!!"
            })
        }

    })
}

//get Donors--display
module.exports.getAllDonors = function (req, res) {
    LinkedListModel.find().exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donors Retrived!!"
            })
        }
    })
}

//get Donor by id

module.exports.getDonorById = function (req, res) {
    let id = req.params.id;
    LinkedListModel.findById(id).exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Retrived!!"
            })
        }
    })
}

//update Donor

module.exports.updateDonor = function (req, res) {
    let id = req.params.id;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let bloodType = req.body.bloodType;
    let contactNo = req.body.contactNo

    LinkedListModel.findByIdAndUpdate(id, {
        "userName": userName,
        "email": email,
        "password": password,
        "bloodType": bloodType,
        "contactNo": contactNo
    }).exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Updated!!"
            })
        }
    })
}

//delete Donor

module.exports.deleteDonor = function (req, res) {

    let id = req.params.id;
    LinkedListModel.findByIdAndDelete(id).exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Deleted!!"
            })
        }
    })
}


     let email=req.body.email;
     let password=req.body.password;
     let bloodType=req.body.bloodType;
     let contactNo=req.body.contactNo;
     


     let donor=new donorModel({
        "userName" : userName,
        "email" : email,
        "password" : password,
        "bloodType" : bloodType,
        "contactNo" : contactNo
     })

     donor.save(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Added!!"
            })
        }
        
     })
}


//get Donors--display
module.exports.getAllDonors=function(req,res){
    donorModel.find().exec(function (err,data){
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donors Retrived!!"
            })
        }
    })
}


//update Donor
module.exports.updateDonor = function (req, res) {
    let donorId=req.body.donorId
    let userName=req.body.userName
    let email=req.body.email
    let password=req.body.password
    let bloodType=req.body.bloodType
    let contactNo=req.body.contactNo

    donorModel.updateOne({ _id: donorId }, { userName: userName, email:email,
        bloodType:bloodType,contactNo:contactNo }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Updated!!"
            })
        }
    })
}



//deleteDonor
module.exports.deletedonor = function (req, res) {
    let donorId = req.body.donorId
    donorModel.deleteOne({ _id: donorId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Somethong went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Deleted!!"
            })
        }
    })
}
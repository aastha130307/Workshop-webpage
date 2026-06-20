const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
name : {type:String,required:true,trim:true},
email :{type:String,required:true,trim:true,lowercase:true,unique:true},
phone :{type:String,required:true,minlength:10,maxlength:10,trim:true,unique:true},
age :{type:Number,min:8,max:14,required:true},
},{timestamps:true});

module.exports = mongoose.model("Enquiry",enquirySchema);
const mongoose = require("mongoose");
const Enquiry = require("./models/Enquiry.js");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app",
    ],
    methods: ["GET", "POST"],
  })
);

const connectDB = async()=>{
  try{
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected");
  }catch(err){
  console.error(err.message);
  process.exit(1);
  }
}

connectDB();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/api/enquiry",async(req,res)=>{
try{
const {email,phone} = req.body;
const existing = await Enquiry.findOne({
   $or:[{email},{phone}]
});
if(existing){
return res.status(400).json({
    success:false,
    message: "User has already registered"
})
}
const enquiry = await Enquiry.create(req.body);
 return res.status(201).json({
    success:true,
    message:"User registered for the workshop succesfully",
    enquiry
})
}catch(err){
return res.status(500).json({
success:false,
message:err.message
})
}
});
const PORT =  process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`);
})
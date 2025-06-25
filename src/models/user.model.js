import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
  name:{
     type:String.
       required:true
  },
  contact_number:{
    type:String,
    required:true
  }
}) 



export const User = mongoose.model("User" , userSchema);

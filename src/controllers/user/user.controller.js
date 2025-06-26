import {User} from "../../models/user.model.js";
import { ApiResponse } from "../../utils/apiresponse.js";
import { asyncHandler } from "../../utils/asynchandler.js";



const saveUserInforamtion = asyncHandler(async()=>{
  const {name , contact_number ,search_objects } = req.body;
  if(!name && !contact_number)
  {
    return res.status(400)
    .json(
      new ApiResponse(400,"please enter the username and password",{success:false , data:"usernameAndPasswordNullError"})
    )
  }

  const isUserExist =  await User.findOne({name , contact_number});

  if(isUserExist)
  {
    isUserExist.search_objects.push(...search_objects);
    const userUpdate = await isUserExist.save();
    return res.status(200)
    .json(
      new ApiResponse(200,"user object update successfully",{success:true , data:userUpdate})
    )
  }

  const userInfoSave = await User.create({name , contact_number});
  userInfoSave.search_objects.push(...search_objects);
  await userInfoSave.save();

  if(!userInfoSave)
  {
    return res.status(500)
    .json(
      new ApiResponse(500 ,"something problem with the save user data" ,{success:false , data:"userObjectNotSaveError"})
    )
  }

    return res.status(200)
    .json(
      new ApiResponse(200,"user object save successfully",{success:true , data:userInfoSave})
    )
  
})

const getUserInformation = asyncHandler(async(req , res)=>{
    const {_id} = req.params;
    if(!_id)
    {
      return res.status(400)
      .json(
        new ApiResponse(400,"please enter the user id",{success:false , data:"userIdNullError"})
      )
    }
    const userInfo = await User.findById(_id);
    if(!userInfo)
    {
      return res.status(404)
      .json(
        new ApiResponse(404,"user not found",{success:false , data:"userNotFoundError"})
      )
    }
    return res.status(200)
    .json(
      new ApiResponse(200,"user information found successfully",{success:true , data:userInfo})
    )
})

const getAllUserInformation = asyncHandler(async(req , res)=>{
    const userInfo = await User.find({});
    if(!userInfo || userInfo.length === 0)
    {
      return res.status(404)
      .json(
        new ApiResponse(404,"user not found",{success:false , data:"userNotFoundError"})
      )
    }
    return res.status(200)
    .json(
      new ApiResponse(200,"user information found successfully",{success:true , data:userInfo})
    )
})

export {
    saveUserInforamtion,
    getUserInformation,
    getAllUserInformation
}
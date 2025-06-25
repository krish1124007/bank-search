import {}  from "../../utils/asyncHandler.js"




const saveUserInforamtion = asyncHandler(async()=>{
  const {username , contact_number } = req.body;
  if(!username && !contact_number)
  {
    return res.status(400)
    .json(
      new ApiResponse(400,"please enter the username and password",{success:false , data:"usernameAndPasswordNullError"})
    )
  }

  const userInfoSave = await User.create({username , contact_number});

  if(!userInfoSave)
  {
    return res.status(500)
    .json(
      new ApiResponse(500 ,"something problem with the save user data" ,{success:false , data:"userObjectNotSaveError"})
    )

    return res.status(200)
    .json(
      new ApiResponse(200,"user object save successfully",{success:true , data:userInfoSave})
  
})

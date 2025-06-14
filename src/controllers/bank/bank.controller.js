import { Bank } from "../../models/bank.model.js";
import { asyncHandler } from "../../utils/asynchandler.js";
import { ApiResponse } from "../../utils/apiresponse.js"
import { HomeLoan } from "../../models/homeloan.model.js";
import { MortgageLoan } from "../../models/mortgageloan.model.js";
import { IndustrialPurchase } from "../../models/industrial.model.js";
import { CommercialPurchase } from "../../models/commercial.model.js";
import { Insurance } from "../../models/insurance.model.js";
import { AgeCriteria } from "../../models/age.model.js";
import { objectMaker } from "../../utils/objectmaker.js";


const createBank = asyncHandler(async(req,res)=>{
    const { bank_name , home_lone, mortgage_lone,commercial_lone,industrial_lone,login_fees,insurance,tenor_salaried,tenor_self_employed,geo_limit,age,legal_charges,valuation_charges,extra_work }  = req.body;

    //creating  objects
    const home_lone_id = await  objectMaker(HomeLoan , home_lone ,res);
    const mortgage_lone_id =  await objectMaker(MortgageLoan ,mortgage_lone,res);
    const commercial_lone_id = await  objectMaker(CommercialPurchase , commercial_lone ,res);
    const industrial_lone_id = await  objectMaker(IndustrialPurchase,industrial_lone ,res);
    const insurance_id = await  objectMaker(Insurance ,insurance ,res);
    const age_id = await objectMaker(AgeCriteria ,age,res);


    const createBank =  await  Bank.create(
        {
            bank_name,
            home_lone:home_lone_id,
            mortgage_lone:mortgage_lone_id,
            commercial_lone:commercial_lone_id,
            industrial_lone:industrial_lone_id,
            login_fees,
            insurance:insurance_id,
            tenor_salaried,
            tenor_self_employed,
            geo_limit,
            age:age_id,
            legal_charges,
            valuation_charges,
            extra_work
        }
    )

    if(!createBank)
    {
        return res.status(500)
        .json(
            new ApiResponse(500,"something problem to create bank",{success:false , data:"BankNotCreateError"})
        )
    }

    return res.status(200)
    .json(
        new ApiResponse(200,"Bank Create SuccessFully" ,{success:true , data:createBank})
    )


})

const searchBank = asyncHandler(async(req,res)=>{
    
})

export {createBank};






//const bankWithDetails = await Bank.findById(bankId).populate('home_lone mortgage_lone insurance');

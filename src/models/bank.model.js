import mongoose from "mongoose";

const BankSchema = new mongoose.Schema({
    bank_name:{
        type:String,
        required:true
    },
    contact_number:{
        type:String,
        required:true
    },
    home_loan:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"HomeLone"
    },
    mortgage_loan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MortgageLoan"
    },
    commercial_loan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CommercialPurchase"
    },
    industrial_loan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"IndustrialPurchase"
    } ,
    login_fees:{
        type:String,
        required:true,
    },
    insurance:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Insurance"
    },
    tenor_salaried:{
        to:{
            type:String,
            required:true,
        },
        from :{
            type:String,
            required:true
        }
    },
    tenor_self_employed:{
        to:{
            type:String,
            required:true
        },
        from:{
            type:String,
            required:true

        }
    },
    geo_limit:{
        type:String,
        required:true
    },
    age:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AgeCriteria",
    },
    legal_charges:{
        type:String,
        required:true,
        default:"0"
    },
    valuation_charges:{
        type:String,
        required:true,
        default:"0"
    },
    extra_work:{
        type:String,
        required:true,
        default:"0"
    },
    parallel_funding:{
        type:String,
        required:true,
        default:"0"
    },
    policy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Policy"
    }
})


export const Bank = mongoose.model("Bank" , BankSchema)
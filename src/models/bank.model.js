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
        type:Number,
        required:true,
    },
    insurance:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Insurance"
    },
    tenor_salaried:{
        to:{
            type:Number,
            required:true,
        },
        from :{
            type:Number,
            required:true
        }
    },
    tenor_self_employed:{
        to:{
            type:Number,
            required:true
        },
        from:{
            type:Number,
            required:true

        }
    },
    geo_limit:{
        type:Number,
        required:true
    },
    age:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AgeCriteria",
    },
    legal_charges:{
        type:Number,
        required:true,
        default:0
    },
    valuation_charges:{
        type:Number,
        required:true,
        default:0
    },
    extra_work:{
        type:Number,
        required:true,
        default:0
    },
    parallel_funding:{
        type:Number,
        required:true,
        default:0
    },
    policy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Policy"
    }
})


export const Bank = mongoose.model("Bank" , BankSchema)
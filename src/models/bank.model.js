import mongoose from "mongoose";

const BankSchema = new mongoose.Schema({
    bank_name:{
        type:String,
        required:true
    },
    home_lone:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"HomeLone"
    },
    mortgage_lone:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MortgageLoan"
    },
    commercial_lone:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CommercialPurchase"
    },
    industrial_lone:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"IndustrialPurchase"
    } ,
    login_fees:{
        type:Boolean,
        required:true,
        required:true
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
        type:Boolean,
        required:true,
        default:false
    }
})


export const Bank = mongoose.model("Bank" , BankSchema)
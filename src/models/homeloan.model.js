import mongoose from "mongoose";

const HomeLoanSchema = new mongoose.Schema({
    home_loan:{
        type:Boolean,
        required:true,
        default:false
    },
    under_construction:{
        type:Boolean,
        required:true,
        default:false
    },
    read:{
        type:Boolean,
        required:true,
        default:false
    },
    resale:{
        type:Boolean,
        required:true,
        default:false
    },
    balance_transfer:{
        type:Boolean,
        required:true,
        default:false
    },
    balance_transfer_and_topup:{
        type:Boolean,
        required:true,
        default:false
    },
    plot_purchase:{
        type:Boolean,
        require:true,
        default:false
    },
    plot_plus_construction:
    {
        type:Boolean,
        require:true,
        default:false
    },
    pg:{
        type:Boolean,
        require:true,
        default:false
    },
    city_area:{
        type:Boolean,
        require:true,
        default:false
    },
    old_age_property:{
        type:Boolean,
        require:true,
        default:false
    },
    interest_rate: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    }
})

export  const HomeLoan = mongoose.model('HomeLoan', HomeLoanSchema)
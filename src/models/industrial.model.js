import mongoose from "mongoose";

const IndustrialPurchaseSchema = new mongoose.Schema({
    industrial_loan:{
        type:Boolean,
        default:false
    },
    builder_purchase: {
        type: Boolean,
        required: true,
        default: false
    },
    resale: {
        type: Boolean,
        required: true,
        default: false
    },
    interest_rate: {
        salaried: {
            from: {
                type: String,
                required: true
            },
            to: {
                type: String,
                required: true
            }
        },
        non_salaried: {
            from: {
                type: String,
                required: true
            },
            to: {
                type: String,
                required: true
            }
        }


    }
});

export const IndustrialPurchase = mongoose.model("IndustrialPurchase", IndustrialPurchaseSchema);

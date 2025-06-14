import mongoose from "mongoose";

const CommercialPurchaseSchema = new mongoose.Schema({
    commercial:{
        type:Boolean,
        required:true,
        default:false
    },
    under_construction: {
        type: Boolean,
        required: true,
        default: false
    },
    builder_purchase_ready: {
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
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    }

});

export const CommercialPurchase = mongoose.model("CommercialPurchase", CommercialPurchaseSchema);

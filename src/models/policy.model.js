import mongoose from "mongoose";

// Schema for salaried policies
const SalariedPolicySchema = new mongoose.Schema({
    foir_type: {
        type: String,
        enum: ["gross", "net"],
        required: true
    },
    foir_range_salary_wise: {
        type: String, // or can be array of objects defining ranges
        required: true
    },
    additional_income: {
        rent: { type: Boolean, default: false },
        future_rental: { type: Boolean, default: false },
        incentive: { type: Boolean, default: false }
    },
    deductions: {
        pf: { type: Boolean, default: true },
        pt: { type: Boolean, default: true },
        no_deduction: { type: Boolean, default: false }
    },
    company_type: {
        type: String,
        enum: ["MNC", "Govt", "Pvt Ltd", "LLP", "Partnership", "Trust", "Individual"],
        required: true
    }
}, { _id: false });

// Schema for self-employed policies
const SelfEmployedPolicySchema = new mongoose.Schema({
    banking_surrogate: { type: Boolean, default: false },
    gst_surrogate: { type: Boolean, default: false },
    rtr_surrogate: { type: Boolean, default: false },
    industry_margin_surrogate: { type: Boolean, default: false },
    gross_profit_surrogate: { type: Boolean, default: false },
    lip: { type: Boolean, default: false },
    low_ltv: { type: Boolean, default: false },
    foir: { type: Boolean, default: false },
    combo: { type: Boolean, default: false }
}, { _id: false });

// Main Policy Schema
const PolicySchema = new mongoose.Schema({
    salaried_policy: {
        type: SalariedPolicySchema,
        required: false
    },
    self_employed_policy: {
        type: SelfEmployedPolicySchema,
        required: false
    }
});

export const Policy = mongoose.model("Policy", PolicySchema);

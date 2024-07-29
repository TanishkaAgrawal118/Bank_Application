import mongoose, { mongo } from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean}
});

const userOtpSchema = new mongoose.Schema({
    userId:{ type: String},
    otp: { type: String},
    createdAt: {type: Date},
    expiresAt: { type: String}
})

const bankSchema = new mongoose.Schema({
    name: { type: String, required: true},
    branches : { type: [String]},
    customers: [{ type: mongoose.Schema.Types.ObjectId, ref: "customer"}],
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref:"employee"}],
    members:[{ type: mongoose.Schema.Types.ObjectId, ref:"member"}],
    collectors: [{ type: mongoose.Schema.Types.ObjectId, ref:"collector"}],
    employeeKYCs: [{ type: mongoose.Schema.Types.ObjectId, ref:"employeeKYC"}],
    customerKYCs:[{ type: mongoose.Schema.Types.ObjectId, ref:"customerKYC"}],
    memberKYCs: [{ type: mongoose.Schema.Types.ObjectId, ref:"memberKYC"}],
    savingPlanMasters: [{ type: mongoose.Schema.Types.ObjectId, ref: "savingPlanMaster"}],
    savings: [{ type: mongoose.Schema.Types.ObjectId, ref: "saving"}],
    savingTransactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "savingTransaction"}],
    loanPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: "loanPlan"}],
    personalLoan: [{ type: mongoose.Schema.Types.ObjectId, ref: "personalLoan"}],
    groupLoan: [{ type: mongoose.Schema.Types.ObjectId, ref: "groupLoan"}],
    goldLoan: [{ type: mongoose.Schema.Types.ObjectId, ref: "goldLoan"}],
})



export const adminModel = new mongoose.model("admin", adminSchema);
export const userModel = new mongoose.model("user",userOtpSchema);
export const bankModel = new mongoose.model("bank", bankSchema);

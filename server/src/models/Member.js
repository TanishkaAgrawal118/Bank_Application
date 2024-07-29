import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    registrationDate: { type: Date, required: true},
    name: { type: String, required: true},
    relativeName: { type: String, required: true },
    relativeRelation: { type: String},
    gender: { type: String, enum:['Male','Female','Other']},
    dob: { type: Date, required: true},
    martial : { type: String, enum:['Married','Unmarried']},
    address: { type: String, required: true},
    district: { type: String, required: true},
    state: { type: String, required: true},
    branchName: { type: String, required: true},
    pinCode: { type: String, required: true },
    aadharNo : { type: Number, required: true},
    panNo : { type: String, required: true},
    mobileNo: { type: String, required: true},
    email: { type: String, required: true},
    occupation: { type: String},
    education: { type: String},
    mCode: { type: String},
    mName: { type: String}
})


const memberKYCSchema = new mongoose.Schema({
    name: { type: String, required: true},
    mCode: { type: String, required: true},
    mobile: { type: String, required: true},
    registrationDate: { type: Date, required : true},
    addharNo : { type: Number, required: true},
    panNo : { type: String, required: true},
    votderNo : { type: String, required: true},
    rationNo: { type: String, required: true},
    dlNo: { type: String},
    photoFile: { type: String},
    signatureFile: { type: String},
    aadharFile: { type: String},
    panFile: { type: String},
    bankName: { type: String},
    branchName: { type: String},
    accountno: { type: String},
    ifscCode: { type: String},
    status: { type: String, enum: ['Pending','Approved','Rejected'], default:'Pending' }
})

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    customerId: { type: String, required: true},
    panNo: { type: String, required: true},
    aadharNo: { type: Number, required: true},
    branch: { type: String, required: true},
    gender: { type: [String]},
    fathersName: { type: String},
    mobileNo: { type: String, required: true},
    email: { type: String, required: true},
    pincode: { type: Number},
    state:{ type: String, required: true},
    district: { type: String, required: true},
    country: { type: String, required: true},
    address: { type: String, required: true},
    martial: { type: String, enum: ['Married','Unmarried']},
    occupation: { type: String },
    annualIncome: { type: Number},
    dob: { type: Date},
    age: { type: Number},
    doj: { type: Date}
})

const employeeKYCSchema = new mongoose.Schema({
    name: { type: String, required: true},
    employeeId: { type: String, required: true},
    guardian: { type: String, required: true},
    salary: { type: String, required: true},
    aadharNo : { type: Number, required: true},
    panNo: { type: String, required: true},
    address: { type: String, required: true},
    photoFile: { type: String},
    signatureFile: { type: String},
    aadharFile: { type: String},
    panFile: { type: String},
    status: { type: String, enum: ['Pending','Approved','Rejected'], default:'Pending' }
})

export const memberModel = new mongoose.model("member", memberSchema);
export const memberKYCModel = new mongoose.model("memberKYC", memberKYCSchema);
export const employeeModel = new mongoose.model("employee", employeeSchema);
export const employeeKYCModel = new mongoose.model("employeeKYC",employeeKYCSchema);
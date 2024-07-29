import mongoose, { mongo } from "mongoose"

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true},
    branch: { type: [String], required: true},
    pan: { type: String, required: true},
    gender: { type: String, enum: ['Male', 'Female','Other']},
    mobile: { type: String, required: true},
    email: { type: String, required: true},
    pincode: { type: String, required: true},
    state: { type: String , required: true},
    country: { type: String, requird: true},
    address: { type: String, required: true},
    martial: { type: [String]},
    occupation: { type: String,required: true},
    annualIncome: { type: String, required: true},
    dob: { type: Date, required: true},
    age: { type: Number, required: true},
    doj: { type: Date, required: true},
    fathersName: { type: String, required: true },
})

const customerKYCSchema = new mongoose.Schema({
    name: { type: String, required: true},
    pan: { type: String, required: true, unique: true},
    address: { type: String, required: true},
    aadhar:{ type: String, required: true, unique: true},
    bankName: { type: String},
    branchName: { type: String},
    accountno: { type: String},
    ifscCode: { type: String},
    guardian:{ type: String },
    photoFile: { type: String},
    signatureFile: { type: String},
    status: { type: String, enum: ['Pending','Approved','Rejected'], default:'Pending' }
})


const collectorSchema = new mongoose.Schema({
    joiningDate: { type: Date, required: true},
    member: { type: String},
    dob: { type: Date, required: true},
    relativeName: { type: String },
    relativeRelation: { type: String },
    mobileNo : { type: String, required: true},
    nomieeName: { type: String, required: true},
    nomieeRelation: { type: String, required: true},
    branchName: { type: String, required: true},
    nomieeAge: { type: Number},
    address: { type: String, required: true},
    district: { type: String, required: true},
    state: { type: String, required: true},
    pinCode: { type: Number, required: true},
    occupation: { type: String, required: true},
    education: { type: String, required: true}
})
export const collectorModel = new mongoose.model("collector", collectorSchema);


export const customerModel = new mongoose.model("customer", customerSchema);
export const customerKYCModel =new mongoose.model("customerKYC", customerKYCSchema);
import mongoose from "mongoose";

const LoanPlan = new mongoose.Schema({
    planCode: { type: String, required: true},
    loanName: { type: String, required: true},
    loanType: { type: String, enum: ['Group Loan','Personal Loan','Gold Loan','Other Loan']},
    roi: { type: String, enum: ['Flat Interest','Reducing Interest', 'Rule 78']},
    emi: { type: String, enum: ['Regular','Irregular']},
    minAmt: { type: Number, required: true},
    maxAmt: { type: Number, required: true},
    minAge: { type: Number, required: true},
    maxAge: { type: Number, required: true},
    // security: {  type: String, enum: ['Pledge', 'Mortgage','Hypothecation','Guarantee']},
    pFee : { type: String},
    lFee: { type: String},
    gst: { type: String},
    iFee: { type: String},
})

const personalLoanSchema = new mongoose.Schema({
    loanDate: { type: Date, required: true },
    searchMember: { type: String, required: true },
    relativeDetails: { type: String, required: true },
    dob: { type: Date, required: true },
    mobileNo: { type: String, required: true },
    smsStatus: { type: String },
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    branchName: { type: String, required: true },
    loanPlanName: { type: String, required: true },
    loanType: { type: String, required: true },
    planTerm: { type: Number, required: true },
    loanMode: { type: String, required: true },
    roiPercentage: { type: Number, required: true },
    loanAmount: { type: Number, required: true },
    roiType: { type: String, enum: ['Flat Interest', 'Reducing Balance'], required: true },
    emiAmount: { type: Number, required: true },
    loanPurpose: { type: String, required: true },
    photoFile: { type: String },
    signatureFile: { type: String },
    memberCode: { type: String },
    name: { type: String },
    address: { type: String },
    pinCode: { type: String },
    phone: { type: String },
    status: { type: String, enum: ['Pending','Approved','Rejected'], default:'Pending' }
  });


  const GoldLoanSchema = new mongoose.Schema({

      loanDate: { type: Date, required: true },
      memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
      relativeName: { type: String},
      relativeRelation: { type: String},
      dob: { type: Date, required: true },
      mobileNo: { type: String, required: true },
      smsStatus: { type: String, required: true },
      address: { type: String, required: true },
      pinCode: { type: String, required: true },
      branchName: { type: String, required: true },
      loanPlanName: { type: String, required: true },
      loanType: { type: String, required: true },
      planTerm: { type: String, required: true },
      loanMode: { type: String, required: true },
      roi: { type: Number, required: true },
      loanAmount: { type: Number, required: true },
      roiType: { type: String, required: true },
      emiAmount: { type: Number, required: true },
      loanPurpose: { type: String, required: true },
      photoFile: { type: String },
      signatureFile: { type: String },

      itemType: { type: String, required: true },
      itemName: { type: String, required: true },
      lockerLocation: { type: String, required: true },
      purity: { type: String, required: true },
      itemQty: { type: Number, required: true },
      itemWt: { type: Number, required: true },
      netWt: { type: Number, required: true },
      itemPrice: { type: Number, required: true },
      eligibleLoan: { type: Number, required: true },
      netQty: { type: Number, required: true },
      totalItemWt: { type: Number, required: true },
      totalNetWt: { type: Number, required: true },
      eligibleLoanAmount: { type: Number, required: true },

      memberCode: { type: String, required: true },
      guarantorName: { type: String, required: true },
      address: { type: String, required: true },
      pinCode: { type: String, required: true },
      phone: { type: String, required: true },
      securityType: { type: String, required: true },
      status: { type: String, enum: ['Pending','Approved','Rejected'], default:'Pending' }
  });

const groupLoan = new mongoose.Schema({
  loanDate: { type: Date},
  name: { type: String, required: true},
  branch: { type: String,required: true},
  leader: { type: String, required: true},
  mobile: {type: String, required: true},
  address:  { type: String, required: true},
  assignEmployee: { type: String, required: true},
  day:{ type: String},
  time:{ type: String},
  purpose:{type: String, required: true},
  status: { type: String, enum: ['Pending','Approved','Rejected'], default:'Pending' }
})


export const LaonModel = new mongoose.model("loanPlan", LoanPlan);
export const personalLoanModel = new mongoose.model("personalLoan", personalLoanSchema);
export const GoldLoanModel = new mongoose.model("goldLoan", GoldLoanSchema);
export const groupLoanModel = new mongoose.model("groupLoan", groupLoan);

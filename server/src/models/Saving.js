import mongoose from "mongoose";

const savingPlanMaster = new mongoose.Schema({
    schemeName: { type: String, required: true},
    interest: { type: Number, required: true},
    minAmount: { type: Number, required: true},
    avgBal: { type: Number, required: true}, //The average balance you need to maintain in the account each month.
    lock: { type: String, required: true}, //LockBalance The amount of money that must be kept in the account and cannot be withdrawn 
    cardCharge: { type: String, required: true}, //The fee charged for issuing or maintaining a card associated with the savings plan.
    smsCharge: { type: String, required: true}, //SMS is sent to you about your account
    smsInterval: { type: String, required: true},
    cardLimitM: { type: Number, required: true}, //monthly
    cardLimitY: { type: Number, required: true}, //yearly
})

const savingSchema = new mongoose.Schema({
    openingDate: { type: Date, required: true},
    name: { type: String, required: true},
    dob: { type: Date, required: true},
    relative:{ type: String},
    mobile: { type: String, required: true},
    nomiee: { type: String},
    nomieeAge: { type: Number},
    nomieeRelation: { type: String},
    address:{ type: String, required: true},
    district: { type: String, required: true},
    branch: { type: String, required: true},
    state:{ type: String, required: true},
    pinCode: { type: Number, required: true},
    modeOfOperation: {
        type: String,
        enum: ['Single', 'Joint', 'Survivor'],
        required: true
    },
    plan: [{ type: mongoose.Schema.Types.ObjectId, ref:"savingPlanMaster"}],
    openingAmt: { type: Number,  required: true},
    advisorCode: { type: String, required: true},
    advisorName: { type: String, required: true},
    openingFee: { type: Number, required: true}
})


const savingsTransactionSchema = new mongoose.Schema({
    txnDate: { type: Date, required: true },
    branchName: { type: String, required: true },
    accNo: { type: String, required: true },
    memberCode: { type: String, required: true },
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    avaBalance: { type: Number, required: true },
    transactionFor: { type: String, required: true },
    remarks: { type: String },
    txnType: { type: String, enum: ['Deposit', 'Withdrawal'], required: true },
    amount: { type: Number, required: true },
    paymentBy: { type: String, required: true }
  });

export const savingPlanMasterModel = new mongoose.model("savingPlanMaster", savingPlanMaster);
export const savingModel = new mongoose.model("saving", savingSchema);
export const savingsTransactionModel = new mongoose.model("savingTransaction", savingsTransactionSchema);

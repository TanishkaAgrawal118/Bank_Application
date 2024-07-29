import { StatusCodes } from "http-status-codes";

import { collectorModel, customerKYCModel, customerModel } from "../models/Customer.js";
import { bankModel } from "../models/Schema.js";
import { employeeKYCModel, employeeModel, memberKYCModel, memberModel } from "../models/Member.js";
import { savingModel, savingPlanMasterModel, savingsTransactionModel } from "../models/Saving.js";
import { GoldLoanModel, groupLoanModel, LaonModel, personalLoanModel } from "../models/Loan.js";


//Save Collector/Advisor
export async function saveCollector(req, res){
  try {
      const collector = new collectorModel(req.body);
      const saveCollector = await collector.save();

      const bankId = req.params.id;
      const updateBank = await bankModel.findByIdAndUpdate(
          bankId,
          { $push: { collectors: saveCollector._id}},
          { new: true}
      )
      res.status( StatusCodes.CREATED).json(saveCollector);
  } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}

export async function saveCustomer(req, res){
    try {
        const customer = new customerModel(req.body);
        const saveCustomer = await customer.save();

        const bankId = req.params.id;
        const updateBank = await bankModel.findByIdAndUpdate(
            bankId,
            { $push: { customers: saveCustomer._id}},
            { new: true}
        )
        res.status( StatusCodes.CREATED).json(saveCustomer);
    } catch (error) {
        console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function saveCustomerKYC(req, res) {
    try {
    const photoFile = req.files['photoFile'] ? `http://localhost:3500/${req.files['photoFile'][0].filename}` : null;
    const signatureFile = req.files['signatureFile'] ? `http://localhost:3500/${req.files['signatureFile'][0].filename}` : null;
    
    if (photoFile) req.body['photoFile'] = photoFile;
    if (signatureFile) req.body['signatureFile'] = signatureFile;
      const customer = new customerKYCModel(req.body);
      const saveCustomer = await customer.save();
      const bankId = req.params.id;
      const updateBank = await bankModel.findByIdAndUpdate(
        bankId,
        { $push: { customerKYCs : saveCustomer._id } }, 
        { new: true }
      );
      res.status(StatusCodes.CREATED).json(saveCustomer);
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }
  
  export async function saveMember(req, res){
    try {
        const member = new memberModel(req.body);
        const saveMember = await member.save();

        const bankId = req.params.id;
        const updateBank = await bankModel.findByIdAndUpdate(
            bankId,
            { $push: { members: saveMember._id}},
            { new: true}
        )
        res.status( StatusCodes.CREATED).json(saveMember);
    } catch (error) {
        console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}


export async function saveMemberKYC(req, res) {
    try {
    const photoFile = req.files['photoFile'] ? `http://localhost:3500/${req.files['photoFile'][0].filename}` : null;
    const signatureFile = req.files['signatureFile'] ? `http://localhost:3500/${req.files['signatureFile'][0].filename}` : null;
    const aadharFile = req.files['aadharFile'] ? `http://localhost:3500/${req.files['aadharFile'][0].filename}` : null;
    const panFile = req.files['panFile'] ? `http://localhost:3500/${req.files['panFile'][0].filename}` : null;

    if (photoFile) req.body['photoFile'] = photoFile;
    if (signatureFile) req.body['signatureFile'] = signatureFile;
    if(aadharFile) req.body['aadharFile'] = aadharFile;
    if(panFile) req.body['panFile'] = panFile;
      const memberKYC = new memberKYCModel(req.body);
      const saveMemberKYC = await memberKYC.save();
      const bankId = req.params.id;
      const updateBank = await bankModel.findByIdAndUpdate(
        bankId,
        { $push: { memberKYCs : saveMemberKYC._id } }, 
        { new: true }
      );
      res.status(StatusCodes.CREATED).json(saveMemberKYC);
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }
  

  //Save employee
  export async function saveEmployee(req, res){
    try {
        const employee = new employeeModel(req.body);
        const saveEmployee = await employee.save();

        const bankId = req.params.id;
        const updateBank = await bankModel.findByIdAndUpdate(
            bankId,
            { $push: { employees: saveEmployee._id}},
            { new: true}
        )
        res.status( StatusCodes.CREATED).json(saveEmployee);
    } catch (error) {
        console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}



// Save employeeKYC
export async function saveEmployeeKYC(req, res) {
    try {
    const photoFile = req.files['photoFile'] ? `http://localhost:3500/${req.files['photoFile'][0].filename}` : null;
    const signatureFile = req.files['signatureFile'] ? `http://localhost:3500/${req.files['signatureFile'][0].filename}` : null;
    const aadharFile = req.files['aadharFile'] ? `http://localhost:3500/${req.files['aadharFile'][0].filename}` : null;
    const panFile = req.files['panFile'] ? `http://localhost:3500/${req.files['panFile'][0].filename}` : null;

    if (photoFile) req.body['photoFile'] = photoFile;
    if (signatureFile) req.body['signatureFile'] = signatureFile;
    if(aadharFile) req.body['aadharFile'] = aadharFile;
    if(panFile) req.body['panFile'] = panFile;
      const employeeKYC = new employeeKYCModel(req.body);
      const saveEmployeeKYC = await employeeKYC.save();
      const bankId = req.params.id;
      const updateBank = await bankModel.findByIdAndUpdate(
        bankId,
        { $push: { employeeKYCs : saveEmployeeKYC._id } }, 
        { new: true }
      );
      res.status(StatusCodes.CREATED).json(saveEmployeeKYC);
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }
  

//   Saving Plan Master
export async function savingPlanMaster(req, res){
    try {
        const Plan = new savingPlanMasterModel(req.body);
        const savePlan = await Plan.save();

        const bankId = req.params.id;
        const updateBank = await bankModel.findByIdAndUpdate(
            bankId,
            { $push: { savingPlanMasters: savePlan._id}},
            { new: true}
        )
        res.status( StatusCodes.CREATED).json(savePlan);
    } catch (error) {
        console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

// Saving Account
export async function savingAccount(req, res){
    try {
        const saving = new savingModel(req.body);
        const savingAcc = await saving.save();

        const bankId = req.params.id;
        const updateBank = await bankModel.findByIdAndUpdate(
            bankId,
            { $push: { savings: savingAcc._id}},
            { new: true}
        )
        res.status( StatusCodes.CREATED).json(savingAcc);
    } catch (error) {
        console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

// Saving Transaction
export async function savingTransaction(req, res){
    try {
        const saving = new savingsTransactionModel(req.body);
        const savingAcc = await saving.save();

        const bankId = req.params.id;
        const updateBank = await bankModel.findByIdAndUpdate(
            bankId,
            { $push: { savingTransactions: savingAcc._id}},
            { new: true}
        )
        res.status( StatusCodes.CREATED).json(savingAcc);
    } catch (error) {
        console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}


// Loan Plan
export async function saveLoanPlan(req, res){
    try {
        const loan = new LaonModel(req.body);
        const saveLoan = await loan.save();

        const bankId = req.params.id;
        const updateBank = await bankModel.findByIdAndUpdate(
            bankId,
            { $push: { loanPlans: saveLoan._id}},
            { new: true}
        )
        res.status( StatusCodes.CREATED).json(saveLoan);
    } catch (error) {
        console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

// Save Personal Loan

export async function savePersonalLoan(req, res) {
  try {
  const photoFile = req.files['photoFile'] ? `http://localhost:3500/${req.files['photoFile'][0].filename}` : null;
  const signatureFile = req.files['signatureFile'] ? `http://localhost:3500/${req.files['signatureFile'][0].filename}` : null;
  
  if (photoFile) req.body['photoFile'] = photoFile;
  if (signatureFile) req.body['signatureFile'] = signatureFile;
    const loan = new personalLoanModel(req.body);
    const saveLoan = await loan.save();
    const bankId = req.params.id;
    const updateBank = await bankModel.findByIdAndUpdate(
      bankId,
      { $push: { personalLoan : saveLoan._id } }, 
      { new: true }
    );
    res.status(StatusCodes.CREATED).json(saveLoan);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}


// Save Glod Loan

export async function saveGoldLoan(req, res) {
  try {
  const photoFile = req.files['photoFile'] ? `http://localhost:3500/${req.files['photoFile'][0].filename}` : null;
  const signatureFile = req.files['signatureFile'] ? `http://localhost:3500/${req.files['signatureFile'][0].filename}` : null;
  
  if (photoFile) req.body['photoFile'] = photoFile;
  if (signatureFile) req.body['signatureFile'] = signatureFile;
    const loan = new GoldLoanModel(req.body);
    const saveLoan = await loan.save();
    const bankId = req.params.id;
    const updateBank = await bankModel.findByIdAndUpdate(
      bankId,
      { $push: { goldLoan : saveLoan._id } }, 
      { new: true }
    );
    res.status(StatusCodes.CREATED).json(saveLoan);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}


export async function saveGroupLoan(req, res){
  try {
      const loan = new groupLoanModel(req.body);
      const saveLoan = await loan.save();

      const bankId = req.params.id;
      const updateBank = await bankModel.findByIdAndUpdate(
          bankId,
          { $push: { groupLoan: saveLoan._id}},
          { new: true}
      )
      res.status( StatusCodes.CREATED).json(saveLoan);
  } catch (error) {
      console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}

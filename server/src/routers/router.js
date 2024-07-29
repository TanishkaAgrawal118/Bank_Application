import express from "express";
import path from "path";
import { adminLogin, adminRegister, saveBank } from "../controllers/adminController.js";
import { saveCollector, saveCustomer, saveCustomerKYC, saveEmployee, saveEmployeeKYC, saveGoldLoan, saveGroupLoan, saveLoanPlan, saveMember, saveMemberKYC, savePersonalLoan, savingAccount, savingPlanMaster, savingTransaction } from "../controllers/collectorController.js";
import multer from "multer";

const bankRouter = express.Router();
const storage = multer.diskStorage(
    {
        destination:'./src/Images',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)
bankRouter.use(express.static('src/Images'));
const upload = multer({storage:storage});


bankRouter.use(express.static('src/Uploads'));

bankRouter.post('/adminRegister',adminRegister);
bankRouter.post('/adminLogin',adminLogin);
bankRouter.post('/saveBank', saveBank);
bankRouter.post('/saveCollector/:id',saveCollector);

bankRouter.post('/saveCustomer/:id', saveCustomer);
bankRouter.post('/saveCustomerKYC/:id', upload.fields([{name: 'photoFile', maxCount: 1}, {name: 'signatureFile', maxCount: 1}]) ,  saveCustomerKYC);

bankRouter.post('/saveMember/:id', saveMember);
bankRouter.post('/saveMemberKYC/:id',upload.fields([{ name: 'photoFile', maxCount: 1}, { name: 'aadharFile', maxCount: 1}, { name: 'signatureFile',maxCount: 1}, { name: 'panFile', maxCount: 1}]), saveMemberKYC);

bankRouter.post('/saveEmployee/:id', saveEmployee);
bankRouter.post('/saveEmployeeKYC/:id',upload.fields([{ name: 'photoFile', maxCount: 1}, { name: 'aadharFile', maxCount: 1}, { name: 'signatureFile',maxCount: 1}, { name: 'panFile', maxCount: 1}]), saveEmployeeKYC);

bankRouter.post('/savingPlanMaster/:id', savingPlanMaster);
bankRouter.post('/savingAccount/:id', savingAccount);
bankRouter.post('/savingTransaction/:id', savingTransaction);

bankRouter.post('/saveLoanPlan/:id', saveLoanPlan);
bankRouter.post('/savePersonalLoan/:id', upload.fields([{name: 'photoFile', maxCount: 1}, {name: 'signatureFile', maxCount: 1}]) ,  savePersonalLoan);
bankRouter.post('/saveGoldLoan/:id', upload.fields([{name: 'photoFile', maxCount: 1}, {name: 'signatureFile', maxCount: 1}]) ,  saveGoldLoan);
bankRouter.post('/saveGroupLoan/:id', saveGroupLoan);

export default bankRouter;
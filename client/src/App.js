import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import ApproveKYC from './Components/LeftBox/ApproveKYC';
import CustomerReport from './Components/LeftBox/CustomerReport';
import PendingLoan from './Components/LeftBox/PendingLoan';
import Auth from './Components/Auth';
import CustomerRegistraion from './Components/Customer/CustomerRegistraion';
import CustomerKYC from './Components/Customer/CustomerKYC';
import CreateEmployee from './Components/HR_Module/CreateEmployee';
import EmployeeKYC from './Components/HR_Module/EmployeeKYC';
import EmployeeReport from './Components/HR_Module/EmploeeReport';
import CreateMember from './Components/HR_Module/CreateMember';
import MemberKYC from './Components/HR_Module/MemberKYC';
import MemberReport from './Components/HR_Module/MemberReport';
import LoanPlan from './Components/Loan/LoanPlan';
import Personal from './Components/Loan/Personal';
import Group from './Components/Loan/Group';
import Gold from './Components/Loan/Gold';

const ProtectedRoute = ({ element }) => {
  const { auth } = useContext(AuthContext);
  return auth.token ? element : <Navigate to='/home' /> ;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/auth' element={<Auth/>}></Route> */}
          <Route path='/home' element={<ProtectedRoute element={<Home />} />} />
          
          <Route path='/' element={<Login />} />
          <Route path='/approveKYC' element={<ProtectedRoute element={<ApproveKYC />} />} />
          <Route path='/customerReport' element={<ProtectedRoute element={<CustomerReport />} />} />
          <Route path='/pendingloan' element={<ProtectedRoute element={<PendingLoan />} />} />
          <Route path='/customerRegistration' element={<ProtectedRoute element={<CustomerRegistraion/>}/>}></Route>
          <Route path='/customerKYCRegistration' element={<ProtectedRoute element={<CustomerKYC/>}/>}></Route>
          <Route path='/customerReport' element={<ProtectedRoute element={<CustomerReport/>}/>}></Route>

          <Route path='/createEmployee' element={<ProtectedRoute element={<CreateEmployee/>}/>}></Route>
          <Route path='/EmployeeKYC' element={<ProtectedRoute element={<EmployeeKYC/>}/>}></Route>
          <Route path='/employeeReport' element={<ProtectedRoute element={<EmployeeReport/>}/>}></Route>
          <Route path='/createMember' element={<ProtectedRoute element={<CreateMember/>}/>}></Route>
          <Route path='/createMemberKYC' element={<ProtectedRoute element={<MemberKYC/>}/>}></Route>
          <Route path='/memberReport' element={<ProtectedRoute element={<MemberReport/>}/>}></Route>

          <Route path='/loanPlan' element={<ProtectedRoute element={<LoanPlan/>}/>}></Route>
          <Route path='/personalLoan' element={<ProtectedRoute element={<Personal/>}/>}></Route>
          <Route path='/groupLoan' element={<ProtectedRoute element={<Group/>}/>}></Route>
          <Route path='/goldLoan' element={<ProtectedRoute element={<Gold/>}/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

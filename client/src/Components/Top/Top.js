import React, { useContext } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiBankFill } from "react-icons/ri";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import '../Top/top.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Top = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHome  = ()=>{
    navigate('/home');
  }

  const handleLogout = () =>{
    logout();
    navigate('/');
  }

  return (
    <>
      <div className="home-top">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="d-flex">
            <p onClick={handleHome}>
              <FaHome /> Home
            </p>
            <div className="d-flex align-items-center">
             <p onClick={handleLogout}>Logout</p>
            </div>
            <p>Date and time: </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-md-end">
            <p>IP Address: 106.222.215.147</p>
            <div className="">
              <p>IDSPay Nidhi Software</p>
            </div>
            <p>
              <CgProfile />
            </p>
          </Col>
        </Row>
      </div>
      <div className="home-top2">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <AiOutlineMenuUnfold/><p>Manage Master</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
              <Dropdown.Item href="#/action-1">Agent Commision Master</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Add Promoter</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Share Master</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Saving Acc. Scheme Master</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sms Setting</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Letter Master</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Role Master</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Fee Master</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Branch Master</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Manage Holiday</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Fixed EMI Loan</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sahukari Deposit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <RiBankFill/><p>Banking</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
              <Dropdown.Item href="#/action-1">Saving Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Rd /Dd Account</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Fd/ Mis Account</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Account Mapping</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <FaBuilding/><p>Manage Company</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
              <Dropdown.Item href="#/action-1">Manage Company</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <FaUserGroup/><p>HR Module</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
              <Dropdown.Item href="/createEmployee">Create Employee</Dropdown.Item>
              <Dropdown.Item href="/employeeKYC">Employee KYC</Dropdown.Item>
              <Dropdown.Item href="/employeeReport">Employee Report</Dropdown.Item>
              <Dropdown.Item href="/createMember">Create Member</Dropdown.Item>
              <Dropdown.Item href="/createMemberKYC">Member KYC</Dropdown.Item>
              <Dropdown.Item href="/memberReport">Member Report</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <FaUserGroup/><p>Customer</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
              <Dropdown.Item href="/customerRegistration">Customer Registration</Dropdown.Item>
              <Dropdown.Item href="/customerKYCRegistration">Upload Customer KYC</Dropdown.Item>
              <Dropdown.Item href="/customerReport">Customer Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <RiBankFill/><p>Manage Loans</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
            <Dropdown.Item href="/loanPlan">Save Loan Plan</Dropdown.Item>
              <Dropdown.Item href="/personalLoan">Personal Loan</Dropdown.Item>
              <Dropdown.Item href="/groupLoan">Group Loan</Dropdown.Item>
              <Dropdown.Item href="/goldLoan">Gold Report</Dropdown.Item>
              <Dropdown.Item href="/loanReport">Loan Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <FaFolderOpen/><p>Ledger</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
              <Dropdown.Item href="#/action-1">Cashbook</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bankbook</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Create Ledger</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Ledger Entry</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Ledger Report</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Create Ledger Group</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-2 mb-md-0">
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle d-flex icon-text align-items-center">
              <FaFolderOpen/><p>Report</p>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-list">
              <Dropdown.Item href="#/action-1">Transaction Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Top;

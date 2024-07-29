import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Paper } from "@mui/material";
import "../Home/home.css";
import { FaRegUserCircle } from "react-icons/fa";
import Top from "../Top/Top";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiFolderOn } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


Chart.register(PieController, ArcElement, Tooltip, Legend);

const Home = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const handleLeftBox = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleApproveKYC = () =>{
    navigate('/approveKYC')
  }
  const handleCustomerReport = () =>{
    navigate('/customerReport')
  }
  const handlePendingLoan = () =>{
    navigate('/pendingloan');
  }
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: [
          "Bank Transfer",
          "EMI Received",
          "Personal Loan Disbursed",
          "Group Loan Disbursed",
          "Gold Loan Disbursed",
          "Product Loan Disbursed",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [40, 40, 50, 60, 80, 50],
            backgroundColor: [
              "#38bdf8",
              "#c084fc",
              "#ec4899",
              "#f97316",
              "#fbbf24",
              "#14b8a6",
            ],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <>
      <Top />
      <div className={isOpen ? "main-open" : "main-close"}>
        <div>
          {
            isOpen && (
              <>
               <Paper className="leftbox">
            <h4>
              Quick Access <RxCrossCircled onClick={handleLeftBox} />
            </h4>

            <Paper className="overlapBox" onClick={handleApproveKYC}>
              <h4>
                <FaCheckCircle />
                Approve Cus KYC
              </h4>
            </Paper>
            <Paper className="overlapBox" onClick={handleCustomerReport}>
              <h4>
                <VscGraph />
                Customer Report
              </h4>
            </Paper>
            <Paper className="overlapBox" onClick={handlePendingLoan}>
              <h4>
                <FaMoneyCheckDollar />
                Pending Loan Dis
              </h4>
            </Paper>
            <Paper className="overlapBox" >
              <h4>
                <RiBankFill />
                Approve Closure Request
              </h4>
            </Paper>
            <Paper className="overlapBox">
              <h4>
                <VscGraph />
                EMI Due Report
              </h4>
            </Paper>
            <Paper className="overlapBox">
              <h4>
                <VscGraph />
                Collection Report
              </h4>
            </Paper>
            <Paper className="overlapBox">
              <h4>
                <VscGraph />
                Ledger Report
              </h4>
            </Paper>
            <Paper className="overlapBox">
              <h4>
                <VscGraph />
                Cashbook
              </h4>
            </Paper>
            <Paper className="overlapBox">
              <h4>
                <VscGraph />
                Bankbook
              </h4>
            </Paper>
          </Paper>
              </>
            )
          }
        </div>
        

        <Paper className={isOpen ? "boxmain-open" : "boxmain-close"}>
          <h1>
            <AiOutlineMenu onClick={handleLeftBox}/> Hello, IDSPay Nidhi Software|
          </h1>
          <Row>
            <Col lg={8}>
              <Row>
                <Col lg={6}>
                  <Paper className="box-1">
                    <div className="heading">
                      <h3>Today Business Summary</h3>
                    </div>
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Member Created</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Personal Loan Applied</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Group Loan Applied</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Group Loan Applied</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Employee Created</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Agent Created</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                  </Paper>
                </Col>
                <Col lg={6}>
                  <Paper className="box-1">
                    <div className="heading">
                      <h3>Pending Approval</h3>
                    </div>
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Customer KYC</p>
                      <p className="right-align">35</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Personal Loan</p>
                      <p className="right-align">16</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Group Loan Applied</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Employee Kyc</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Loan Disbursed</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <FaRegUserCircle />
                      <p>Agent KYC</p>
                      <p className="right-align">0</p>
                    </div>
                    <hr />
                  </Paper>
                </Col>
              </Row>

              <Row>
                <Paper className="box-1">
                  <div className="heading">
                    <h3>Total Bussiness Count</h3>
                  </div>
                  <Row>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          <FaRegCircleUser />
                        </p>
                        <h5>Branch</h5>
                        <h4>4</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          {" "}
                          <FaRegCircleUser />
                        </p>
                        <h5>Customer</h5>
                        <h4>44</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          {" "}
                          <FaRegCircleUser />
                        </p>
                        <h5>Personal Loan</h5>
                        <h4>24</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          {" "}
                          <FaRegCircleUser />
                        </p>
                        <h5>Total Group</h5>
                        <h4>3</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          {" "}
                          <FaRegCircleUser />
                        </p>
                        <h5>Group Loan</h5>
                        <h4>16</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          {" "}
                          <FaRegCircleUser />
                        </p>
                        <h5>Product Loan</h5>
                        <h4>0</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          {" "}
                          <FaRegCircleUser />
                        </p>
                        <h5>Gold Loan</h5>
                        <h4>0</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                    <Col>
                      <Paper className="box-2">
                        <p>
                          <FaRegCircleUser />
                        </p>
                        <h5>Business Loan</h5>
                        <h4>0</h4>
                        <Button className="report-button">Report</Button>
                      </Paper>
                    </Col>
                  </Row>
                </Paper>
              </Row>
            </Col>

            <Col lg={4}>
              <Paper className="box-1">
                <div className="heading">
                  <h3>Today's Txn Summary</h3>
                </div>
                <div className="summary">
                  <FaRegUserCircle />
                  <p>Bank Transfer</p>
                  <p className="right-align">₹ 0</p>
                </div>
                <hr />
                <div className="summary">
                  <FaRegUserCircle />
                  <p>EMI Recieved</p>
                  <p className="right-align">₹ 0</p>
                </div>
                <hr />
                <div className="summary">
                  <FaRegUserCircle />
                  <p>Personal Loan Disbursed</p>
                  <p className="right-align">₹ 0</p>
                </div>
                <hr />
                <div className="summary">
                  <FaRegUserCircle />
                  <p>Group Loan Disbursed</p>
                  <p className="right-align">₹ 0</p>
                </div>
                <hr />
                <div className="summary">
                  <FaRegUserCircle />
                  <p>Gold Loan Disbursed</p>
                  <p className="right-align">₹ 0</p>
                </div>
                <hr />
                <div className="summary">
                  <FaRegUserCircle />
                  <p>Product Loan Disbursed</p>
                  <p className="right-align">₹ 0</p>
                </div>
                <hr />
                <div>
                  <canvas
                    ref={chartRef}
                    style={{ width: "300px", height: "200px" }}
                  />
                </div>
              </Paper>
            </Col>
          </Row>

          <Row>
            <Paper className="box-1">
              <div className="heading">
                <h3>Total Txn Summary</h3>
              </div>
              <Row>
                <Col>
                  <Paper className="box-1">
                    <h5>Group Loan</h5>
                    <div className="summary">
                      <CiFolderOn />
                      <p>EMI Recieved</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Due Balance</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Disbursed Amt</p>
                      <p className="right-align">₹ 80200</p>
                    </div>
                    <hr />
                    <Button className="report-button">Report</Button>
                  </Paper>
                </Col>
                <Col>
                  <Paper className="box-1">
                    <h5>Personal Loan</h5>
                    <div className="summary">
                      <CiFolderOn />
                      <p>EMI Recieved</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Due Balance</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Disbursed Amt</p>
                      <p className="right-align">₹ 80200</p>
                    </div>
                    <hr />
                    <Button className="report-button">Report</Button>
                  </Paper>
                </Col>
                <Col>
                  <Paper className="box-1">
                    <h5>Gold Loan</h5>
                    <div className="summary">
                      <CiFolderOn />
                      <p>EMI Recieved</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Due Balance</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Disbursed Amt</p>
                      <p className="right-align">₹ 80200</p>
                    </div>
                    <hr />
                    <Button className="report-button">Report</Button>
                  </Paper>
                </Col>
                <Col>
                  <Paper className="box-1">
                    <h5>Product Loan</h5>
                    <div className="summary">
                      <CiFolderOn />
                      <p>EMI Recieved</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Due Balance</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Disbursed Amt</p>
                      <p className="right-align">₹ 80200</p>
                    </div>
                    <hr />
                    <Button className="report-button">Report</Button>
                  </Paper>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <Paper className="box-1">
                    <h5>Business Loan</h5>
                    <div className="summary">
                      <CiFolderOn />
                      <p>EMI Recieved</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Due Balance</p>
                      <p className="right-align">₹ 500</p>
                    </div>
                    <hr />
                    <div className="summary">
                      <CiFolderOn />
                      <p>Disbursed Amt</p>
                      <p className="right-align">₹ 80200</p>
                    </div>
                    <hr />
                    <Button className="report-button">Report</Button>
                  </Paper>
                </Col>
              </Row>
            </Paper>
          </Row>
        </Paper>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Top from "../Top/Top";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

const CustomerReport = () => {
  return (
    <>
      <Top />
      <Container>
        <div className="heading">
          <h3>Customer Report</h3>
        </div>
        <div className="choice">
          <Row>
            <Col lg={3}>
              <label for="cars">Search Bank</label>
              <br />
              <select id="cars" name="cars" className="options">
                <option value="volvo">Head Branch</option>
                <option value="saab">BANEGANJ</option>
                <option value="fiat">IPPB SERVICE</option>
                <option value="audi">BARPETA</option>
              </select>
            </Col>
            <Col lg={3}>
              <label for="cars">Select Employee</label>
              <br />
              <select id="cars" name="cars" className="options mb-4">
                <option value="volvo">Select Employee </option>
              </select>
            </Col>
            <Col lg={3}>
              <label>From Date</label>
              <br />
              <input type="date" className='mb-4 cusReportInput'></input>
            </Col>
            <Col lg={3}>
              <label>To Date</label>
              <br />
              <input type="date" className='mb-4 cusReportInput'></input>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <label>Mobile</label><br/>
              <input type="number" className='mb-4 cusReportInput'></input>
            </Col>
            <Col lg={3}>
              <label>Customer ID</label><br/>
              <input type="text" className='mb-4 cusReportInput'></input>
            </Col>
            <Col lg={3}>
              <label>Customer Name</label><br/>
              <input type="text" className='mb-1 cusReportInput'></input>
            </Col>
            <Col lg={3}>
              <Button className="searchbtn" type="success">
                Search
              </Button>
            </Col>
          </Row>
        </div>

        <div className="table-responsive">
            <table className="table-customer table-bordered">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>BRANCH</th>
                        <th>CUSTOMER ID</th>
                        <th>FULL NAME</th>
                        <th>GUARDIAN NAME</th>
                        <th>MOBILE NUMBER</th>
                        <th>EMAIL</th>
                        <th>AADHAR NUMBER</th>
                        <th>PAN NUMBER</th>
                        <th>ADDRESS</th>
                        <th>REGISTRATION DATE</th>
                        <th>CREATED BY</th>
                        <th>KYC STATUS</th>
                    </tr>
                </thead>
            </table>
        </div>
      </Container>
    </>
  );
};

export default CustomerReport;

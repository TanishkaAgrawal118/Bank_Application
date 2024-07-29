import React from "react";
import Top from "../Top/Top";
import "../LeftBox/leftbox.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const ApproveKYC = () => {
  return (
    <>
      <Top />
      <Container>
        <div>
          <div className="heading">
            <h3>VIEW KYC DOCUMENT</h3>
          </div>
          <div className="form-container">
            <form>
              <span>
              <input type="text" placeholder="Enter Customer ID" style={{borderTopRightRadius:"0px", borderBottomRightRadius:"0px"}} />
              <Button variant="success">Get Doc</Button>
              </span>
            </form>
          </div>
          <div className="kyc">
            <div className="heading">
              <h3>Customer Details</h3>
            </div>
            <Row>
              <Col>
                <label>Name</label><br/>
                <input type="text"></input>
              </Col>  
              <Col>
                <label>Guardian</label><br/>
                <input type="text"></input>
              </Col>
            </Row> 
            <Row>
              <Col>
                <label>Aaadhar Number</label><br/>
                <input type="number"></input>
              </Col>
              <Col>
                <label>PAN Number</label><br/>
                <input type="text"></input>
              </Col>  
            </Row>                              
          </div>
        </div>
      </Container>
    
    </>
  );
};

export default ApproveKYC;

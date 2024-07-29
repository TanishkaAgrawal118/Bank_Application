import React from "react";
import Top from "../Top/Top";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const MemberKYC = () => {
  return (
    <>
      <Top />
      <Container>
        <div className="register">
          <h5>Member Details</h5>
          <Form>
            <Row>
              <Col lg={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>Member Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Member name" />
                </Form.Group>
                <Form.Group controlId="formMemberCode">
                  <Form.Label>Member Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Member Code" />
                </Form.Group>
                <Form.Group controlId="formRegistrationDate">
                  <Form.Label>Registration Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter Registration Date" />
                </Form.Group>
                <Form.Group controlId="formMobile">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter Mobile No." />
                </Form.Group>
                <Form.Group controlId="formSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="text" placeholder="Enter Salary" />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-3">
                <Form.Group controlId="formAadhar">
                  <Form.Label>Aadhar No.</Form.Label>
                  <Form.Control type="number" placeholder="Enter Aadhar No." />
                </Form.Group>
                <Form.Group controlId="formVoterNo">
                  <Form.Label>Voter No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter Voter No." />
                </Form.Group>
                <Form.Group controlId="formRationCard">
                  <Form.Label>Ration Card No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter Ration Card No." />
                </Form.Group>
                <Form.Group controlId="formDLNo">
                  <Form.Label>DL No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter Driver's License Number" />
                </Form.Group>
              </Col>
            </Row>

            <h5>Member KYC</h5>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formSignature">
                  <Form.Label>Signature File</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formAadharCard">
                  <Form.Label>Aadhar Card</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formPanCard">
                  <Form.Label>Pan Card</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>

            <h5>Bank Details</h5>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formBankName">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Bank Name" />
                </Form.Group>
                <Form.Group controlId="formBranchName">
                  <Form.Label>Branch Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Branch Name" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formAccountNo">
                  <Form.Label>Account No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter Account No." />
                </Form.Group>
                <Form.Group controlId="formIFSCCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter IFSC" />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" variant="info">
              Submit KYC
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default MemberKYC;

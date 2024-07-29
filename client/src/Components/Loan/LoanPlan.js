import React from "react";
import Top from "../Top/Top";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './loan.css'

const LoanPlan = () => {
  return (
    <>
      <Top />
      <div className="register">
        <Container>
          <h5>Create Loan Plan</h5>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Plan Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Plan Code" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Loan Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Loan Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Loan Type</Form.Label>
                  <Form.Select>
                    <option value="">Select Loan Type</option>
                    <option value="group">Group Loan</option>
                    <option value="personal">Personal Loan</option>
                    <option value="gold">Gold Loan</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>ROI Type</Form.Label>
                  <Form.Select>
                    <option value="">Select ROI Type</option>
                    <option value="group">Flat Interest</option>
                    <option value="personal">Reducing Interest</option>
                    <option value="gold">Rule 78</option>
                  </Form.Select>
                </Form.Group>
                  <Form.Group>
                  <Form.Label>EMI Type</Form.Label>
                  <Form.Select>
                    <option value="">Select EMI Type</option>
                    <option value="group">Regular</option>
                    <option value="personal">Irregular</option>
                  </Form.Select>
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label>Processing Fee</Form.Label>
                  <Form.Control type="text" />
                </Form.Group> */}

              </Col>

              <Col lg={6}>
              <Form.Group>
                  <Form.Label>Min Amount</Form.Label>
                  <Form.Control type="number" placeholder="Enter Minimum Amount" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Max Amount</Form.Label>
                  <Form.Control type="text" placeholder="Enter Maximum Amount" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Min Age</Form.Label>
                  <Form.Control type="number" placeholder="Enter Minimum Age" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Max Age</Form.Label>
                  <Form.Control type="text" placeholder="Enter Maximum Age" />
                </Form.Group>
              </Col>
            </Row>

            <h5>Deduction Details</h5>
            <Row>
            <Col lg={3}>
            <Form.Group>
                <Form.Label>Processing Fee</Form.Label>
                <Form.Control className="input1" type="text" placeholder="Enter Processing Fee" />
            </Form.Group>
            </Col>
            <Col lg={3}>
            <Form.Group>
                <Form.Label>Legal Fee</Form.Label>
                <Form.Control className="input1" type="text" placeholder="Enter Legal Fee" />
            </Form.Group>
            </Col>
            <Col lg={3}>
            <Form.Group>
                  <Form.Label>GST</Form.Label>
                  <Form.Control className="input1" type="text" />
            </Form.Group>
          
            </Col>
            <Col lg={3}>
            <Form.Group>
                  <Form.Label>Insurance Fee</Form.Label>
                  <Form.Control className="input1" type="text" />
            </Form.Group>
            </Col>
           
            </Row>
            
           <Button variant="info">Create Plan</Button>
           
          </Form>
        </Container>
      </div>
    </>
  );
};

export default LoanPlan;

import React from 'react'
import Top from '../Top/Top'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const CustomerKYC = () => {
  return (
    <>
        <Top/>
        <Container>
            <div className='registration'>
                <h5>Customer KYC Registration</h5>

            <Form>
            <Row>
              <Col lg={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBank">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter bank Name" />
                </Form.Group>

                <Form.Group controlId="formBranch">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control type="text" placeholder="Enter branch" />
                </Form.Group>

                <Form.Group controlId="formPan">
                  <Form.Label>PAN No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter PAN No." />
                </Form.Group>
              
              
                <Form.Group controlId="formAddres">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group controlId="formGuardian">
                  <Form.Label>Guardian Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Guardian" />
                </Form.Group>
              </Col>


              <Col lg={6} className="mb-3">
                <Form.Group controlId="formAadhar">
                  <Form.Label>Aadhar No.</Form.Label>
                  <Form.Control type="number" placeholder="Enter Aadhar No." />
                </Form.Group>
                <Form.Group controlId="formAcc">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Account No." />
                </Form.Group>
                <Form.Group controlId="formIfsc">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter IFSC Code" />
                </Form.Group>
                <Form.Group controlId="formPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formSignature">
                  <Form.Label>Signature File</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>
            <Button type='submit' variant='info'>Submit KYC</Button>
            </Form>
            </div>
        </Container>
    </>
  )
}

export default CustomerKYC
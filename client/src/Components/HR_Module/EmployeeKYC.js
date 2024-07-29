import React from 'react'
import Top from '../Top/Top'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const EmployeeKYC = () => {
  return (
   <>
    <Top/>
    <div className='register'>
        <Container>
            <h5>Employee KYC</h5>
            <Form>
            <Row>
              <Col lg={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter Employee ID" />
                </Form.Group>

                <Form.Group controlId="formPan">
                  <Form.Label>PAN No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter PAN No." />
                </Form.Group>  
                <Form.Group controlId="formAadhar">
                  <Form.Label>Aadhar No.</Form.Label>
                  <Form.Control type="number" placeholder="Enter Aadhar No." />
                </Form.Group>
                <Form.Group controlId="formGuardian">
                  <Form.Label>Guardian Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Guardian" />
                </Form.Group>
                <Form.Group controlId="formAddres">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
              </Col>


              <Col lg={6} className="mb-3">
              
                <Form.Group>
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="text" placeholder="Enter Salary" />
                </Form.Group>
              
                <Form.Group controlId="formPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formSignature">
                  <Form.Label>Signature File</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Aadhar Card</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Pan Card</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>
            <Button type='submit' variant='info'>Submit KYC</Button>
            </Form>
        </Container>
    </div>
   </>
  )
}

export default EmployeeKYC
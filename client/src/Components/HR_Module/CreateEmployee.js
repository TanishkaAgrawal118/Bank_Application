import React from 'react'
import Top from '../Top/Top'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './hr.css'
const CreateEmployee = () => {
  return (
    <>
        <Top/>
        <Container>
            <div className='register'>
            <h5>Employee Registration</h5>
            <Form>
            <Row>
              <Col lg={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formPan">
                  <Form.Label>PAN No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter PAN No." />
                </Form.Group>
                <Form.Group controlId="formAadhar">
                  <Form.Label>Aadhar Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Aadhar No." />
                </Form.Group>
                <Form.Group controlId="formBranch">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control type="text" placeholder="Enter branch" />
                </Form.Group>
                <Form.Group controlId="formMobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Mobile No." />
                </Form.Group>
                <Form.Group controlId='formPincode' >
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control type="number" placeholder="Enter Pincode" />
                </Form.Group>
                <Form.Group controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="Enter State" />
                </Form.Group>
                <Form.Group >
                  <Form.Label>District</Form.Label>
                  <Form.Control type="text" placeholder="Enter District" />
                </Form.Group>
                <Form.Group controlId="formCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>
                <Form.Group controlId="formAddres">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
              </Col>


              <Col lg={6} className="mb-3">
              
              <Form.Group controlId="CustomerId">
                  <Form.Label>Customer ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter customer ID" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formFathers">
                  <Form.Label>Father's Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Father's Name" />
                </Form.Group>
                <Form.Group controlId="formOccupation">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control type="text" placeholder="Enter Occupation" />
                </Form.Group>
                <Form.Group controlId="formIncome">
                  <Form.Label>Annual Income</Form.Label>
                  <Form.Control type="text" placeholder="Enter Income" />
                </Form.Group>
                <Form.Group controlId="formDob">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control type="date" placeholder="Enter date of birth" />
                </Form.Group>
                <Form.Group controlId="formAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="Enter Age" />
                </Form.Group>
                <Form.Group controlId="formDoj">
                  <Form.Label>Date of Joining</Form.Label>
                  <Form.Control type="date" placeholder="Enter date of joining" />
                </Form.Group>
                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formMartial">
                  <Form.Label>Martial</Form.Label>
                  <Form.Select>
                    <option value="">Select</option>
                    <option value="male">Married</option>
                    <option value="female">Unmarried</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
         <Button variant='info'>Register</Button>
          </Form>
            </div>  
        </Container>
    </>
  )
}

export default CreateEmployee
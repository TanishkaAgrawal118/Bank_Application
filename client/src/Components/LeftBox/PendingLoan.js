import React from 'react'
import Top from '../Top/Top'
import { Button, Col, Container, Row } from 'react-bootstrap'

const PendingLoan = () => {
  return (
   <>
        <Top/>
        <Container>
        <div className="heading">
            <h3>Pending Disbursal Report</h3>
        </div>

        <div className='pendingbox1'>
            <form>
                <Row>
                    <Col className='mb-4' lg={3}>
                    <label for="cars" style={{color:"white"}}>Select Loan Tpye</label><br/>
                    <select id="cars" name="cars" className="options">
                    <option value="volvo">Individual Loan</option>
                    <option value="saab">Group Loan</option>
                    <option value="fiat">Fixed Loan</option>
                    <option value="audi">Glod/Silver Loan</option>
                    </select>
                    </Col>

                    <Col className='mb-4' >
                        <label style={{color:"white"}}>From Date *</label><br/>
                        <input type='date'></input>
                    </Col>
                    <Col className='mb-4'>
                        <label style={{color:"white"}}>To Date *</label><br/>
                        <input type='date'></input><br/>
                    </Col>
                    <Col className='mb-4'>
                        <Button className='searchbtn'>Submit</Button>
                    </Col>
                </Row>
            </form>
        </div>

        <div className='pendingbox1'>
            <div className='heading'>
                <h3>Results</h3>
            </div>

            <div className='table-responsive'>
            <table className='table-bordered table-pending pendingResult'>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Cus ID</th>
                        <th>Loan ID</th>
                        <th>Approval Date</th>
                        <th>Cus Name</th>
                        <th>Amount</th>
                        <th>Loan Status</th>
                        <th>Apply Date</th>
                        <th>Frequency</th>
                        <th>Tenure</th>
                        <th>Disbursal Action</th>
                    </tr>
                </thead>
            </table>
            </div>
          <Button variant='success'>Search For Loan</Button>
        </div>
        </Container>
   </>
  )
}

export default PendingLoan
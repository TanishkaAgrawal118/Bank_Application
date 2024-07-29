import React from 'react'
import Top from '../Top/Top'
import { Button, Col, Container, Row } from 'react-bootstrap'

const MemberReport = () => {
  return (
    <>
        <Top/>
        <Container>
        <div className="heading">
          <h3>Member Report</h3>
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
        </div>

        <div className="table-responsive">
            <table className="table-customer table-bordered">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>M CODE</th>
                        <th>M NAME</th>
                        <th>DOJ</th>
                        <th>ADDRESS</th>
                        <th>MOBILE NUMBER</th>
                        <th>EMAIL</th>
                        <th>AADHAR NUMBER</th>
                        <th>PAN NUMBER</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
            </table>
        </div>
        </Container>
        
    </>
  )
}

export default MemberReport
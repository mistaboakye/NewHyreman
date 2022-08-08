import React from 'react';
import "./job.css";
import DashboardHeader from "../../components/DashboardHeader";
import dot from "../../assets/icons/dot.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Job = () => {
    return (
      <div className="main">
        <DashboardHeader btnText="New Order" title={"JOBS"} />

        <div className="job-box">
          <p className="industry">IT & SOFTWARE DEVELOPMENT</p>
          <h3>JUNIOR MOBILE DEVELOPER</h3>
          <Row>
            <Col>
              <span>
                <b>Candidates</b>
              </span>
              <p className="box">
                Total <br />
                <b>25</b>
              </p>
              <p className="published">Published</p>
            </Col>
            <Col>
              <p>
                <b>Candidates</b>
              </p>
              <p>
                <img className="dot" src={dot} alt="dot-Icon"/>
                On-going
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default Job;
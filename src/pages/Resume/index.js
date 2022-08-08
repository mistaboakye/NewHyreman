import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../App.css";
import DashboardHeader from "../../components/DashboardHeader";
import Pagination from "../../components/Pagination/pagination";
import Account from "../../assets/icons/account-circle.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const ResumeBank = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main">
      <DashboardHeader btnText="New Order" title={"RESUME BANK"} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Shortlist Candidate to Job</Form.Label>
              <input
                type="search"
                id="form1"
                class="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </Form.Group>

            <div>
              <Row>
                <Col>
                  <Button variant="outline-primary" onClick={handleClose}>
                    Create Job
                  </Button>
                </Col>
                <Col>
                  <Button className="button" variant="primary" onClick={handleClose}> 
                    Shortlist
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <div class="box-container">
        <div class="row box-container">
          <div class="col-3 filter">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label>Education</Form.Label>
                <Form.Control type="text" placeholder="Education" />
              </Form.Group>

              <Form.Label>Gender</Form.Label>
              <Form.Select className="mb-4">
                <option>Male</option>
                <option value="1">Female</option>
              </Form.Select>
              <Form.Group className="mb-4">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Tools</Form.Label>
                <Form.Control type="text" placeholder="Tools" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Skills & Expertise</Form.Label>
                <Form.Control type="text" placeholder="Skills & Expertise" />
              </Form.Group>
              <Form.Label>Experience</Form.Label>
              <Form.Select className="mb-4" aria-label="Default select example">
                <option>Entry-level</option>
                <option value="1">Mid-level</option>
                <option value="2">Senior-level</option>
              </Form.Select>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          <div class="col-8">
            <div>
              <Row>
                <Col className="resume-found">
                  <p>20 result</p>
                </Col>
                <Col className="pagination">
                  <Pagination />
                </Col>
              </Row>
            </div>

            <div className="container result">
              <Row>
                <Col className="col-2">
                  <img className="image" src={Account} alt="Account-Icon" />
                </Col>
                <Col className="col-3">
                  <h5>Regina Boatema</h5>
                  <p>Accra, Ghana</p>
                  <p>Female</p>
                </Col>
                <Col className="col-5">
                  <p>Experience: Mid Level</p>
                  <p>Skills: React, Angular, Express.js, Nodejs </p>
                  <p>Education: Bsc Biochemical Engeneering </p>
                </Col>
                <Col className="col-2 ranking">
                  <h1>92%</h1>
                </Col>
              </Row>

              <Row className="detail">
                <Col>
                  <a href="#">
                    <p>View Resume</p>
                  </a>
                </Col>
                <Col>
                  <Button variant="primary" onClick={handleShow}>
                    Shortlist candidates
                  </Button>
                </Col>
              </Row>
            </div>

            <div className="container result">
              <Row>
                <Col className="col-2">
                  <img className="image" src={Account} alt="Account-Icon" />
                </Col>
                <Col className="col-3">
                  <h5>Regina Boatema</h5>
                  <p>Accra, Ghana</p>
                  <p>Female</p>
                </Col>
                <Col className="col-5">
                  <p>Experience: Mid Level</p>
                  <p>Skills: React, Angular, Express.js, Nodejs </p>
                  <p>Education: Bsc Biochemical Engeneering </p>
                </Col>
                <Col className="col-2 ranking">
                  <h1>85%</h1>
                </Col>
              </Row>

              <Row className="detail">
                <Col>
                  <a href="#">
                    <p>View Resume</p>
                  </a>
                </Col>
                <Col>
                  <Button variant="primary">Shortlist candidates</Button>
                </Col>
              </Row>
            </div>

            <div className="container result">
              <Row>
                <Col className="col-2">
                  <img className="image" src={Account} alt="Account-Icon" />
                </Col>
                <Col className="col-3">
                  <h5>Regina Boatema</h5>
                  <p>Accra, Ghana</p>
                  <p>Female</p>
                </Col>
                <Col className="col-5">
                  <p>Experience: Mid Level</p>
                  <p>Skills: React, Angular, Express.js, Nodejs </p>
                  <p>Education: Bsc Biochemical Engeneering </p>
                </Col>
                <Col className="col-2 ranking">
                  <h1>73%</h1>
                </Col>
              </Row>

              <Row className="detail">
                <Col>
                  <a href="#">
                    <p>View Resume</p>
                  </a>
                </Col>
                <Col>
                  <Button variant="primary">Shortlist candidates</Button>
                </Col>
              </Row>
            </div>

            <div className="container result">
              <Row>
                <Col className="col-2">
                  <img className="image" src={Account} alt="Account-Icon" />
                </Col>
                <Col className="col-3">
                  <h5>Regina Boatema</h5>
                  <p>Accra, Ghana</p>
                  <p>Female</p>
                </Col>
                <Col className="col-5">
                  <p>Experience: Mid Level</p>
                  <p>Skills: React, Angular, Express.js, Nodejs </p>
                  <p>Education: Bsc Biochemical Engeneering </p>
                </Col>
                <Col className="col-2 ranking">
                  <h1 className="ranking-low">45%</h1>
                </Col>
              </Row>

              <Row className="detail">
                <Col>
                  <a href="#">
                    <p>View Resume</p>
                  </a>
                </Col>
                <Col>
                  <Button variant="primary">Shortlist candidates</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBank;

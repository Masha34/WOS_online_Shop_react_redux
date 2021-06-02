import React from 'react'
import { Container, Row, Col, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './Footer.css';

import '@fortawesome/fontawesome-free/js/all.js';

const Footer = () => {
    return (
    <footer>
        <Container>
            <Row className="basic-navbar-nav">
                <Col>
                    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto first-col">
                                <Nav.Link className="nav">Product</Nav.Link>
                                <Nav.Link className="nav">Benefits</Nav.Link>
                                <Nav.Link className="nav">Partners</Nav.Link>
                                <Nav.Link className="nav">Team</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col>
                    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto first-col">                        
                                <Nav.Link className="nav-lin">Documentation</Nav.Link>
                                <Nav.Link className="nav-lin">Support</Nav.Link>
                                <Nav.Link className="nav-lin">Legal Terms</Nav.Link>
                                <Nav.Link className="nav-lin">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>   
                <Col>
                    <h5>Contact Us</h5>
                    <Form>
                        <FormControl type="email" className="form-contr" id="exampleInputEmail1" placeholder="Enter email" />
                            <fieldset className="form-group">
                                <textarea className="form-contr" id="exampleMessage" placeholder="Message"></textarea>
                            </fieldset>
                            <fieldset className="form-group text-xs-right">
                                {/* <button type="button" className="btn btn-secondary-outline btn-lg">Send</button> */}
                                <button type="button" className="btn btn-outline-light btn-send">Send</button>
                            </fieldset>
                    </Form>
                </Col>   
            </Row> 
            <Row>  
                <Col> 
                    <div className="social-block">
                        <div className="mr-auto social-icons">
                            <Nav.Link ><i className="fab fa-facebook-square"></i></Nav.Link>
                            <Nav.Link ><i className="fab fa-instagram-square"></i></Nav.Link>
                            <Nav.Link ><i className="fab fa-viber"></i></Nav.Link>
                            <Nav.Link ><i className="fab fa-telegram"></i></Nav.Link>
                            <Nav.Link ><i className="fab fa-twitter-square"></i></Nav.Link>
                            <Nav.Link ><i className="fab fa-google-plus-square"></i></Nav.Link>
                            <Nav.Link ><i className="fab fa-pinterest-square"></i></Nav.Link>
                            <Nav.Link ><i className="fab fa-youtube"></i></Nav.Link>
                        </div>
                    </div>
                </Col>
            </Row> 
            <Row>
                <Col>
                    <div className='bottom-block'>
                        <div className="rigts">All rigts reserved &copy; </div>
                    </div>
                </Col>
            </Row> 
        </Container>
    </footer>
    )
}

export default Footer

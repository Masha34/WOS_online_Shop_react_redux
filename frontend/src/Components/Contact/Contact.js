import React from 'react'
import { Navbar, Form, Button } from "react-bootstrap"
import "./contact.css";

// import { getAllProducts } from "../../Services/api-service";

const Contact = () => {
    // getAllProducts().then(data => {
    //     console.log("allProduct", data.products)
    // });
    
    return (
        <Navbar className="container bootstrap snippets bootdeys" style={{ height: '800px' }}>
            <Navbar className="row text-center">
                <Navbar className="col-sm-4" >
                    <Navbar className="containercontact">
                        <i className="fa fa-th fa-3x text-colored"></i>
                        <h4>Get In Touch</h4>
                        <span>P:</span><span>(123) 456-7890</span>
                        <span>E:</span>  <a className="text-muted">email@email.com</a>
                    </Navbar>
                </Navbar>
                <Navbar className="col-sm-4">
                    <Navbar className="containercontact">
                        <i className="fa fa-map-marker fa-3x text-colored"></i>
                        <h4>Our Location</h4>
                        <span>795 Folsom Ave, Suite 600 </span>
                        <span>San Francisco, CA 94107</span>

                    </Navbar>
                </Navbar>

                <Navbar className="col-sm-4">
                    <Navbar className="containercontact">
                        <i className="fa fa-book fa-3x text-colored"></i>
                        <h4>24x7 Support</h4>
                        <span>Industry's standard dummy text.</span>
                        <span>1234 567 890</span>
                    </Navbar>
                </Navbar>

            </Navbar>
            <Navbar className="mapform">
                <Navbar className="col-sm-6">
                    <Navbar className="contact-map">
                        <iframe className="mapp" src="https://www.google.com/maps/embed/v1/place?q=Rivne+Ukraine&amp;key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4" ></iframe>
                    </Navbar>
                </Navbar>
                <Navbar className="col-sm-6 formee ">
                    <Form role="form" action="https://formsubmit.io/send/coderthemes@gmail.com" method="post" className="form-main">

                        <Navbar className="form-group">
                            <label htmlFor="name2">Name</label>
                            <input className="form-control" id="name2" name="name" type="text" placeholder="Name" />
                            <Navbar className="error" id="err-name" style={{ display: "none" }}>Please enter name</Navbar>
                        </Navbar>

                        <Navbar className="form-group">
                            <label htmlFor="email2">Email</label>
                            <input className="form-control" id="email2" name="email" type="text" placeholder="E-mail" />
                            <Navbar className="error" id="err-emailvld" style={{ display: "none;" }}>E-mail is not a valid format</Navbar>
                        </Navbar>

                        <Navbar className="form-group">
                            <label htmlFor="message2">Message</label>
                            <textarea className="form-control" id="message2" name="message" rows="5" placeholder="Message"></textarea>
                            <Navbar className="error" id="err-message" style={{ display: "none;" }}>Please enter message</Navbar>
                        </Navbar>

                        <Navbar className="row">
                            <Navbar className="col-xs-12">
                                <Button className="btnform">Submit</Button>
                            </Navbar>
                        </Navbar>
                    </Form>
                </Navbar>
            </Navbar>
        </Navbar>
    )
}

export default Contact



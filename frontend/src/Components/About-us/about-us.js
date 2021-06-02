import React, { Fragment }  from 'react'
// import { Navbar, Form, Button } from "react-bootstrap";
import "./about-us.css";

const About_us = () => {
    return(
        <Fragment>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="title-area">
                        <h2>Our Services</h2>
                        <div className="separator separator-danger">✻</div>
                        <p className="titi">We have the best household appliances and many great accessories in our WOS shop. We are many years in the worlds household appliances platforms such as Amazone, Ebay, Rozetka and others.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="info-icon">
                            <div className="icon text-danger">
                                <i className="fa fa-angellist"></i>
                            </div>
                            <h3>Sales</h3>
                            <p className="description">We make our goods perfect for you. And our sales are too good for us and our wealth.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-icon">
                            <div className="icon text-danger">
                                <i className="fa fa-mobile"></i>
                            </div>
                            <h3>Mobiles</h3>
                            <p className="description">We have the best choice of the cellphones in the Universe and you are going to feel pleasure when you start to use them.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-icon">
                            <div className="icon text-danger">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <h3>Computers</h3>
                            <p className="description">We like to present the world with our work, so we make sure that our goods are going to be best for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section section-our-team-freebie">
            <div className="parallax filter filter-color-black">            
                <div className="container">
                    <div className="content">
                            <div className="row">
                                <div className="title-area">
                                    <h2 className="h2o" >Who We Are</h2>
                                    <div className="separator separator-danger">✻</div>
                                    <p className="description">We are the best web developers in the Universe. We know everything about our clients and users, we know all your needs and feelings.</p>
                                </div>
                            </div>
                    <div className="team">
                        <div className="row tocenter">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row tocenter">
                                    <div className="col-md-4">
                                        <div className="card card-member">
                                            <div className="content">
                                                <div className="avatar avatar-danger">
                                                    <img alt="..." className="img-circle" src="https://randomuser.me/api/portraits/women/40.jpg"/>
                                                </div>
                                                <div className="description">
                                                    <h3 className="title">Vika</h3>
                                                    <p className="small-text">Project developer</p>
                                                    <p className="description">I miss the old Kanye I gotta say at that time I’d like to meet Kanye And I promise the power is in the people and I will use the power given by the people to bring everything I have back to the people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-member">
                                            <div className="content">
                                                <div className="avatar avatar-danger">
                                                    <img alt="..." className="img-circle" src="https://randomuser.me/api/portraits/women/33.jpg"/>
                                                </div>
                                                <div className="description">
                                                    <h3 className="title">Masha</h3>
                                                    <p className="small-text">Team leader</p>
                                                    <p className="description">I miss the old Kanye I gotta say at that time I’d like to meet Kanye And I promise the power is in the people and I will use the power given by the people to bring everything I have back to the people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-member">
                                            <div className="content">
                                                <div className="avatar avatar-danger">
                                                    <img alt="..." className="img-circle" src="https://randomuser.me/api/portraits/men/42.jpg"/>
                                                </div>
                                                <div className="description">
                                                    <h3 className="title">Michel</h3>
                                                    <p className="small-text">Some dude</p>
                                                    <p className="description">I miss the old Kanye I gotta say at that time I’d like to meet Kanye And I promise the power is in the people and I will use the power given by the people to bring everything I have back to the people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    )
}


export default About_us;
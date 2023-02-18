import styles from '../styles/Home.module.sass'
import Head from "next/head";
import React, { useState, useEFfect } from "react";
import Button from "../sections/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Date, Venue, Time, Email, Insta } from "../data/variables";
export default function Home() {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => { setHydrated(true); }, []);
    if (!hydrated) return <div></div>;
    return (
        <div>
            <Head>
                <title>MCAIC 2023</title>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <meta name="description" content="Join MCAIC, a computer science competition for middle schoolers!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400|Work+Sans:300,400,700&display=optional" />
                <link rel="stylesheet" href="fonts/stylesheet.css" />
                <link rel="stylesheet" href="css/style.min.css" />
                <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js" async />
            </Head>
            <div className="jumbotron d-flex align-items-center">
                <div className="container text-left" style={{ width: "30vw", paddingLeft: "10px", marginLeft: "10px", paddingRight: "0px", marginRight: "0px" }}>
                    <p>
                    <img src="hackmca-logo.svg" style={{ height: "auto", width: "35vw", filter: `brightness(100)`, marginBottom: "40px" }} />
                    <div style={{ marginLeft: "4vw" }} >
                        <Button href={"hackmca"} displayText={"HackMCA"} light={true} />
                    </div>
                    </p>
                </div>
                <div className="container text-center" style={{ width: "60vw" }}>
                    <h1 style={{ paddingTop: "0px", paddingLeft: "10px", marginLeft: "0px", paddingRight: "10px", marginRight: "0px" }} className="display-1 mb-4 mcaic-logo">
                        <img src="mcacs-logo.svg" style={{ height: "50vh", filter: `brightness(100)` }} />
                        <span>
                            <h2 style={{ marginBottom: "20px" }}><br />Middlesex County Academy</h2>
                            <h4>Computer Science Club</h4>
                        </span>
                    </h1>
                </div>
                <div className="container text-right" style={{ width: "30vw", paddingLeft: "0px", marginLeft: "0px", paddingRight: "10px", marginRight: "10px" }}>
                    <p>
                    <img src="img/mcaic_logo.png" style={{ height: "auto", width: "35vw", filter: `brightness(100)`, marginBottom: "30px" }} />
                    <a href="mcaic"><button type="button" style={{ width: "100px", height: "50px", marginRight: "5vw" }}>MCAIC</button></a>
                    </p>
                </div>
            </div>
            <section id="features" className="bg-white">
                <div className="container">
                    <div className="section-content">
                        <div className="title-wrap mb-5" data-aos="fade-up">
                            <h2 className="section-title">
                                About MCAIC
                            </h2>
                            <p className="section-sub-title" style={{ marginTop: 0, marginBottom: 0, marginRight: '15%', marginLeft: '15%' }}>
                                The Middlesex County Academy Informatics Competition is a full-day computer science tournament
                                for students in grades 6-8 across the state of New Jersey. Hosted by the Edison Academy&#39;s
                                computer science club, MCAIC gives young programmers and CS enthusiasts a chance to shine and
                                compete for big prizes!
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-10 offset-md-1 features-holder">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 text-center mt-4">
                                        <div className="shadow rounded feature-item p-4 mb-4" data-aos="fade-up">
                                            <div className="my-4">
                                                <i className="lnr lnr-users fs-40"></i>
                                            </div>
                                            <h4>Who</h4>
                                            <p>Middle school students (grades 6-8) in NJ</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 text-center">
                                        <div className="shadow rounded feature-item p-4 mb-4" data-aos="fade-up">
                                            <div className="my-4">
                                                <i className="lnr lnr-calendar-full fs-40"></i>
                                            </div>
                                            <h4>When</h4>
                                            <p>Saturday, March 4, 2023 from 9 AM - 4 PM</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 text-center mt-4">
                                        <div className="shadow rounded feature-item p-4 mb-4" data-aos="fade-up">
                                            <div className="my-4">
                                                <i className="lnr lnr-location fs-40"></i>
                                            </div>
                                            <h4>Where</h4>
                                            <p>Middlesex College Campus in Edison, NJ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles["content-section"]}>
                <div className={[styles["content-section-yellow"], styles["content-section"]].join(" ")}>
                    <div className={styles["content-section-inner"]}>
                        <h2>What is HackMCA?</h2>
                        <br />
                        <p style={{ fontSize: "20px" }}> HackMCA is a hackathon run by the Middlesex County Academy Computer Science Club in Edison, NJ. Join us for a day of coding, inventing, and learning on {Date}! </p>
                        <div className={styles["fancy-list"]}>
                            <span style={{ fontWeight: "lighter" }}><FontAwesomeIcon icon={faCalendar} /><b>Date:</b> {Date}</span>
                            <span style={{ fontWeight: "lighter" }}><FontAwesomeIcon icon={faClock} /><b>Time:</b> {Time}</span>
                            <span style={{ fontWeight: "lighter" }}><FontAwesomeIcon icon={faMapLocationDot} /><b>Venue:</b> {Venue}</span>
                        </div>
                    </div>
                </div>
            </div>
            <section id="client" className="overlay bg-fixed" style={{ backgroundImage: `url(img/bkg1.png)` }}>
                <div className="container">
                    <div className="section-content" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap mb-5">
                                    <h2>Our Club</h2>
                                    <p style={{ marginTop: 0, marginBottom: 0, marginRight: '15%', marginLeft: '15%' }}>We are the Middlesex County Academy Computer Science Club. We&#39;re a
                                        diverse group of students from the Middlesex County Academy in Edison, New Jersey who
                                        are passionate about computer science and technology.</p>
                                </div>
                            </div>
                            <div className="col-md-12 client-holder">
                                <div className="client-slider">
                                    <div className="client-item">
                                        <img className="img-responsive" src="img/team/sam.png" alt="Sam" />
                                        <span>Sam</span>
                                    </div>
                                    <div className="client-item">
                                        <img className="img-responsive" src="img/team/harini.png" alt="Harini" />
                                        <span>Harini</span>
                                    </div>
                                    <div className="client-item">
                                        <img className="img-responsive" src="img/team/aarav.png" alt="Aarav" />
                                        <span>Aarav</span>
                                    </div>
                                    <div className="client-item">
                                        <img className="img-responsive" src="img/team/neil.png" alt="Neil" />
                                        <span>Neil</span>
                                    </div>
                                    <div className="client-item">
                                        <img className="img-responsive" src="img/team/pranav.png" alt="Pranav" />
                                        <span>Pranav</span>
                                    </div>
                                    <div className="client-item">
                                        <img className="img-responsive" src="img/team/ethan.png" alt="Ethan" />
                                        <span>Ethan</span>
                                    </div>
                                    <div className="client-item">
                                        <img className="img-responsive" src="img/team/sanjay.png" alt="Sanjay" />
                                        <span>Sanjay</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={[styles["content-section-dark"], styles["content-section"]].join(" ")}>
                <h1>Contact Us!</h1>
                <br/>
                <span>
                    <p>{Email}&nbsp;&nbsp;&nbsp;{Insta}</p>
                </span>
            </div>
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js" async />
            <script src="vendor/bootstrap/popper.min.js" async />
            <script src="vendor/bootstrap/bootstrap.min.js" async />
            <script src="vendor/select2/select2.min.js" async />
            <script src="vendor/stellar/jquery.stellar.js" type="text/javascript" charSet="utf-8" async />
            <script src="vendor/isotope/isotope.min.js" async />
            <script src="vendor/waypoints/waypoint.min.js" async />
        </div>
    )
}
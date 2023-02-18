import Head from "next/head";
export default function Mcaic() {
    return (
        <div>
            <Head>
                <title>MCAIC 2023</title>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
                <meta name="description" content="Join MCAIC, a computer science competition for middle schoolers!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="vendor/select2/select2.min.css" />
                <link rel="stylesheet" href="vendor/owlcarousel/owl.carousel.min.css" />
                <link rel="stylesheet" href="vendor/lightcase/lightcase.css" />
                <link rel="stylesheet" href="vendor/aos/dist/aos.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400|Work+Sans:300,400,700&display=optional"/>
                <link rel="stylesheet" href="fonts/stylesheet.css" />
                <link rel="stylesheet" href="css/style.min.css" />
                <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js" async />
            </Head>
            <body data-spy="scroll" data-target="#navbar" className="static-layout">
                <div className="jumbotron d-flex align-items-center">
                    <div className="container text-center">
                        <h1 className="display-1 mb-4 mcaic-logo">
                            <img src="img/mcaic_logo.png" style={{ filter: `brightness(100)` }} />
                            <span>
                                <h2><br />March 4, 2023</h2>
                            </span>
                            <a href="mcaic-register"><button type="button" className="btn btn-outline-primary">REGISTER NOW</button></a>
                        </h1>
                    </div>
                    <div className="rectangle-1"></div>
                    <div className="rectangle-2"></div>
                    <div className="rectangle-transparent-1"></div>
                    <div className="rectangle-transparent-2"></div>
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                    <div className="triangle triangle-1">
                        <img src="img/obj_triangle.png" alt="" />
                    </div>
                    <div className="triangle triangle-2">
                        <img src="img/obj_triangle.png" alt="" />
                    </div>
                    <div className="triangle triangle-3">
                        <img src="img/obj_triangle.png" alt="" />
                    </div>
                    <div className="triangle triangle-4">
                        <img src="img/obj_triangle.png" alt="" />
                    </div>
                </div>
                <div className="down-button-container">
                    <div className="down-button-div">
                        <img src="img/down.png" />
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
                <section id="client" className="overlay bg-fixed" style={{ backgroundImage: `url(img/bkg1.png)` }}>
                    <div className="container">
                        <div className="section-content" data-aos="fade-up">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-wrap mb-5">
                                        <h2>Our club</h2>
                                        <p style={{ marginTop: 0, marginBottom: 0, marginRight: '15%', marginLeft: '15%' }}>We are the Middlesex County Academy Computer Science Club. We&#39;re a
                                            diverse group of students from the Middlesex County Academy in Edison, New Jersey who
                                            are passionate about computer science and technology.</p>
                                    </div>
                                </div>
                                <div className="col-md-12 client-holder">
                                    <div className="client-slider owl-carousel">
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
                <section id="section-featurettes" className="featurettes">
                    <div className="container">
                        <div className="section-content">
                            <div className="title-wrap mb-5" data-aos="fade-up">
                                <h2 className="section-title">Schedule</h2>
                                <p className="section-sub-title" style={{ marginTop: 0, marginBottom: 0, marginRight: '15%', marginLeft: '15%' }}>
                                    MCAIC will be held at the Edison Academy Magnet School and the Middlesex College College Center,
                                    both on the Middlesex College Campus. The event will run from 9 AM to 4 PM.
                                </p>
                            </div>
                            <table className="section-sub-title" data-aos="fade-up">
                                <tr>
                                    <td>9:00 AM - 9:30 AM</td>
                                    <td>Check-in and T-shirt distribution</td>
                                </tr>
                                <tr>
                                    <td>9:30 AM - 10:00 AM</td>
                                    <td>Opening ceremony</td>
                                </tr>
                                <tr>
                                    <td>10:00 AM - 11:00 AM</td>
                                    <td>Individual round 1</td>
                                </tr>
                                <tr>
                                    <td>11:15 AM - 12:15 PM</td>
                                    <td>Individual round 2</td>
                                </tr>
                                <tr>
                                    <td>12:30 PM - 1:15 PM</td>
                                    <td>Pizza lunch</td>
                                </tr>
                                <tr>
                                    <td>1:30 PM - 2:30 PM</td>
                                    <td>Team programming round 1</td>
                                </tr>
                                <tr>
                                    <td>2:30 PM - 3:30 PM</td>
                                    <td>Team programming round 2</td>
                                </tr>
                                <tr>
                                    <td>3:30 PM - 4:00 PM</td>
                                    <td>Awards and closing</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <section id="section-featurettes" className="overlay bg-fixed">
                        <div className="container">
                            <div className="section-content aos-init aos-animate">
                                <div className="row">
                                    <div className="col-md-12" data-aos="fade-up">
                                        <div className="title-wrap mb-5">
                                            <h2>FAQ</h2>
                                            <p style={{ marginTop: 0, marginBottom: 0, marginRight: '15%', marginLeft: '15%' }}>Have any questions? Maybe we can answer them.</p>
                                        </div>
                                        <button className="accordion-s">What is the registration fee?</button>
                                        <div className="panel-s">
                                            <span>The fee is <b>$10</b>, which can be paid during registration.</span>
                                        </div>
                                        <button className="accordion-s">How do you register?</button>
                                        <div className="panel-s">
                                            <span>You can register <a href="mcaic-register">here</a>.</span>
                                        </div>
                                        <button className="accordion-s">What is an informatics competition?</button>
                                        <div className="panel-s">
                                            <span>An informatics competition, or computer science competition, is a tournament to
                                                test competitors on their theoretical and practical programming knowledge. In the
                                                case of MCAIC, we are looking for upstart students with some knowledge of CS and
                                                coding. We will be testing them through a series of multiple-choice questions and
                                                programming prompts that aim to solve real-world problems.</span>
                                        </div>
                                        <button className="accordion-s">What is the purpose of this event?</button>
                                        <div className="panel-s">
                                            <span>As a computer science club at a STEM-based high school, we are always looking to
                                                foster interest in computer science in our community, and we believe MCAIC is truly
                                                a fun and memorable way to do this!</span>
                                        </div>
                                        <button className="accordion-s">Who is this event for?</button>
                                        <div className="panel-s">
                                            <span>This event is for anyone in grades 6-8 from the state of New Jersey with a passion
                                                for computer science. Experience in competitive programming, such as participation
                                                in the American Computer Science League, is recommended but not required.</span>
                                        </div>
                                        <button className="accordion-s">Is it individual or team-based?</button>
                                        <div className="panel-s">
                                            <span>The competition will have two individual question rounds and two team programming
                                                rounds. Teams of 4-6 will be <i>mandatory</i> for the latter; you can decide your
                                                own teams or allow us to assign you teammates on the day-of.</span>
                                        </div>
                                        <button className="accordion-s">How do I prepare?</button>
                                        <div className="panel-s">
                                            <span>If you&#39;d like to get some practice in before the day-of, scroll down for a list of
                                                practice questions and topics.</span>
                                        </div>
                                        <button className="accordion-s">Will food be provided?</button>
                                        <div className="panel-s">
                                            <span>You can preorder pizza lunch through the registration form for $5. If you&#39;d like,
                                                you
                                                can bring your own lunch. We will also have free snacks and drinks available
                                                throughout the day.</span>
                                        </div>
                                        <button className="accordion-s">How do I arrive at the venue?</button>
                                        <div className="panel-s">
                                            <span>The event will begin at the Edison Academy Magnet School, located on the Middlesex
                                                College campus. The address is 100 Technology Dr, Edison, NJ 08837. Please arrive
                                                before 9:30 AM to complete check-in and arrange a ride for pickup after 4:00
                                                PM.</span>
                                        </div>
                                        <button className="accordion-s">What are the prizes?</button>
                                        <div className="panel-s">
                                            <span>Winners will be receiving medallions and cloud credits or swag made possible by
                                                our sponsors.</span>
                                        </div>
                                        <button className="accordion-s">Can I get a t-shirt to remember the experience?</button>
                                        <div className="panel-s">
                                            <span>Yes! You can preorder an MCAIC t-shirt during registration for $12. Shirts will be
                                                available in S, M, L and XL.</span>
                                        </div>
                                        <button className="accordion-s">What if I don&#39;t like computer science?</button>
                                        <div className="panel-s">
                                            <span>Our school doesn&#39;t just host a computer science competition! Check out <a
                                                href="https://www.mcmsnj.net/domain/1284" target="_blank" rel="noreferrer">our website</a> for
                                                upcoming STEM opportunities for middle schoolers, including tournaments for
                                                competition math, quiz bowl, and science bowl.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section id="reservation" className="bg-white section-content">
                    <div className="container">
                        <div className="row align-items-center" data-aos="fade-up">
                            <div className="col-lg-4">
                                <h2 className="mb-4">Practice questions</h2>
                            </div>
                            <iframe src="https://drive.google.com/file/d/1-MS14HsGVAudyxM9Psj5D3FF0oI2LBuw/preview"
                                style={{ border: 0, display: 'inline-block', width: "100%", height: "600px", padding: "20px" }}></iframe>
                        </div>
                    </div>
                </section>
                <section id="cta" className="bg-fixed overlay" style={{ backgroundImage: `url("img/bkg2.png")` }}>
                    <div className="container">
                        <div className="section-content" data-aos="fade-up">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="mb-2">Don&#39;t wait till the last minute!</h2>
                                    <p>Reach us at <a href="mailto:mcacsclub@gmail.com"
                                        style={{ color: 'white', textDecoration: 'underline' }}>mcacsclub@gmail.com</a> or
                                        @mca.cs.club on Instagram with any questions.</p>
                                    <br />
                                    <a href="mcaic-register"><button type="button" className="btn btn-outline-primary">REGISTER NOW</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="mastfoot my-3">
                    <div className="inner container">
                        <div className="row">
                            <nav className="nav nav-mastfoot justify-content-center">
                                <a className="nav-link"
                                    href="https://www.facebook.com/pages/Middlesex%20County%20Academy/112611255420077/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="nav-link" href="https://twitter.com/MCVTS_ACE" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="nav-link" href="https://www.instagram.com/edisonacademymagnetschool/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </nav>
                        </div>
                    </div>
                </footer>
                <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js" async />
                <script src="vendor/bootstrap/popper.min.js" async />
                <script src="vendor/bootstrap/bootstrap.min.js" async />
                <script src="vendor/select2/select2.min.js" async />
                <script src="vendor/owlcarousel/owl.carousel.min.js" async />
                <script src="vendor/stellar/jquery.stellar.js" type="text/javascript" charSet="utf-8" async />
                <script src="vendor/isotope/isotope.min.js" async />
                <script src="vendor/lightcase/lightcase.js" async />
                <script src="vendor/waypoints/waypoint.min.js" async />
                <script src="vendor/aos/dist/aos.js" async />
                <script src="js/accordion.js" async />
                <script src="js/app.min.js" async />
            </body>
        </div>
    );
}
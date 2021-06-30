import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import './About.css';
//import CenterMode from './slickcarousel';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';

function CommonScrollNav() {
  return (
    <div className="scroll">
      <ScrollspyNav
        scrollTargetIds={["section1", "section2", "section3", "section4"]}
        offset={100}
        scrollDuration="1000"
        headerBackground="false"
        activeNavClass="active"
      >
        <div className="sticky-top">
          <Navbar className="custom_background" variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto text-center">
                <Nav.Link className="custom_nav2_links" href="#section1">Who we are</Nav.Link>
                <Nav.Link className="custom_nav2_links" href="#section2">What we believe</Nav.Link>
                <Nav.Link className="custom_nav2_links" href="#section3">How we work with clients</Nav.Link>
                <Nav.Link className="custom_nav2_links" href="#section4">Our community impact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </ScrollspyNav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-12">
            <div className="panel panel-default">
              <div className="panel-body custom_panel">
                <i className="fa fa-2x fa-bell fa-icon"></i>
                <span><h1 className="text-center">We create 360° value by embracing change</h1></span>
                <p className="text-center">
                  We now work with 91 of the Fortune Global 100.
                  As of 2021, we've made 19 consecutive appearances on the list of Fortune's "World's Most Admired Companies".
                  And that's just the beginning.
                </p>
                <br /><br />
                <Link to="/hashcodejr" target="_blank">
                  <button className="btn btn_on_panel">Discover our History</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <br /><br /><br />
      <div>
        <div id="section1" style={{ "height": "800px" }}><span><h1 className="text-center">Who we are</h1></span>
          <section id="header" className="d-flex align-items-center">
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>Our purpose:</h1>
                      <h2 className="my-3">To deliver on the promise of technology and human ingenuity</h2>
                      <p>We embrace the power of change to create long-lasting value in every direction for our clients, people and communities. </p>
                      <div className="my-3">
                        <NavLink to='/' className="btn-get-started">Get Started </NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={process.env.PUBLIC_URL + "/images/img2.svg"} className="img-fluid animated" alt="responsive home image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="section2" style={{ "height": "900px" }}><span><h1 className="text-center">What we believe</h1></span>
        <div className="container-fluid mb-5">
              <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 header-img">
                    <br /><br />
                      <img src={process.env.PUBLIC_URL + "/images/High Energy-website1.png"} alt="responsive home image" / > 
                      </div>
                      
          <h2>Core Values</h2>
          <p>Our values shape the culture of our organization and define the character of our company. We live the core values through individual behaviors.
            They serve as the foundation for how we act and make decisions.
          </p>
          </div>
          </div>
        </div>
        <div id="section3" style={{ "height": "800px" }}><span><h1 className="text-center">How we work with clients</h1></span>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 header-img">
                    <br /><br />
                      <img src={process.env.PUBLIC_URL + "/images/img3.svg"} className="img-fluid animated" alt="responsive home image" />
                    </div>
                    <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                      <h2 className="my-3">Growing customer expectations. Market-shaping AI. Self-optimizing systems.</h2>
                      <p>The post-digital age shows no signs of slowing down.  And the need for rapid business transformation has never been greater. <br />
                        We meet clients wherever they are on their paths to change—in every industry across the globe—and partner with them to create lasting value in every direction.
                      </p>
                      <div className="my-3">
                        <NavLink to='/' className="btn-get-started">Explore More </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  <img className="image_lejhro_one" 
                     src={process.env.PUBLIC_URL + "/images/Lejhro_image_1.jpg"}
                     alt="Lejhropic2"  
                   />*/}
        </div>
        <div id="section4" style={{ "height": "800px" }}><span><h1 className="text-center">Our community impact</h1></span>
          <br></br>
          <div className="container-fluid">
            <div className="row custom_column">
              <div className="col-md-3 col-sm-12 col-xs-12">
                <Card className="custom_card1">
                  <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode1.png"} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">Our Focus on the Environment</CardTitle>
                    <CardText>We’re committed to playing a leading role in the change to a low-carbon economy.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <Card className="custom_card2">
                  <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode2.png"} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">Corporate Citizenship</CardTitle>
                    <CardText>We’re working to build a future of shared success.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <Card className="custom_card3">
                  <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode3.png"} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">Skills to Succeed</CardTitle>
                    <CardText>We’re helping people gain the skills to get a job or build a business.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <Card className="custom_card4">
                  <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode4.png"} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">Lejhro Development Partnerships</CardTitle>
                    <CardText>We’re using our global capabilities and experience to improve lives in the developing world.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonScrollNav;

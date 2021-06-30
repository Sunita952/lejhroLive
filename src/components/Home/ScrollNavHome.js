import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import './TopNavbar.css';
//import CenterMode from './slickcarousel';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarousalContainer from './CarousalContainer';

function ScrollNavHome()
{
  return(
      <div className="scroll">
           <ScrollspyNav 
                    scrollTargetIds={[ "section1","section2", "section3", "section4"]}
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
                    <Nav.Link className="custom_nav2_links" href="#section1">Power of common ideas</Nav.Link>
                    <Nav.Link className="custom_nav2_links" href="#section2">Great Minds</Nav.Link>
                    <Nav.Link className="custom_nav2_links" href="#section3">Great Society</Nav.Link>
                    <Nav.Link className="custom_nav2_links" href="#section4">High Energy</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              </div>
             </ScrollspyNav>  
             <br></br>
           <CarousalContainer /> 
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
                       <span><h1 className="text-center">Showcase Your culture of innovation</h1></span>
                       <p className="text-center">
	                     		Apply for Fast Company’s “Best Workplaces for Innovators,” developed in collaboration with Accenture.
	                  	</p>
                      <br/><br/>
                       <a href="#/hashcodejr" target="_blank">
                         <button className="btn btn_on_panel">explore now</button>
                       </a>
                      </div>
                   </div>
                   </div>
                   <div className="col-md-1"></div>
                   </div>
            </div>
             <br/><br/><br/>
           <div>
                <div id="section1" style={{"height": "800px"}}><span><h1 className="text-center">Power of common ideas</h1></span>
                 <p>The Common Man is a cartoon character created by Indian author and cartoonist R. K.
                  Laxman. For over a half of a century, the Common Man has represented the hopes,
                  aspirations, troubles and perhaps even foibles of the average Indian, through a daily
                  comic strip, You Said It in The Times of India.
                 </p>
                 <div className="container-fluid">
                    <div className="row custom_column">
                       <div className="col-md-3 col-sm-12 col-xs-12">
                         <Card className="custom_card1">
                         <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode5.jpg"} alt="Card image cap" />
                         <CardBody>
                           <CardTitle tag="h5">Card title</CardTitle>
                           <CardText>Some quick example text to build on the card title</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </div>
                       <div className="col-md-3 col-sm-12 col-xs-12">
                       <Card className="custom_card2">
                         <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode6.jpg"} alt="Card image cap" />
                         <CardBody>
                           <CardTitle tag="h5">Card title</CardTitle>
                           <CardText>Some quick example text to build on the card title</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </div>
                       <div className="col-md-3 col-sm-12 col-xs-12">
                       <Card className="custom_card3">
                         <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode7.jpg"} alt="Card image cap" />
                         <CardBody>
                           <CardTitle tag="h5">Card title</CardTitle>
                           <CardText>Some quick example text to build on the card title</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </div>
                       <div className="col-md-3 col-sm-12 col-xs-12">
                       <Card className="custom_card4">
                         <CardImg className="custom_card_image" src={process.env.PUBLIC_URL + "/images/centermode8.jpg"} alt="Card image cap" />
                         <CardBody>
                           <CardTitle tag="h5">Card title</CardTitle>
                           <CardText>Some quick example text to build on the card title</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </div>
                    </div>
                  </div>
                </div>
                <div id="section2" style={{"height":"900px"}}><span><h1 className="text-center">Great Minds</h1></span>
                  <p>The Great Society was a set of domestic programs in the United States launched
                   by Democratic President Lyndon B. Johnson in 1964–65. It was coined during a 1964
                   speech by President Lyndon B. Johnson at Ohio University[1] and came to represent
                   his domestic agenda.

                   [2] The main goal was the total elimination of poverty and racial injustice.
                  </p>
                   <video width="100%"  autoPlay loop muted controls>
                      <source src="videos/Great Minds-website.mp4" type="video/mp4"/>
                   </video>
                </div>
                <div id="section3" style={{"height": "1000px"}}><span><h1 className="text-center">Great Society</h1></span>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                 {/*  <img className="image_lejhro_one" 
                     src={process.env.PUBLIC_URL + "/images/Lejhro_image_1.jpg"}
                     alt="Lejhropic2"  
                   />*/}
                </div>
                <div id="section4" style={{"height": "800px"}}><span><h1 className="text-center">High Energy</h1></span>
                  <br></br>
                 <img className="image_lejhro_one" 
                     src={process.env.PUBLIC_URL + "/images/High Energy-website.png"}
                     alt="Lejhropic2"  
                     width="100%"
                     /> 
                </div>
            </div>
      </div>
  )
}

export default ScrollNavHome;

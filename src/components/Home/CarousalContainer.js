import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () =>
{
  return ( 
        <Carousel>
                <Carousel.Item interval={10000}>
                  <video className="slider" width="100%" autoPlay loop muted controls>
                   <source src="videos/video1.mp4" type="video/mp4"/>
                   </video>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item interval={10000}>
                  <video className="slider" width="100%"  autoPlay loop muted controls>
                   <source src="videos/video2.mp4" type="video/mp4"/>
                   </video>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item interval={10000}>
                  <video className="slider" width="100%"  autoPlay loop muted controls>
                   <source src="videos/video4.mp4" type="video/mp4"/>
                   </video>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item interval={10000}>
                  <video className="slider" width="100%"  autoPlay loop muted controls>
                   <source src="videos/video3.mp4" type="video/mp4"/>
                   </video>
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                 </Carousel.Item>
            </Carousel>
         )
}

export default CarouselContainer;


{/*                
  <Carousel>
  <Carousel.Item interval={2500}>
                    <img
                    className="d-block w-100"
                    src="images/technology.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                    className="d-block w-100"
                    src="images/technology1.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                    className="d-block w-100"
                    src="images/employees.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                    className="d-block w-100"
                    src="images/blur.jpg"
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                  </Carousel>
  */}
              
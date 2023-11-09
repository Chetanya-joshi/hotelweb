import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./LandingPAge/Header";
import Footer from "./LandingPAge/Footer";

const VaayuCafe = () => {
  const images = [
    

    
    { src: "vayucafe1.jpg", alt: "Image 2" },
    { src: "vayucafe2.jpg", alt: "Image 3" },
    { src: "vayucafe3.jpg", alt: "Image 1" },
    { src: "vayucafe4.jpg", alt: "Image 1" },
    { src: "vayucafe5.jpg", alt: "Image 3" },
    { src: "vayucafe6.jpg", alt: "Image 3" },
    { src: "vayucafe7.jpg", alt: "Image 3" },
    { src: "vayucafe8.jpg", alt: "Image 1" },
    { src: "vayucafe9.jpg", alt: "Image 1" },
    { src: "vayucafe13.jpg", alt: "Image 1"},
    { src: "vayucafe14.jpg", alt: "Image 1"},
    { src: "vayucafe15.jpg", alt: "Image 1"},
    { src: "vayucafe16.jpg", alt: "Image 1"},
    { src: "vayucafe17.jpg", alt: "Image 1"},
    // { src: "vayucafe19.jpg", alt: "Image 1" },
   

    // Add more images here
  ];

  return (
    <>
      <Header />
      <Container fluid className="py-5">
        <Row lg={7} className="justify-content-center px-5">
          {" "}
          <h1 className="text-center" style={{ color: "teal" }}>
            Vaayu Cafe
          </h1>
         
        </Row>

        <Row
          xs={1}
          sm={2}
          md={3}
          lg={4}
          xl={3}
          className="g-4 py-5 justify-content-center"
        >
          {images.map((image, index) => (
            <Col key={index}>
              <div className="row gallery-item d-flex justify-content-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid rounded"
                  style={{ height: "430px", width: "400px" ,objectFit:"fit"}} // Set a fixed height for the images
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default VaayuCafe;

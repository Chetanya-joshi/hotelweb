import React from 'react'
import kolkatashop from '../assets/kolkatashop.png';
import { Container, Row, Col } from "react-bootstrap";
// import "./RabindraLake.css";
import Header from "./LandingPAge/Header";
import market from '../assets/market.jpg';

import college from '../assets/collegestreet.jpg';
import hatibagan from '../assets/hatibagan.jpg';
import barabazar from '../assets/barabazar.jpg';
import gariahat from '../assets/gariahat.jpg';
import Footer from './LandingPAge/Footer';


export default function Topplaces() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row
          className="background-row"
          style={{
            backgroundImage:
              `linear-gradient(0deg,rgba(0,0,0,.5), rgba(0, 242, 255, 0.3) ),  url(${kolkatashop})`,
          }}
        >
          {/* <Col className="text-center mx-auto align-items-center" xs={12} md={6} >
          <h1>Titlekvndfkvfgbkjfl</h1>
        </Col> */}
        </Row>

        <Row className="content-row text-center ">
          <h2 className="py-2" style={{ color: "teal" }}>
          Top 5 Places to shop in Kolkata
          </h2>
          <Col
            className="text-start mx-auto py-3 "
            xs={12}
            md={8}
            style={{ fontSize: "18px", textAlign: "justify" }}
          >
            <p style={{ textAlign: "justify" }}>
            Kolkata, a city of myriad colors, offers shopaholics a treasure trove of experiences. From vibrant street shopping districts to bustling markets, this cultural hub beckons travelers, tourists, and photographers to explore its shopping gems. In this guide, we'll unveil the top 5 shopping destinations in Kolkata, from the lively streets of Dharmatala (New Market) and the historical charm of College Street to the bustling trade center of Burra Bazar. Dive into the trendy vibes of Hatibagan and explore the unique enchanting market at Gariahat as we take you on a journey through the vibrant shopping scene of the City of Joy.
            </p>

            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img
                  src={market}
                  className="img-fluid"
                  alt="Image 1"
                />
              </Col>
              <Col xs={12} md={6}>
                <h3>#1 Dharmatala (New Market)</h3>
                <p style={{ textAlign: "justify" }}>
                Tucked in the heart of Kolkata, Dharmatala/New Market is a kaleidoscope of local life and trade, inviting travelers to immerse themselves in the city's cultural tapestry. Here, you'll discover an array of traditional Bengali crafts, vibrant sarees, and handcrafted souvenirs, each telling a story of the region's rich heritage. As you navigate the narrow alleys, the scent of street food beckons, offering a taste of authentic Bengali flavors. Engage with the affable vendors, who are eager to share tales of their wares. Dharmatala is an open invitation to embrace the rhythm of Kolkata.

                </p>
              </Col>
            </Row>

           
            <Row className="my-2 py-5">
              <Col xs={12} md={6}>
              <h3>#2 College Street</h3>
                <p style={{ textAlign: "justify" }}>
                Affectionately known as "Boi Para," College Street extends a warm welcome to curious minds and wandering souls. The labyrinth of bookstores houses an extensive collection of literary treasures, from vintage novels to academic volumes. Engage in lively discussions with erudite booksellers and fellow bibliophiles, creating an atmosphere steeped in intellectual pursuits. College Street is an open book, inviting travelers to explore the boundless world of knowledge.

                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={college} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>
            
            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img src={barabazar} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                <h3>#3 Bara Bazar</h3>
                <p style={{ textAlign: "justify" }}>
                Steeped in history, Burra Bazar stands as a testament to Kolkata's enduring commercial legacy. This wholesale market, with its labyrinthine lanes, welcomes one and all – from curious travelers to savvy shoppers. It offers a mesmerizing array of goods at wholesale prices, from sumptuous textiles to gleaming electronics. Amidst the lively barter and trade, you'll find the soul of Kolkata, where merchants' stories intertwine with the city's rich narrative.
                </p>
              </Col>
            </Row>

            <Row className="my-2 py-5">
              <Col xs={12} md={6}>
              <h3>#4 Hatibagan</h3>
                <p style={{ textAlign: "justify" }}>
                Hatibagan Market, a vibrant kaleidoscope of colors and textures, invites tourists and travelers to explore its bustling lanes. From trendy fashion to traditional Bengali sarees, the market caters to a diverse range of tastes. Street food vendors tempt you with local delicacies, offering a taste of Kolkata's culinary heritage. It's an experience that engages all the senses, making Hatibagan a must-visit destination for any visitor to the city.

                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={hatibagan} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>

            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img src={gariahat} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                <h3>#5 Gariahat</h3>
                <p style={{ textAlign: "justify" }}>
                Tucked away in South Kolkata, Gariahat Market offers a more relaxed shopping experience, perfect for locals and travelers seeking unique finds. This market is a sanctuary of boutique stores and local shops, each offering carefully curated clothing selections, accessories, and handcrafted items. It's a treasure trove for those in search of one-of-a-kind souvenirs that encapsulate the artisanal spirit of Kolkata.

                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>

  )
}

import React from 'react'
import hiddengems from '../assets/hiddengems.webp';
import { Container, Row, Col } from "react-bootstrap";
// import "./RabindraLake.css";
import Header from "./LandingPAge/Header";
import market from '../assets/market.jpg';
import terreti from '../assets/terreti.jpg'
import putul from '../assets/Putul.jpg'
import Bhawanipore from '../assets/Bhawanipore.webp'
import Mallick from '../assets/Mallick.jpg'
import Barracks from '../assets/Barracks.jpg'

import college from '../assets/collegestreet.jpg';
import hatibagan from '../assets/hatibagan.jpg';
import barabazar from '../assets/barabazar.jpg';
import gariahat from '../assets/gariahat.jpg';
import Footer from './LandingPAge/Footer';


export default function Hiddengems() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row
          className="background-row"
          style={{
            backgroundImage:
              `linear-gradient(0deg,rgba(0,0,0,.5), rgba(0, 242, 255, 0.3) ),  url(${hiddengems})`,
          }}
        >
          {/* <Col className="text-center mx-auto align-items-center" xs={12} md={6} >
          <h1>Titlekvndfkvfgbkjfl</h1>
        </Col> */}
        </Row>

        <Row className="content-row text-center ">
          <h2 className="py-2" style={{ color: "teal" }}>
          5 Hidden Gems in Kolkata: With Embedded Heritage
          </h2>
          <Col
            className="text-start mx-auto py-3 "
            xs={12}
            md={8}
            style={{ fontSize: "18px", textAlign: "justify" }}
          >
            <p style={{ textAlign: "justify" }}>
            Kolkata, the cultural capital of India, is known for its rich history, vibrant arts scene, and delectable cuisine. Beyond the iconic Victoria Memorial and Howrah Bridge, lies a tapestry of lesser-known wonders waiting to be explored. In this guide, we'll uncover five hidden gems that offer a unique perspective of this enchanting city.
            </p>

            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img
                  src={terreti}
                  className="img-fluid"
                  alt="Image 1"
                />
              </Col>
              <Col xs={12} md={6}>
                <h3>1. Terreti Bazaar: A Slice of Tibet in Kolkata</h3>
                <p style={{ textAlign: "justify" }}>
                Tucked away in the bustling heart of central Kolkata, Terreti Bazaar is a microcosm of Tibetan culture. A narrow lane lined with stalls brimming with colorful trinkets, prayer flags, and aromatic spices transports you to the foothills of the Himalayas. The aroma of steaming momos mingles with the sounds of Tibetan chants, creating a sensory experience like no other.
This hidden gem is a haven for both tourists and locals seeking authentic Tibetan handicrafts and delectable street food. From intricately woven carpets to hand-carved prayer wheels, Terreti Bazaar offers a treasure trove of souvenirs that tell stories of distant lands.

                </p>
              </Col>
            </Row>

           
            <Row className="my-2 py-5">
              <Col xs={12} md={6}>
              <h3>2. Putul Bari: The Dollhouse of North Kolkata</h3>
                <p style={{ textAlign: "justify" }}>
                Nestled in North Kolkata, Putul Bari, known as the "Doll's House," holds a captivating past. Dating back to colonial times, this mansion is steeped in intriguing legend. It was once home to a wealthy merchant with a vast collection of dolls, rumored to have held lively gatherings.
Visitors often report a sense of wonder and curiosity in the dimly lit halls. Putul Bari draws enthusiasts of history and culture, its atmosphere is charged with mystery.
The mansion's enigmatic history adds a captivating layer to this hidden gem. It's a must-visit for those fascinated by unique stories. Consider adding Putul Bari to your Kolkata itinerary for a truly engaging experience.

                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={putul} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>
            
            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img src={Bhawanipore} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                <h3>3. Bhawanipore Symmetry: Where Art Meets Geometry</h3>
                <p style={{ textAlign: "justify" }}>
                In the heart of Bhawanipore lies an architectural marvel that often escapes the eye of the casual passerby. The Bhawanipore Symmetry is a symphony of lines, angles, and forms, defying the chaos of the city around it. Designed with precision and an eye for detail, this building is a testament to the fusion of art and mathematics.
Exploring Bhawanipore Symmetry is akin to stepping into a living geometry lesson, where the interplay of shapes creates a mesmerizing visual experience. Photographers, artists, and architecture enthusiasts find this hidden gem an absolute delight.

                </p>
              </Col>
            </Row>

            <Row className="my-2 py-5">
              <Col xs={12} md={6}>
              <h3>4. Mallick Ghat: A Riverside Oasis</h3>
                <p style={{ textAlign: "justify" }}>
                Nestled along the picturesque Hooghly River, Mallick Ghat welcomes you to a tranquil haven with a unique view of the iconic Howrah Bridge. At sunset, the ghat comes alive with softly glowing lamps and the soothing sound of the river, creating an ideal setting for introspection and photography.
The vibrant flower market is a sensory delight, offering fresh blooms in a myriad of colors and providing a genuine glimpse into local life. Come, and experience the serene tranquility and lively vibrance of Mallick Ghat, where the river shares stories and the flowers add their colorful narrative.

                </p>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <img src={Mallick} className="img-fluid" alt="Image 1" />
              </Col>
            </Row>

            <Row className="my-2 py-5">
              <Col xs={12} md={6} className="text-center">
                <img src={Barracks} className="img-fluid" alt="Image 1" />
              </Col>
              <Col xs={12} md={6}>
                <h3>5. Bow Barracks: A Colonial Legacy</h3>
                <p style={{ textAlign: "justify" }}>
                Tucked away in the heart of central Kolkata, Bow Barracks is a living testament to the city's colonial heritage. This quaint neighborhood, with its red-bricked buildings and narrow alleys, exudes an old-world charm that transports you back in time.
Strolling through Bow Barracks is like stepping into a sepia-toned postcard, where every corner holds a piece of history. The area is also known for its warm community spirit, making it a delightful experience for both history enthusiasts and those seeking a taste of old-world Kolkata.

                </p>
              </Col>
            </Row>

            <Row>
            <Col xs={12} md={12}>
              <p>By uncovering these hidden gems, you'll embark on a journey that transcends the ordinary tourist trail. Whether you're a seasoned traveler, a local seeking new experiences, or a tourist looking to discover the soul of Kolkata, these treasures promise an unforgettable adventure.
Plan your Kolkata getaway with us and immerse yourself in the magic of these hidden gems. Book your stay at The Lake Hotel, where comfort meets culture, and let the exploration begin!
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

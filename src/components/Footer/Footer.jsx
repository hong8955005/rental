import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
 

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="5" md="3" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    MIN <br /> TRANSPORTATION
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              We specialised in 
    car, van and bus rentals 
    company or government special events transpotation, 
    weddings transportation,  
    kuching city tour
            </p>
          </Col>

          <Col lg="3" md="3" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="4" md="3" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Address</h5>
              <p className="office__info">No 10, Taman Mersing, Lorong 16-b, Jalan Stampin, 93350 Kuching, Sarawak</p>
              <p className="office__info">Phone: +6017 844 8882</p>

              <p className="office__info">Email: mintransportation@yahoo.com</p>

              <p className="office__info"></p>
            </div>
          </Col>
{/* ============ 
          <Col lg="3" md="3" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
============ */}    
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Min Transportation. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav className="d-flex justify-content-center">
            <p className="copyright text-center">
              © {new Date().getFullYear()} <a>3ROOD-OFFERS</a>
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;

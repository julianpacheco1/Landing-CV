import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import "../assets/footer.css";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="foo">
        <Row className="text-center text-white i">
          <section>
            <a
              href="https://www.facebook.com/julian.pacheco.9847"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
            <a href="https://www.instagram.com/julianpacheco0/" target="_blank">
              <AiFillInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/julian-pacheco-/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>

            <a href="https://github.com/julianpacheco1" target="_blank">
              <AiFillGithub />
            </a>
          </section>
        </Row>
        <Row className=" text-center">
          <section>
            © 2022 Copyright:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=543468538536&text=%C2%A1Hola!%20Soy%20Juli%C3%A1n."
              target="_blank"
            >
              Julian Pacheco
            </a>
          </section>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

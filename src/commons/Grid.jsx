import React, { useState } from "react";
import Cardm from "./Card";
import Maps from "../components/Maps";

import { fakedata } from "../utils/fakedata";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { SiGooglemaps } from "react-icons/si";

import "../assets/grid.css";

const Gridm = () => {
  const [openMap, setOpenMap] = useState(false);

  return (
    <div>
      <div className="mapa">
        <Maps open={openMap} onClose={() => setOpenMap(false)} />
      </div>
      <Container fluid="sm">
        <Button
          class="icon-map"
          onClick={() => setOpenMap(true)}
          variant="info"
        >
          <SiGooglemaps />
        </Button>
        <Row className="row">
          {fakedata.map((el, i) => (
            <Col lg={3} md={6} sm={6} key={i}>
              <Cardm fakedata={el} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gridm;

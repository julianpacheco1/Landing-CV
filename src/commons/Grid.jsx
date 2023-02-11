import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cardm from "./Card";
import {fakedata} from "../utils/fakedata";

const Gridm = () => {

  return (
    <div>
      <Container fluid="sm">
        <Row className="row">
          {fakedata.map((el, i) => (
            <Col lg={3} md={6} sm={6} key={i} >
              <Cardm fakedata={el} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gridm;

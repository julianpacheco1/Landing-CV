import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../assets/card.css";

const Cardm = ({ fakedata }) => {

  const tjul = "ver sitio web en progreso"

  const torigin = "ver codigo"

  return (
    <Card className="card-">
      <Card.Img height={200} variant="top" src={fakedata.img} alt="se rompio"/>
      <Card.Body aria-label={`leer mas sobre ${fakedata.name}`} >
        <Card.Title>{fakedata.name}</Card.Title>
        <Card.Text>{fakedata.description.slice(0, 110).concat("...")}</Card.Text>
        <Link to={fakedata.url} target="_blank">
          <Button variant="info">{fakedata.name == "Julian Pacheco" ? `${tjul}` : `${torigin}` }</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Cardm;

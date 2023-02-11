import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { modalInfo } from "../utils/fakedata";


import "../assets/modal.css"

const ModalComp = () => {
const [show, setShow] = useState(false); //poner en true antes de subir a github

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  function rend() {
    setShow(true);
  }

  setTimeout(rend, 30000);

  return (
    <>
      <div className="text-center bot" >
        <Button variant="info" size="lg" onClick={handleShow}>
         VER PopUp
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo[0].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalInfo[0].body}</Modal.Body>
        <Modal.Footer>
          <img
            src="https://www.pngmart.com/files/21/50-Off-PNG-Photo.png"
            height={100}
          />
          <Button variant="secondary" onClick={handleClose}>
            Contratar
          </Button>
          <Button variant="primary">Entendido</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;

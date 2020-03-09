import React, { Component, useState } from "react";
import Modal from "react-modal";
import ContactTwo from "../../elements/contact/ContactTwo";

Modal.setAppElement("#root");

function ModalContact(props) {
  // console.log(props);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div class="text-center mt-5">
        <button
          onClick={() => setModalIsOpen(true)}
          className="btn btn-primary"
        >
          Solicita una reunión aquí
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className=""
        style={{
          overlay: {
            backgroundColor: "rgb(0,0,0,0.9)"
          },
          content: {}
        }}
      >
        <ContactTwo />
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default ModalContact;

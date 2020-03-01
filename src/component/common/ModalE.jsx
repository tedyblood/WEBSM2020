import React, { Component, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function ModalE() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="Boton">
        Ver Detalles
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "papayawhip"
          },
          content: {
            color: "lightsteelblue"
          }
        }}
      >
        <h2>Modal Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio
          expedita, nemo molestias quod ratione eos! Blanditiis explicabo nihil
          earum, mollitia dignissimos dolores totam temporibus quisquam error
          dolorum. Voluptatibus, eum.
        </p>
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default ModalE;

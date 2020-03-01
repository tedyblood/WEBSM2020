import React, { Component } from "react";
import ModalE from "react-modal";

export class Modal extends Component {
  render() {
    return (
      <div>
        <ModalE isOpen="true">
          <h2>Modal Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            optio expedita, nemo molestias quod ratione eos! Blanditiis
            explicabo nihil earum, mollitia dignissimos dolores totam temporibus
            quisquam error dolorum. Voluptatibus, eum.
          </p>
        </ModalE>
      </div>
    );
  }
}

export default Modal;

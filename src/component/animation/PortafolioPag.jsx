import React, { Component } from "react";
import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
import ModalE from "../common/ModalE";

import "./portafolio.scss";
import { Link } from "react-router-dom";

//Consulta un Objeto para hacer el recorrido en el DOM
function mapObject(object, callback) {
  return Object.keys(object).map(function(key) {
    return callback(key, object[key]);
  });
}

export class Portafolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

export default Portafolio;

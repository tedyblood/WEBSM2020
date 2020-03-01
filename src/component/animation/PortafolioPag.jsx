import React, { Component } from "react";
import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
import ModalE from "../common/ModalE";

import "./portafolio.scss";
import { Link } from "react-router-dom";

let ColUnoImages = {
  0: {
    id: 0,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Culpa do magna excepteur anim nostrud",
    detail:
      "Voluptate dolore nisi anim anim dolore occaecat pariatur sit id esse non incididunt.",
    url_live: "https://www.google.com"
  },
  1: {
    id: 1,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  2: {
    id: 2,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  3: {
    id: 3,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  }
};
let ColDosImages = {
  0: {
    id: 0,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  1: {
    id: 1,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  2: {
    id: 2,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  3: {
    id: 3,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  }
};
let ColTresImages = {
  0: {
    id: 0,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  1: {
    id: 1,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  2: {
    id: 2,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  3: {
    id: 3,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  }
};
let ColCuatroImages = {
  0: {
    id: 0,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  1: {
    id: 1,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  2: {
    id: 2,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  },
  3: {
    id: 3,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
    name: "Nombre",
    url_live: "https://www.google.com"
  }
};

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
    return (
      <React.Fragment>
        <SimpleReactLightbox>
          <div className="gallery">
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip one">
                {/* Imagen contenedor */}
                {/* Este función recorre el Objeto y permite dibujar con todo los datos */}
                {mapObject(ColUnoImages, function(key, value) {
                  return (
                    <div className="photo">
                      {/* Imagen */}
                      <div className="photo__image">
                        <SRLWrapper>
                          <img src={value.url} />
                        </SRLWrapper>
                      </div>
                      {/* Fin Imagen */}
                      <div className="photo__name">{value.name}</div>
                      <ModalE
                        url={value.url}
                        name={value.name}
                        detail={value.detail}
                      />
                    </div>
                  );
                })}

                {/* Fin de función consultiva */}
                {/* Imagen contenedor */}
              </div>
            </div>
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip two">
                {/* Imagen contenedor */}
                {/* Este función recorre el Objeto y permite dibujar con todo los datos */}
                {mapObject(ColDosImages, function(key, value) {
                  return (
                    <div className="photo">
                      {/* Imagen */}
                      <div className="photo__image">
                        <SRLWrapper>
                          <img src={value.url} />
                        </SRLWrapper>
                      </div>
                      {/* Fin Imagen */}
                      <div className="photo__name">{value.name}</div>
                      <ModalE />
                    </div>
                  );
                })}
                {/* Fin de función consultiva */}
                {/* Imagen contenedor */}
              </div>
            </div>
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip three">
                {/* Imagen contenedor */}
                {/* Este función recorre el Objeto y permite dibujar con todo los datos */}
                {mapObject(ColTresImages, function(key, value) {
                  return (
                    <div className="photo">
                      {/* Imagen */}
                      <div className="photo__image">
                        <SRLWrapper>
                          <img src={value.url} />
                        </SRLWrapper>
                      </div>
                      {/* Fin Imagen */}
                      <div className="photo__name">{value.name}</div>
                      <ModalE />
                    </div>
                  );
                })}
                {/* Fin de función consultiva */}
                {/* Imagen contenedor */}
              </div>
            </div>
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip four">
                {/* Imagen contenedor */}
                {/* Este función recorre el Objeto y permite dibujar con todo los datos */}
                {mapObject(ColCuatroImages, function(key, value) {
                  return (
                    <div className="photo">
                      {/* Imagen */}
                      <div className="photo__image">
                        <SRLWrapper>
                          <img src={value.url} />
                        </SRLWrapper>
                      </div>
                      {/* Fin Imagen */}
                      <div className="photo__name">{value.name}</div>
                      <ModalE />
                    </div>
                  );
                })}
                {/* Fin de función consultiva */}
                {/* Imagen contenedor */}
              </div>
            </div>
          </div>
        </SimpleReactLightbox>
      </React.Fragment>
    );
  }
}

export default Portafolio;

import React, { Component, useState } from "react";
import Modal from "react-modal";
import { propTypes } from "prop-types";

Modal.setAppElement("#root");

function ModalE(props) {
  console.log(props);
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
            backgroundColor: "rgb(0,0,0,0.9)"
          },
          content: {}
        }}
      >
        <div className="hero-section inner-page">
          <div className="wave">
            <svg
              width="1920px"
              height="265px"
              viewBox="0 0 1920 265"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Apple-TV"
                  transform="translate(0.000000, -402.000000)"
                  fill="#FFFFFF"
                >
                  <path
                    d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </svg>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-md-7 text-center hero-text">
                    <h1 data-aos="fade-up" data-aos-delay="">
                      SoftLand Features
                    </h1>
                    <p className="mb-5" data-aos="fade-up" data-aos-delay="100">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 mr-auto">
                <h2 className="mb-4">Seamlessly Communicate</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur at reprehenderit optio, laudantium eius quod, eum
                  maxime molestiae porro omnis. Dolores aspernatur delectus
                  impedit incidunt dolore mollitia esse natus beatae.
                </p>
                <p>
                  <a href="#">Read More</a>
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                {/* <img src="img/undraw_svg_2.svg" alt="Image" className="img-fluid"> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .site-section --> */}

        <div className="site-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 ml-auto order-2">
                <h2 className="mb-4">Gather Feedback</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur at reprehenderit optio, laudantium eius quod, eum
                  maxime molestiae porro omnis. Dolores aspernatur delectus
                  impedit incidunt dolore mollitia esse natus beatae.
                </p>
                <p>
                  <a href="#">Read More</a>
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-right">
                {/* <img src="img/undraw_svg_3.svg" alt="Image" className="img-fluid"> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .site-section --> */}

        <div className="site-section pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 mr-auto">
                <h2 className="mb-4">Present Designs Inspiration</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur at reprehenderit optio, laudantium eius quod, eum
                  maxime molestiae porro omnis. Dolores aspernatur delectus
                  impedit incidunt dolore mollitia esse natus beatae.
                </p>
                <p>
                  <a href="#">Read More</a>
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                {/* <img src="img/undraw_svg_3.svg" alt="Image" className="img-fluid"> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .site-section --> */}

        <div className="site-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 ml-auto order-2">
                <h2 className="mb-4">Powerful App Design </h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur at reprehenderit optio, laudantium eius quod, eum
                  maxime molestiae porro omnis. Dolores aspernatur delectus
                  impedit incidunt dolore mollitia esse natus beatae.
                </p>
                <p>
                  <a href="#">Read More</a>
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-right">
                {/* <img src="img/undraw_svg_4.svg" alt="Image" className="img-fluid"> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .site-section --></div> */}
        {/* <h2>{props.name}</h2>
        <p>{props.detail}</p> */}
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default ModalE;

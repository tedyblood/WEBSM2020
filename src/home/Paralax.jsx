import React, { Component, Fragment } from "react";
import { Parallax } from "react-parallax";
import CounterOne from "../elements/counters/CounterOne";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import ServiceList from "../elements/service/ServiceList";
import ParrafoList from "../elements/Parrafos/ParrafoOne";
import Post from "../elements/post";
import ModalContact from "../component/common/ModalContact";

import Moment from "react-moment";
import "moment/locale/es";

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Simple, Efectivo y Pagable.",
    description: "El Marketing Digital ideal.",
    buttonText: "¿Nos reunimos?",
    buttonLink: "/contact",
  },
];
const sliderImage = "/assets/images/bg/paralax/bg-image-2.jpg";

const image1 = "/assets/images/bg/paralax/bg-image-22.jpg";

const image2 = "/assets/images/bg/paralax/bg-image-23.jpg";

const image3 = "/assets/images/bg/paralax/bg-image-24.jpg";

const image6 = "/assets/images/bg/paralax/bg-image-25.jpg";

const image7 = "/assets/images/bg/paralax/959V0854.JPG";

const image8 = "/assets/images/bg/paralax/bg-image-24.jpg";

class Paralax extends Component {
  render() {
    return (
      <Fragment>
        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          <Parallax bgImage={sliderImage} strength={1}>
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <span className="title theme-gradient">
                            {value.title}
                          </span>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <h1 className="description">{value.description}</h1>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-solid"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Parallax>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <Parallax
          className="rn-paralax-service"
          bgImage={image1}
          strength={1000}
        >
          <div className="service-area ptb--120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                    <h2>Nuestros Servicios</h2>
                    <p>
                      Estamos aquí para generar nuevas posibilidades a tu
                      negocio. La imaginación es el principal recurso que
                      tendrás a tu disposición.
                    </p>
                  </div>
                </div>
              </div>
              <ServiceList
                item="9"
                column="col-lg-4 col-md-6 col-sm-6 col-12"
              />
            </div>
          </div>
        </Parallax>
        {/* End Service Area  */}
        {/* /** Inicio de Parrafo */}
        <Parallax className="rn-paralax-service" bgImage={image2} strength={1}>
          <div className="service-area ptb--120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                    <h2>¿Por qué Nosotros?</h2>
                    <p className="text-center">
                      Hace: &nbsp;
                      <b>
                        <Moment fromNow ago>
                          2010-05-01T12:59-0500
                        </Moment>
                      </b>
                      &nbsp; existimos como Agencia de Marketing Digital en
                      Panamá.
                      <br></br>Podemos ofrecerte acceso a nuevas audiencias y
                      herramientas web novedosas de forma ágil, creativa,
                      comprometida y productiva.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <ParrafoList item="4" column="container-fluid" />
              </div>
            </div>
          </div>
        </Parallax>
        {/* /* Fin de Parrafo */}
        {/* Start Service Area  */}

        {/* End Service Area  */}

        {/* Start Brand Area */}
        <Parallax
          className="rn-brand-area brand-separation ptb--120"
          bgImage={image7}
          strength={500}
        >
          <div className="brand-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                    <h2>Clientes</h2>
                    <p>
                      Estas son algunas de las marcas con las que colaboramos en
                      diferentes proyectos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <BrandTwo />
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        {/* End Brand Area */}
        {/* Start CounterUp Area */}
        <Parallax
          className="rn-counterup-area rn-paralax-counterup"
          bgImage={image6}
          strength={1000}
        >
          <div className="counterup-area ptb--120">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                    <h3>¿Nos reunimos?</h3>
                    <p>
                      Analizamos tu situación sin ningún tipo de compromiso.
                      Sólo necesitamos:
                    </p>
                  </div>
                </div>
              </div>
              <CounterOne />
              <ModalContact />
            </div>
          </div>
        </Parallax>
        {/* End CounterUp Area */}
        {/* Start Blog Area */}
        <Parallax
          className="rn-blog-area rn-testimonial-light"
          strength={700}
          data-black-overlay="7"
        >
          <div
            className="blog-area ptb--120 bg-color--1"
            data-black-overlay="6"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                    <h2>Noticias</h2>
                    <p>
                      Experiencias que reflejan el ADN de nuestra agencia de
                      Marketing Digital en Panamá.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <Post item="3" claseTitulo=" text-white " />
              </div>
            </div>
          </div>
        </Parallax>
        {/* End Blog Area */}
      </Fragment>
    );
  }
}
export default Paralax;

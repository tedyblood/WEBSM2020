import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";
import ContactTwo from "../elements/contact/ContactTwo";

import ModalContact from "../component/common/ModalContact";

class ServiceDetailsSM extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {}
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Service Details" />
        {/* End Pagehelmet  */}
        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--2"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h1 className="title theme-gradient">
                    Posicionamiento en Google (SEO) desde Panamá
                  </h1>
                  <p>
                    Un buen posicionamiento en Google es la cuna donde <br />
                    convergen una estrategia de Marketing Digital fuerte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}
        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <GirAnimada bottom="-220" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  {/* <div className="page-title mb--50">
                                        <h2 className="title">Digital Brands.</h2>
                                        <p>Lorem ipsum dolor sit amet, is. Digital Brands. </p>
                                    </div> */}
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/seo.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h2 className="title mt-5">
                            Posicionar tu web en el 2020
                          </h2>
                          <p>
                            Encontrar las palabras claves o los términos de
                            búsqueda mas utilizadas para luego insertarlos en el
                            sitio es una de las muchas técnicas que se utilizan
                            en el desarrollo de las actividades de
                            posicionamiento en bsucadores.
                          </p>
                          <h2 className="title mt-5">
                            La búsqueda por voz es el futuro.
                          </h2>
                          <p>
                            El crecimiento de las búsquedas por voz en los
                            últimos meses ha experimentado un crecimiento
                            exponencial. En Social Media Panamá optimizados tu
                            sitio para un efectivo posicionamient para búsquedas
                            por voz.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">Definimos Palabras Claves</h3>
                          <p>
                            Desarrollo de contenido para satisfacer las
                            necesidades de búsqueda con el fin de presentar su
                            sitio web a las personas que{" "}
                            <b>
                              {" "}
                              buscan los servicios o productos que usted brinda
                            </b>
                            .
                          </p>
                        </div>
                        <div className="details mt_md--30 mt_sm--30 mt-5">
                          <h3 className="title">
                            Contruimos un sólido SEO Local
                          </h3>
                          <p>
                            En Social Media Panamá nos centramos en construir un
                            posicionamiento en buscadores de calidad mediante
                            estrategias de Marketing de contenidos y estrategias
                            de Redes Sociales.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/seo-2.png"
                            alt="Service Images"
                          />
                          <ModalVideo
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            videoId="pJAEg5ErSlI"
                            onClose={() => this.setState({ isOpen: false })}
                          />
                          <button
                            className="video-popup"
                            onClick={this.openModal}
                          >
                            <span className="play-icon"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <AnimationSlider></AnimationSlider>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30 mt-5">
                          <h3 className="title mt-5">
                            ¿Qué factores le gusta a los buscadores en un sitio
                            web?
                          </h3>
                          <ul className="liststyle">
                            <li>
                              El contenido debe satisfacer rápidamente la
                              información que el usuario necesita saber.
                            </li>
                            <li>
                              Identificamos por tu las ubicaciones en donde debe
                              aparecer los términos de búsqueda.{" "}
                            </li>
                            <li>
                              Creamos los vinculos necesarios para enlazarlo en
                              las redes sociales.
                            </li>
                            <li>
                              Encontrarse con posibles palabras clave o términos
                              de busqueda desde un punto de vista
                              conversacional.
                            </li>
                            <li>
                              Los términos "long tail" en diferentes partes del
                              sitio web.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Contact Page Area  */}
                    <div className="rn-contact-page ptb--120 bg_color--1">
                      <ContactTwo />
                    </div>
                    {/* End Contact Page Area  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Page Wrapper */}
      </React.Fragment>
    );
  }
}
export default ServiceDetailsSM;

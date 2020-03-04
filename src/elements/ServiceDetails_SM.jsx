import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";
import Instagram from "../elements/service/instagramTwo";

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
                  <h2 className="title theme-gradient">
                    Gestion de Redes Sociales
                  </h2>
                  <p>
                    Alta experiencia en manejo de redes sociales para potenciar
                    tu negocio en el mundo digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}
        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <GirAnimada></GirAnimada>
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
                            src="/assets/images/service/service-01.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Ofrecemos Servicios profesionales con experiencia en
                            manejo de redes sociales para potenciar tu negocio
                            en el mundo digital.
                          </p>
                          <p>
                            Nuestra agencia de comunicación digital estudiará y
                            aprenderá la filosofía y los valores de su empresa,
                            integrándose como un departamento de marketing anexo
                            a su organigrama y garantizando así la transmisión
                            al exterior de una imagen y unos valores adecuados.
                          </p>
                          <h3 className="title mt-5">
                            ¿Qué hacemos por tu marca?
                          </h3>
                          <ul className="liststyle">
                            <li>
                              Informe inicial de presencia online de la marca,
                              en Internet y medios sociales.
                            </li>
                            <li>Páginas web optimizadas para Buscadores.</li>
                            <li>
                              Creación de perfiles y cuentas en redes sociales.
                            </li>
                            <li>
                              Distribución de los contenidos a través de los
                              canales digitales.
                            </li>
                            <li>
                              Monitorización continua y recogida del feedback
                              del cliente para envío a la organización.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">
                            Reducción de costes en publicidad
                          </h3>
                          <p>
                            En social media desarrollamos un plan para que los
                            Community Managerpuedan compartir detalles
                            esenciales de tu negocio para que tus clientes te
                            encuentren y contacten más fácilmente.
                          </p>
                        </div>
                        <div className="details mt_md--30 mt_sm--30 mt-5">
                          <h3 className="title">
                            Reducción de costes en publicidad
                          </h3>
                          <p>
                            En social media desarrollamos un plan para que los
                            Community Managerpuedan compartir detalles
                            esenciales de tu negocio para que tus clientes te
                            encuentren y contacten más fácilmente.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/service-02.png"
                            alt="Service Images"
                          />
                          <ModalVideo
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            videoId="ZOoVOfieAF8"
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
                          <h3 className="title">
                            Servicio de Community Manager
                          </h3>
                          <p>
                            <ul>
                              <li>
                                Nuestro servicio de community manager se ocupará
                                de estas tareas complementarias.
                              </li>
                              <li>
                                Realizamos un Branding de la Marca antes de
                                iniciar cualquier trabajo.
                              </li>
                              <li>
                                Contamos con diseñadores para personalizar las
                                cuentas y las publicaciones.
                              </li>
                              <li>
                                Creamos y distribuimos contenido importante de
                                su empresa en cualquier medio digital.
                              </li>
                              <li>
                                Creamos experiencia de marca. Hacemos que su
                                target obtenga información sobre su marca, sobre
                                los valores que la identifican y de esta manera,
                                generar sentimientos positivos por la marca.
                              </li>
                              <li>
                                Realizamos recorridos por los establecimientos
                                en la ciudad de Panamá para la selección de la
                                mercancía y la toma de fotos.
                              </li>
                              <li>
                                Tenemos cámaras, equipo, luces, caja de luz,
                                fondos y personal capacitado para tomar fotos y
                                vídeos de sus productos, en tu local o evento, a
                                cualquiera hora, o día del año y lo podrás
                                utilizar en tus redes sociales o cualquier otro
                                medio.
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-12 col-12">
                        <h2>Trabajos</h2>
                        Algunas de las cuentas bajo nuestra responsabilidad
                        <Instagram />
                      </div>
                    </div>
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-12 col-12">
                        {/* <ModalContact />  */}
                      </div>
                    </div>
                    {/* End Single Area */}
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

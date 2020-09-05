import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import ContactTwo from "../elements/contact/ContactTwo";

// imp  ort ModalContact from "../component/common/ModalContact";

class ServiceDetails_auditoria extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {}
  constructor(props) {
    super(props);
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
        <PageHelmet pageTitle="Consultor de Marketing Digital" pageDesc="Consultor de marketing digital. 10 años de experiencia. Estrategias de marketing orientadas a conversiones y ventas." />
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
                    Consultor de Marketing Digital
                  </h1>
                  <p>
                    Somos los profesionales que podemos ayudarte a salir del
                    caos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}
        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <GirAnimada bottom="23"></GirAnimada>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="page-title mb--50">
                    <h2 className="title">
                      Servicio de consultoría de marketing digital.
                    </h2>
                    <p>
                      Soluciones practicas
                      <br /> con las elegir las herramientas adecuadas
                      <br /> para cada parte de la estrategia.
                    </p>
                  </div>
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/consultor-2.jpg"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">
                            Atraer clientes potenciales.
                          </h3>
                          <p>
                            Planificacamos y apoyamos la generación de contenido
                            acorde a los objetivos de marketing.
                          </p>
                        </div>
                        <div className="details mt_md--30 mt_sm--30 mt-3">
                          <h3 className="title">
                            Automatización de procesos internos
                          </h3>
                          <p>
                            Optimizamos el tiempo de tu equipo de trabajo con un
                            correcto flujo de trabajo y comunicación.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">Propuestas de marketing</h3>
                          <p>
                            Te ayudamos generando para tus prospectos propuestas
                            basadas en la problemática de estos y como
                            solucionarlos con un enfoque digital.
                          </p>
                        </div>
                        <div className="details mt_md--30 mt_sm--30 mt-3">
                          <h3 className="title">
                            Supervisión de implementación en clientes
                          </h3>
                          <p>
                            Una vez que tenemos las estrategias integradas en un
                            plan de acción con todos los recursos necesarios es
                            importante realizar una correcta implementación y
                            supervisión de la misma. En esta última fase se
                            pueden detectar nuevos problemas que solventar e
                            incorporar en una mejora de nuestros planes
                            estratégicos.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/consultor.jpg"
                            alt="Service Images"
                          />
                          <ModalVideo
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            videoId="HkkHU48ooE0"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Contact Page Area  */}
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area  */}
        {/* End Page Wrapper */}
      </React.Fragment>
    );
  }
}
export default ServiceDetails_auditoria;

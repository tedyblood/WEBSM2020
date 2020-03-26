import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";
import R360 from "../component/360/react-360";
import ContactTwo from "../elements/contact/ContactTwo";
import logoTrust from "../../public/assets/images/brand/trusted-ES.png";
import pano1 from "../../public/assets/images/360/1.jpg";
import pano2 from "../../public/assets/images/360/2.jpg";

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
                  <h1 className="title theme-gradient">Open Journal System</h1>
                  <p>Servicio de Diseño Web basado en OJS</p>
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
                      Servicio de Diseño Web basado en OJS
                    </h2>
                    <p>
                      El 31% de todos las universidades en el mundo tiene las
                      publicaciones de sus investigaciones impulsados por OJS.
                    </p>
                  </div>
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/dev-ojs-panama.png"
                            alt="OJS DEV PANAMA"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">¿Qué incluye el servicio?</h3>

                          <ul>
                            <li>
                              Hosting Especializado en OJS: Servicio administro
                              por Social Media Panamá para sacar el máximo
                              rendimiento a su inversión con elevados estándares
                              de seguridad.
                            </li>
                            <li>
                              Asesoría para la indexación en Scielo, Scopus,
                              Latindex.
                            </li>
                            <li>Optimización de Flujo de Trabajo.</li>
                            <li>
                              Instalación: Realizamos la instalación del sistema
                              con todas las caracteristicas disponibles en Open
                              Journal System.
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
                          <h3 className="title">OJS Responsive Design</h3>
                          <p>
                            Con más del 30% de todo el tráfico web proveniente
                            de un dispositivo móvil en LATAM, crear un sitio web
                            compatible con dispositivos móviles ya no es
                            opcional: es una necesidad. Todo comienza con un
                            diseño web responsive.
                          </p>
                          <p>
                            El diseño web responsivo permite que su sitio web se
                            adapte y proporcione una experiencia óptima en
                            cualquier dispositivo desde el que se esté viendo.
                            Esto significa que su sitio web se verá excelente y
                            funcionará perfectamente para un usuario en una
                            computadora de escritorio, computadora portátil,
                            tableta o teléfono inteligente.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/dev-ojs-panama-2.png"
                            alt="OJS DEV PANAMA"
                          />
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

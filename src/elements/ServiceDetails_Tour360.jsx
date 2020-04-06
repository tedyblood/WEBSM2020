import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";
import R360 from "../component/360/react-360";
import logoTrust from "../../public/assets/images/brand/trusted-ES.png";
import pano1 from "../../public/assets/images/360/1.jpg";
import pano2 from "../../public/assets/images/360/2.jpg";

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
      isOpen: false,
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
                    Tour Virtual, Realidad Aumentada
                  </h1>
                  <p>Logramos que seas visible en Google Maps.</p>
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
                    <h2 className="title">Tour Virtual 360°</h2>
                    <p>
                      Abre grandes posibilidades de comunicación estratégica de
                      tu negocio.
                    </p>
                  </div>
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <R360 photo={pano1} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">
                            ¿Qué usos tiene un Tour Virtual?
                          </h3>
                          <p>
                            Cuando el recorrido se registra en Google, en
                            cuestión de horas aparecerás en búsquedas de Google,
                            Google Maps, posteriormente podrás insertarlo en tu
                            Página Web o tu App.
                          </p>
                          <img
                            className="w-100 mt-3 mb-3"
                            src={logoTrust}
                            alt="Service Images"
                          />
                          <h3 className="title">Somos agencia certificada</h3>
                          <p>
                            Somos parte del grupo de profesionales autorizados
                            por Google para subir sus fotos a los servidores de
                            Google Maps.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">
                            Pasos para tener un tour virtual
                          </h3>
                          <p>El una tarea simple, rápida y económica.</p>
                          <ol>
                            <li>
                              Nuestro fotógrafo certificado toma las imágenes
                              360º de tu negocio.
                            </li>
                            <li>Creamos el recorrido completo.</li>
                            <li>
                              Añadimos el Tour virual a tu cuenta de Google. Si
                              no la has creado, lo hacemos por ti.
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <R360 photo={pano2} />
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

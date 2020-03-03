import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";

import ModalContact from "../component/common/ModalContact";

class ServiceDetails extends Component {
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
                  <h1 className="title theme-gradient">DISEÑO DE SITIO WEB</h1>
                  <p>
                    Tenemos de todos los sabores: <br></br>A medida, Con
                    Plantilla, con React, Angular, Wordpress, HTML Básico,{" "}
                    <br></br>Lo que necesites.
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
                            En un medio tan competitivo se tiene 3 segundos para
                            impresionar al visitante, y esto lo sabemos.
                          </p>
                          <p>
                            Nuestros diseños web están pensados en siempre
                            ayudar a nuestros clientes a vender su producto o
                            servicio, ofreciendo una imagen profesional de su
                            negocio con un sitio web de alto impacto.
                          </p>
                          <h3 className="title">Tipo de Diseño web:</h3>
                          <ul className="liststyle">
                            <li>Sitios Web Auto-Administrables.</li>
                            <li>Páginas web optimizadas para Buscadores.</li>
                            <li>Cotizadores en línea.</li>
                            <li>Sitios Web con Woocommerce.</li>
                            <li>
                              Páginas Web Rápidas, con código limpio y con mucha
                              documentación.
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
                          <p>
                            Podemos ofrecere una solución completa en el aspecto
                            tecnico creativo de tu requerimiento web.
                          </p>
                          <p>
                            Personalizamos framework maduros como Wordpress y
                            también trabajamos con Frameworks Basados en
                            JavaScript.
                          </p>
                          <h3 className="title">
                            Servicios de desarrollo de progressive web apps
                          </h3>
                          <ul className="liststyle">
                            <li>
                              Sitios Web hecho en React. Esta página esta
                              construida en React.
                            </li>
                            <li>
                              Hibridos entre React y Wordpress. Como este sitio.
                            </li>

                            <li>Sitios Web Hechos en Gatsby</li>
                            <li>Sitios Web Hechos con Angular </li>
                          </ul>
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
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            En un medio tan competitivo se tiene 3 segundos para
                            impresionar al visitante, y esto lo sabemos.
                          </p>
                          <p>
                            Nuestros diseños web están pensados en siempre
                            ayudar a nuestros clientes a vender su producto o
                            servicio, ofreciendo una imagen profesional de su
                            negocio con un sitio web de alto impacto.
                          </p>
                          <h3 className="title">Tipo de Diseño web:</h3>
                          <ul className="liststyle">
                            <li>Sitios Web Auto-Administrables.</li>
                            <li>Páginas web optimizadas para Buscadores.</li>
                            <li>Cotizadores en línea.</li>
                            <li>Sitios Web con Woocommerce.</li>
                            <li>
                              Páginas Web Rápidas, con código limpio y con mucha
                              documentación.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-12 col-12">
                        <h2>Trabajos</h2>
                        <Portafolio />
                      </div>
                    </div>
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-12 col-12">
                        <ModalContact />
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
export default ServiceDetails;

import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";
import ContactTwo from "./contact/ContactTwo";

import img1 from "../../public/assets/images/product/dg.png";
import img2 from "../../public/assets/images/product/dg2.png";
import img3 from "../../public/assets/images/product/dg3.png";
import img4 from "../../public/assets/images/product/dg4.png";
// imp  ort ModalContact from "../component/common/ModalContact";

class ServiceDetails_sf extends Component {
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
        <PageHelmet
          pageTitle="Servicio de Diseño gráfico"
          pageDesc="Servicio de Diseño Gráfico corporativo, publicitario y editorial en Panamá, atendemos pedidos urgentes con diligencia."
        />
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
                  <h1 className="title theme-gradient">Diseño Gráfico</h1>
                  <p>
                    Trabajos de diseño gráfico con Pensamiento Creativo en
                    equipo y siempre a tiempo.
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
                      Hacemos de el diseño gráfico un proceso fácil para
                      nuestros clientes
                    </h2>
                    <p>
                      Hacemos de todo un poco: Diseño de Logos, Imagenes Para
                      Blogs, Portadas Para Libros, Tarjetas de Presentación,
                      Afiches y Posters, Banners, Imágenes Para Redes Sociales,
                      Firmas de Correos Electrónicos, Banners y Pautas Digitales
                      (Facebook Ads, Google, etc), Brochures, Menús Para
                      Restaurantes, Rotulos y Vallas, Plantillas de
                      Presentaciones, Banners y Lonas Impresas, Diseño de
                      Camisetas.
                    </p>
                  </div>
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src={img1}
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">
                            ¿Necesitas solo el diseño gráfico para tus post?
                          </h3>

                          <p>
                            En Social Media Panamá, apoyamos a todos los
                            emprendedores, ponemos a su disposición nuestro
                            equipo de diseño para que tus publicaciones tengan
                            una presentación óptima a precios muy competitivos.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">¿Incluye Fotografía?</h3>
                          <p>
                            Si no tienes fotografía, no te preocupes, nosotros
                            ponemos a disposición nuestro stock profesional con
                            más de 88,000 fotos diferentes y siguen sumando.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src={img2}
                            alt="Service Images"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src={img3}
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">¿Cómo funciona?</h3>
                          <p>
                            El servicio de diseño gráfico funciona en 3 simples
                            pasos:
                          </p>
                          <ul>
                            <li>
                              Nos envías tus requerimientos organizados por
                              prioridad.
                            </li>
                            <li>
                              En Social Media Panamá empezamos el trabajo de
                              diseño gráfico, atendiendo un diseño a la vez.
                            </li>
                            <li>
                              Entregamos tu solicitud, en 24 horas o menos,
                              (Revisas, apruebas o solicitas cambios)
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
                            <b>Nuestra promesa:</b> Entregamos a{" "}
                            <b>SATISFACCIÓN</b> o el trabajo es completamente{" "}
                            <b>GRATIS</b>.
                          </h3>
                          <p>
                            Si las presentaciones que realizamos, no llena las
                            espectativas, simplemente no lo pagas. Cada trabajo
                            entregado debe ir acompañado por una aprobación por
                            parte de nuestros clientes.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src={img4}
                            alt="Service Images"
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
export default ServiceDetails_sf;

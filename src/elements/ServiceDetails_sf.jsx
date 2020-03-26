import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";
import ContactTwo from "../elements/contact/ContactTwo";

import img1 from "../../public/assets/images/product/sf1.png";
import img2 from "../../public/assets/images/product/sf2.png";
import img3 from "../../public/assets/images/product/sf3.png";
// imp  ort ModalContact from "../component/common/ModalContact";

class ServiceDetails_sf extends Component {
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
                  <h1 className="title theme-gradient">Social Wifi</h1>
                  <p>
                    Plataforma que se enfoca en realizar engagement entre el
                    consumidor y el establecimiento.
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
                    <h2 className="title">Marketing Digital aplicado</h2>
                    <p>
                      Herramienta completa que va a permitir realizar encuestas
                      en tiempo real, concursos, invitaciones a eventos,
                      valoraciones a través de TripAdvisor Review Express,
                      mailing ilimitado y sobretodo se van a poder enviar
                      mensajes push a los clientes apenas lleguen al
                      establecimiento.
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
                          <h3 className="title">¿Qué es Social Wifi?</h3>

                          <p>
                            Social Wifi es una combinación de hardware y
                            software tipo “Plug and Play” que trabaja
                            eficientemente con su conexión actual de internet.
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
                            ¿Social Wifi es una Plataforma?
                          </h3>
                          <p>
                            La plataforma de Social Wifi revoluciona la
                            experiencia de Wifi de los clientes, al combinar los
                            medios sociales con la analítica presencial. A
                            cambio de ofrecer internet inalámbrico gratuito, los
                            negocios podrán capturar data demográfica y
                            analítica esencial de los aparatos portátiles de los
                            usuarios.
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
                          <h3 className="title">¿Donde se almacena la Data?</h3>

                          <p>
                            Esta data se almacena en el Portal Administrativo
                            del negocio en la nube y puede ser vista, organizada
                            y exportada fácilmente a través de nuestras opciones
                            de reportes. Adicionalmente puede ser utilizado en
                            conjunto con nuestras herramientas de mercadeo y
                            publicidad incorporadas, que le permiten la
                            habilidad de estar en contacto con sus clientes en
                            tiempo real, sirve mucho para estar en constante
                            comunicación con los actuales y potenciales
                            clientes.
                          </p>
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

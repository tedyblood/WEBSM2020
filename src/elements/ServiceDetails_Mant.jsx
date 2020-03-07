import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { Portafolio } from "../component/animation/PortafolioPag";
import SectionWipes2 from "../component/ScrollMagic/SectionWipes2";
import ModalContact from "../component/common/ModalContact";

const dataHome = [
  {
    img: "https://via.placeholder.com/498x350",
    titulo: `Plan Webmaster Inicio`,
    subtitulo: "$50 Mensuales",
    parrafo:
      "<ul><li ><strong>4 Horas al mes.</strong></li> <li><strong>Añadir / Borrar Texto (No incluye la creación del texto)</strong></li><li><strong>Añadir / Borrar Imagenes maximo 5 al mes (No incluye diseño ni modificaciones)</strong></li><li><strong>Mantenimiento del Sitio Web</strong></li><li><strong>Actualizaciones de scripts, de plataforma si es CMS WordPress.</strong></li><li><strong>BackUP de su Sitio Web (1 vez por mes)<br></strong></li></ul>",
    url: "#",
    url_texto: "Solicita una cotización",
    offSet: "1"
  }
];
const data = [
  {
    img: "https://via.placeholder.com/498x350",
    titulo: "Plan Webmaster intermedio",
    subtitulo: "$120 Mensuales",
    parrafo: `<ul >
      <li ><strong>8 Horas al mes.</li>
      <li ><strong>Añadir / Borrar Texto (No incluye la creación del texto)</li>
      <li ><strong>Añadir / Borrar Imagenes maximo 8 al mes (No incluye diseño ni modificaciones)</li>
      <li ><strong>Mantenimiento del Sitio Web</li>
      <li ><strong>Actualizaciones de scripts, de plataforma si es CMS WordPress.</li>
      <li ><strong>BackUP de su Sitio Web (1 vez por mes)
      </li>
      </ul>`,
    url: "/contact",
    url_texto: "Solicita una cotización",
    offSet: "1"
  },
  {
    img: "https://via.placeholder.com/498x350",
    titulo: "Plan Webmaster Avanzado",
    subtitulo: "Subtitulo del Home",
    parrafo: `<ul >
      <li ><strong>14 Horas al mes.</li>
      <li ><strong>Añadir / Borrar Texto (No incluye la creación del texto)</li>
      <li ><strong>Añadir / Borrar Imagenes maximo 20 al mes (No incluye diseño ni modificaciones)</li>
      <li ><strong>Mantenimiento del Sitio Web</li>
      <li ><strong>Actualizaciones de scripts, de plataforma si es CMS WordPress.</li>
      <li ><strong>BackUP de su Sitio Web (1 vez por mes)
      </li>
      </ul>`,
    url: "/contact",
    url_texto: "Solicita una cotización",
    offSet: "2"
  }
];
class ServiceDetailsMant extends Component {
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
                    Servicios de Webmaster
                  </h1>
                  <p>
                    Con concimientos y capacidad para gestionar sitios basados
                    en Wordpres, Angular y React.
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
                          <h2 className="title mt-5">
                            Administración de Sitios Web
                          </h2>
                          <p>
                            Estamos al tanto de los cambios que el cliente
                            requiera, como agregar contenido nuevo, cambiar
                            imágenes, actualizar datos.
                          </p>
                          <h2 className="title mt-5">
                            Webmaster con protocolos de seguridad.
                          </h2>
                          <p>
                            En el caso de wordpress, estamos al tanto de las
                            actualizaciones del CMS y mantenemos a salvo al
                            menos 2 copias del mismo.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    <div className="page-title mb--50">
                      <h2 className="title">Precios</h2>
                      <p>Lorem ipsum dolor sit amet, is. Digital Brands. </p>
                    </div>
                    {/* Start Single Area */}
                    <div className="container-fluid align-items-center">
                      {/* {data.map((item, i) => ( */}
                      <SectionWipes2
                        data={data}
                        dataHome={dataHome}
                        // img={item.img}
                        // titulo={item.titulo}
                        // parrafo={item.parrafo}
                        // url={item.url}
                        // url_texto={item.url_texto}
                      />
                      {/* ))} */}
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
export default ServiceDetailsMant;

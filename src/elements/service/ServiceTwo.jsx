import React, { Component } from "react";

import { Link } from "react-router-dom";
import randomColor from "randomcolor";

import SVGIcon from "../logoSVG/SvgIcon";

const ServiceList = [
  {
    icon: <SVGIcon name="WD" width={54} fill={randomColor()} />,
    title: "Diseño de Sitios Web",
    description:
      "Construimos sitios web optimizados y seguros para que desarrolles e-Commerce.",
    componente: "web-design-panama",
    link: "/web-design-panama"
  },
  {
    icon: <SVGIcon name="RS" width={54} fill={randomColor()} />,

    title: "Manejo de Redes Sociales",
    description:
      "Notarás un aumento de actividad orgánica y real en tus canales sociales.",
    link: "/manejo_de_redes_sociales"
  },
  {
    icon: <SVGIcon name="SEO" width={54} fill={randomColor()} />,
    title: "SEO",
    description:
      "Aumenta tu visibilidad y atrae más usuarios con nuestros servicios de posicionamiento SEO.",
    link: "/posicionamiento_en_GOOGLE_SEO_Panama"
  },
  {
    icon: <SVGIcon name="WP" width={54} fill={randomColor()} />,
    title: "Mantenimiento de Sitios Wordpress",
    description:
      "Toda instalación de WordPress necesita mantenimiento, y no de cualquier manera.",
    link: "/Servicio-WebMaster-Panama"
  },
  {
    icon: <SVGIcon name="ADS" width={54} fill={randomColor()} />,

    title: "Publicidad pagada en Google y Facebook.",
    description:
      "Servicio de Compra de Medios en Buscadores; Adwords, Bing, Yahoo JP y Yandex. ",
    link: "/comprar-anuncios-instagram-facebook-youtube-google"
  },
  {
    icon: <SVGIcon name="CONST" width={54} fill={randomColor()} />,

    title: "Consultorías y auditorías de marcas.",
    description:
      "Analizamos mes a mes los resultados para poder mejorar, plantear nuevas ideas.",
    link: "/consultor-speaker-de-marketing-digital"
  },
  {
    icon: <SVGIcon name="PHOTO" width={54} fill={randomColor()} />,
    title: "Recorridos Virtuales 360",
    description:
      "Muestra de forma efectiva tus instalaciones y productos con un nuevo impacto visual.",
    link: "/tour-virtual-360-google"
  },
  {
    icon: <SVGIcon name="OJS" width={54} fill={randomColor()} />,
    title: "Servicio OJS",
    description:
      "Instalación y configuración y mantenimiento de Open Journal System.",
    link: "/pagina-web-OJS-Open-Journal-System"
  },
  {
    icon: <SVGIcon name="WIFI" width={54} fill={randomColor()} />,
    title: "WIFI Social",
    description:
      "Ofrece internet a tu clientes a cambio de una encuesta o una acción social.",
    link: "/social-wifi-fi"
  }
];

class ServiceTwo extends Component {
  render() {
    let title = "Servicios",
      description =
        "Nosotros entendemos tus requerimientos para ponerle calidad a nuestro trabajo.";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="/contact">
                  <span className="text">Solicita una cotización</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <Link to={val.link}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;

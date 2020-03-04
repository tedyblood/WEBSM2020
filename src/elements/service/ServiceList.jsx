import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Diseño de Sitios Web",
    description:
      "Construimos sitios web optimizados y seguros para que desarrolles e-Commerce.",
    componente: "web-design-panama",
    link: "/web-design-panama"
  },
  {
    icon: <FiLayers />,
    title: "Manejo de Redes Sociales",
    description:
      "Notarás un aumento de actividad orgánica y real en tus canales sociales.",
    link: "/manejo_de_redes_sociales"
  },
  {
    icon: <FiUsers />,
    title: "SEO",
    description:
      "Aumenta tu visibilidad y atrae más usuarios con nuestros servicios de posicionamiento SEO.",
    link: "/posicionamiento_en_GOOGLE_SEO_Panama"
  },
  {
    icon: <FiMonitor />,
    title: "Mantenimiento de Sitios Wordpress",
    description:
      "Toda instalación de WordPress necesita mantenimiento, y no de cualquier manera.",
    link: "/web-design-panama"
  },
  {
    icon: <FiUsers />,
    title: "Publicidad pagada en Google y Facebook.",
    description:
      "Servicio de Compra de Medios en Buscadores; Adwords, Bing, Yahoo JP y Yandex. ",
    link: "/web-design-panama"
  },
  {
    icon: <FiMonitor />,
    title: "Consultorías y auditorías de marcas.",
    description:
      "Analizamos mes a mes los resultados para poder mejorar, plantear nuevas ideas.",
    link: "/web-design-panama"
  },
  {
    icon: <FiMonitor />,
    title: "Recorridos Virtuales 360",
    description:
      "Muestra de forma efectiva tus instalaciones y productos con un nuevo impacto visual.",
    link: "/web-design-panama"
  },
  {
    icon: <FiMonitor />,
    title: "Servicio OJS",
    description:
      "Instalación y configuración y mantenimiento de Open Journal System.",
    link: "/web-design-panama"
  },
  {
    icon: <FiMonitor />,
    title: "WIFI Social",
    description:
      "Ofrece internet a tu clientes a cambio de una encuesta o una acción social.",
    link: "/web-design-panama"
  }
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
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
      </React.Fragment>
    );
  }
}
export default ServiceThree;

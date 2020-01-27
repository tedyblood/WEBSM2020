import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Diseño de Sitios Web",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiLayers />,
    title: "Manejo de Redes Sociales",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiUsers />,
    title: "Posicionamiento en Buscadores",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiMonitor />,
    title: "Mantenimiento de Sitios Wordpress",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiUsers />,
    title: "Publicidad pagada en Google y Facebook.",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiMonitor />,
    title: "Consultorías y auditorías de marcas.",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiMonitor />,
    title: "Recorridos Virtuales 360",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiMonitor />,
    title: "Servicio OJS",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiMonitor />,
    title: "WIFI Social",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
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
              <a href="/service-details">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;

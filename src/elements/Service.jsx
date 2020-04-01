import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ServiceTwo from "../elements/service/ServiceTwo";

class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet
          pageTitle="Servicios de Marketing Digital"
          pageDesc="Avanzadas estrategias digitales por personal con mucha experiencia. Marketing Digital, Gestión de Redes, SEO, SEM, SMO, publicidad digital, web, ecommerce, analítica y email marketing ¡Hablemos!
"
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Servicios de Marketing Digital"} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        {/* End Service Area */}
      </React.Fragment>
    );
  }
}
export default Service;

import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {this.props.pageTitle + " // ✅ Servicio de Mercadeo Digital 🤘" ||
              " ✅ Servicio de Mercadeo Digital 🤘"}
          </title>
          <meta
            name="description"
            content={
              this.props.pageDesc ||
              "Ofrecemos acceso a nuevas audiencias en medios digitales de forma ágil, creativa, comprometida y productiva."
            }
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;

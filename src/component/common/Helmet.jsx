import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || Social Media Panamá </title>
          <meta
            name="description"
            content="Aeroland – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Aeroland Bootstrap 4 Template will create that various landing Template."
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;

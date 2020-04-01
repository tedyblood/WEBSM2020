import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || Social Media Panamá </title>
          <meta name="description" content={this.props.pageDesc} />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;

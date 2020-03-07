// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

// Common Layout
import Layout from "./component/common/App";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Home layout
import Paralax from "./home/Paralax";

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import Portfolio from "./elements/Portfolio";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import ServiceDetails_WD from "./elements/ServiceDetails_WD";
import ServiceDetails_SM from "./elements/ServiceDetails_SM";
import ServiceDetails_SEO from "./elements/ServiceDetails_SEO";
import ServiceDetails_Mant from "./elements/ServiceDetails_Mant";
import ServiceDetails_ppc from "./elements/ServiceDetails_ppc";
import ServiceDetails_auditoria from "./elements/ServiceDetails_auditoria";
import ServiceDetails_Tour360 from "./elements/ServiceDetails_Tour360";
import Counters from "./elements/Counters";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Layout>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Paralax}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service`}
              component={Service}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service-details`}
              component={ServiceDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/web-design-panama`}
              component={ServiceDetails_WD}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/manejo_de_redes_sociales`}
              component={ServiceDetails_SM}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Posicionamiento_en_Google_SEO_Panama`}
              component={ServiceDetails_SEO}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/comprar-anuncios-instagram-facebook-youtube-google`}
              component={ServiceDetails_ppc}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/consultor-speaker-de-marketing-digital`}
              component={ServiceDetails_auditoria}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Servicio-WebMaster-Panama`}
              component={ServiceDetails_Mant}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/tour-virtual-360-google`}
              component={ServiceDetails_Tour360}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={Portfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-details`}
              component={PortfolioDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={Blog}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/counters`}
              component={Counters}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details/:id/:postId`}
              component={BlogDetails}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();

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

//Analitycs
import ReactGA from 'react-ga';


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
import ServiceDetails_OJS from "./elements/ServiceDetails_OJS";
import ServiceDetails_sf from "./elements/ServiceDetails_sf";
import DisenoGrafico from "./elements/ServiceDetails_Dgraph";
import Cursos from "./elements/Cursos";

import BlogTwo from './elements/blog/BlogList'
import BlogD from './elements/blog/BlogDet'


import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const trackingId = "UA-143761335-1";
ReactGA.initialize(trackingId, { standardImplementation: true });

const Page404 = ({ location }) => (
  <section>
    <div className=" container-fluid vh-100  d-flex align-items-center margin404">
      <div className="row w-100">
        <div className="col-6">  
        <div class=" imagen-fondo-404 w-100 p-5"></div>        
          <h1 class="margin404h2">
            <b>404</b>
            <br /> Not Found
          </h1>
        </div>
        <div className="col-6">
          <p className="Fondo404Blanco">
            La página que usted ha solicitado no se encuentra disponible. <br />
            Disculpe las molestias.
          </p>
          <p className="Fondo404Blanco">
            Si esta buscando el tutorial para hacer transmisiones en instagram
            desde PC, lo puede encontrar en nuestro blog.
          </p>
          <a
            className="Fondo404Blanco"
            href="https://www.socialmedia-panama.com/blog/marketing-digital-como-transmitir-en-vivo-en-instagram-desde-pc/7757"
          >
            Transmitir en vivo en instagram desde pc
          </a>
        </div>
      </div>
    </div>
  </section>
);

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"} >
        <Layout>
          <Switch>
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
              path={`${process.env.PUBLIC_URL}/cursos`}
              component={Cursos}
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
              path={`${process.env.PUBLIC_URL}/social-wifi-fi`}
              component={ServiceDetails_sf}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/manejo-de-redes-sociales`}
              component={ServiceDetails_SM}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Posicionamiento-en-Google-SEO-Panama`}
              component={ServiceDetails_SEO}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/comprar-anuncios-instagram-facebook-youtube-google`}
              component={ServiceDetails_ppc}
            />
            <Route
              // exact
              path={`${process.env.PUBLIC_URL}/consultor-speaker-de-marketing-digital`}
              component={ServiceDetails_auditoria}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/pagina-web-OJS-Open-Journal-System`}
              component={ServiceDetails_OJS}
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
              path={`${process.env.PUBLIC_URL}/diseno-grafico-panama`}
              component={DisenoGrafico}
            />

            <Redirect
              exact
              path="https://www.socialmedia-panama.com/marketing-digital-como-transmitir-en-vivo-en-instagram-desde-pc/"
              to="https://www.socialmedia-panama.com/blog/marketing-digital-como-transmitir-en-vivo-en-instagram-desde-pc/7757"
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog/:postId/:postSlug`}
              component={BlogD}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/b/:postId/:postSlug`}
              component={BlogD}
              
              
            />
            <Route component={Page404} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();

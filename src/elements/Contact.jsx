import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from "google-map-react";
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import Mailto from "react-protected-mailto";

const AnyReactComponent = ({ text }) => <div className="dot">{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 9.01552,
      lng: -79.534833
    },
    zoom: 15
  };

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Contact" />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--25"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Contacto</h2>
                  <p>
                    Por la naturaleza de nuestro trabajo, no paramos la gestión
                    de nuestros clientes, en medio del COVID-19 con la modalidad
                    de teletrabajo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Teléfono y WhatsApp</h4>
                    <p>
                      {/* <a href="tel:+5072059514">205-9514</a> */}
                      <Mailto tel="+5072059514" />
                    </p>
                    <p>
                      <Mailto tel="+50765164741" />
                      {/* <a href="tel:+50765164741">+507 65164741</a> */}
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Email</h4>
                    <Mailto email="contacto@socialmedia-panama.com" />
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Oficinas</h4>
                    <p>
                      Ciudad de Panamá <br />
                      Dorado City Center, <br />
                      Piso 3, Oficina 303
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Page Area  */}
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area  */}

        {/* Start Contact Map  */}
        <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyC9qSUYBCY0HMzs7L8UpHWpEPx8WaBN-dY"
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={9.01552}
                lng={-79.534833}
                text="Social Media Panamá"
              />
            </GoogleMapReact>
          </div>
        </div>
        {/* End Contact Map  */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}
      </React.Fragment>
    );
  }
}
export default Contact;

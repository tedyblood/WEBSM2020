import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import $ from "jquery";
import "./src/floating-wpp.min.css";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];
class Footer extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <a
          href="https://api.whatsapp.com/send?phone=65164741&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
          class="float"
          target="_blank"
        >
          <FaWhatsapp />
        </a>

        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Trabajemos en tu</span>
                    <h2>
                      Marketing
                      <br /> Digital
                    </h2>
                    <a className="rn-button-style--2" href="/contact">
                      <span>Contacto</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Enlaces</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/">Inicio</a>
                          </li>
                          <li>
                            <a href="/about">Nosotros</a>
                          </li>
                          <li>
                            <a href="/contact">Contáctanos</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Hablemos</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="tel:005072059514">+507 205-9514</a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>Copyright © 2020 Social Media Panamá</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;

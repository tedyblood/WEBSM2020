import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

import Logo from "../../elements/logoSVG/LogoSVG";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img srcSet="/assets/images/logo/logo-light.png" alt="Digital Agency" />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img srcSet="/assets/images/logo/logo-dark.png" alt="Digital Agency" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img
          srcSet="/assets/images/logo/logo-symbol-dark.png"
          alt="Digital Agency"
        />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          srcSet="/assets/images/logo/logo-symbol-light.png"
          alt="Digital Agency"
        />
      );
    } else {
      logoUrl = <Logo />;
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo w-100">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link onClick={this.CLoseMenuTrigger} to="/">
                    Inicio
                  </Link>
                </li>
                <li className="has-droupdown">
                  <Link onClick={this.CLoseMenuTrigger} to="/service">
                    Servicios
                  </Link>
                  <ul className="submenu active">
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/manejo-de-redes-sociales"
                      >
                        Gestión de Redes Sociales
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/comprar-anuncios-instagram-facebook-youtube-google"
                      >
                        Anuncios en Instagram
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/web-design-panama"
                      >
                        Diseño Web
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/posicionamiento-en-GOOGLE-SEO-Panama"
                      >
                        Posicionamiento en Buscadores
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/Servicio-WebMaster-Panama"
                      >
                        Mantenimiento Web
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/tour-virtual-360-google"
                      >
                        Recorridos y Tours Virtuales 360
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/pagina-web-OJS-Open-Journal-System"
                      >
                        Open Journal System
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={this.CLoseMenuTrigger}
                        to="/diseno-grafico-panama"
                      >
                       Diseño Gráfico Económico
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link onClick={this.CLoseMenuTrigger} to="/about">
                    Nosotros
                  </Link>
                </li>

                <li>
                  <Link onClick={this.CLoseMenuTrigger} to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link onClick={this.CLoseMenuTrigger} to="/empleo">
                    Empleo
                  </Link>
                </li>
                <li>
                  <Link onClick={this.CLoseMenuTrigger} to="/cursos">
                    Cursos de Marketing Digital
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <Link className="rn-btn" to="/contact">
                <span>Contacto</span>
              </Link>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;

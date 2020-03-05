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
    window.addEventListener("load", function() {
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
        elements[i].onclick = function() {
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
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="/service">Servicios</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/service">Servicios</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/service-details">Redes Sociales</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/service-details">Diseño Web</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/service-details">Campañas PPC</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/service-details">Mantenimiento Web</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/service-details">
                        Recorridos y Tours Virtuales 360
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/service-details">
                        Open Journal System
                      </Link>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">Nosotros</Link>
                </li>

                <li className="has-droupdown">
                  <Link to="/blog">Blog</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/blog">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link to="#">Portafolio</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Portfolio Details</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link to="/contact">Contacto</Link>
                </li> */}
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

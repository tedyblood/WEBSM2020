import React from "react";

import LOGO from "../../../public/assets/images/logo/logo_blanco.png";

class LogoSVG extends React.Component {
  render() {
    return <img srcSet={LOGO} alt="Logo Social Media" className="w-100" />;
  }
}

export default LogoSVG;

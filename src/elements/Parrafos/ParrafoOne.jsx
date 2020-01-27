import React, { Component } from "react";
import Instagram from "../service/instagram";

let Data = [
  {
    description:
      "Trabaje con un equipo de trabajo que te permita alcanzar tus metas de negocio en los próximos meses, porque la venta en línea no es el fin de la acción de marketing, es el comienzo."
  },
  {
    description:
      "Paga solamente contra resultados: Internet puede ser un mundo abstracto, pero tus dólares son concretos. Te ofrecemos resultados concretos, medibles y efectivos."
  },
  {
    description:
      "Lograrnos colocarte un paso delante de la competencia, ¿cómo? simple, te acompañamos en la ejecución de tus modelos comerciales vigentes y te proponemos nuevos modelos de distribución o de negocios, nuevas experiencias de usuario para tus clientes en un marco de comercio anticipado.  "
  },
  {
    description:
      "Intentamos tener el trato más cercano posible. Creemos que el dialogo es la mejor forma de entenderse y trabajar en equipo, para poder encontrar las mejores soluciones y por ende, mejores resultados para su negocio."
  }
];
export default class ParrafoOne extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        <div className="d-flex flex-row">
          <div className="row flex-column">
            {Data.map((val, i) => (
              <div className={`${column}`} key={i}>
                <div className="ParrafoCSS ml-lg-12 vh-25">
                  <div className="content">
                    <p>{val.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h5 className="titulo_Insta">Alguno de nuestros trabajos</h5>
            <Instagram />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

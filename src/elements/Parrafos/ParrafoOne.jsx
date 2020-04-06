import React, { Component } from "react";

let Data = [
  {
    description:
      "Trabaje con un equipo de trabajo que te permita alcanzar tus metas de negocio en los próximos meses, porque la venta en línea no es el fin de la acción de marketing, es el comienzo.",
  },
  {
    description:
      "Paga solamente contra resultados: Internet puede ser un mundo abstracto, pero tus dólares son concretos. Te ofrecemos resultados concretos, medibles y efectivos.",
  },
  {
    description:
      "Lograrnos colocarte un paso delante de la competencia, ¿cómo? simple, te acompañamos en la ejecución de tus modelos comerciales vigentes y te proponemos nuevos modelos de distribución o de negocios, nuevas experiencias de usuario para tus clientes en un marco de comercio anticipado.  ",
  },
  {
    description:
      "Intentamos tener el trato más cercano posible. Creemos que el dialogo es la mejor forma de entenderse y trabajar en equipo, para poder encontrar las mejores soluciones y por ende, mejores resultados para su negocio.",
  },
];
export default class ParrafoOne extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {/* <div className="row"> */}
        <div className="col-sm-12 col-lg-12">
          {Data.map((val, i) => (
            <div className={`${column}`} key={i}>
              <div className="text-justify text-white text-justify mb-5">
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

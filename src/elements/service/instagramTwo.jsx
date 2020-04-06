import React from "react";
import InstagramEmbed from "react-instagram-embed";
import jsonData from "../../../public/assets/json/instagramList/clientes.json";

export default class instagram extends React.Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        <div className="d-lg-flex flex-wrap">
          {jsonData.map((val, i) => (
            <div className="col-4">
              <InstagramEmbed
                url={val.fuente}
                maxWidth={450}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {
                  console.log("Cargando Imagenes de Instagram");
                }}
                onSuccess={() => {
                  console.log("Todosl los Post esta Cargados");
                }}
                onAfterRender={() => {}}
                onFailure={() => {
                  console.log("Error en carga Imagenes de Instagram");
                }}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

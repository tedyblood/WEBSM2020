import React from "react";
import InstagramEmbed from "react-instagram-embed";
import Carousel from "react-bootstrap/Carousel";

const list = [
  {
    fuente: "https://www.instagram.com/p/B81GdWBhcjv/"
  },
  {
    fuente: "https://www.instagram.com/p/B7w2ptTht76/"
  },
  {
    fuente: "https://www.instagram.com/p/B7wYqk3hZ8H/"
  },
  {
    fuente: "https://www.instagram.com/p/B5F2-eOAuHj/"
  },
  {
    fuente: "https://www.instagram.com/p/B9B24hxICuK/"
  },
  {
    fuente: "https://www.instagram.com/p/B7_AWfvBd5q/"
  },
  {
    fuente: "https://www.instagram.com/p/B7_AWfvBd5q/"
  },
  {
    fuente: "https://www.instagram.com/p/B9Mgr7hhEv0/"
  }
];
export default class instagram extends React.Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        <Carousel className="margin-widget-insta" fade="true" interval="2500">
          {list.map((val, i) => (
            <Carousel.Item>
              <InstagramEmbed
                url={val.fuente}
                maxWidth={320}
                hideCaption={true}
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
            </Carousel.Item>
          ))}
        </Carousel>
      </React.Fragment>
    );
  }
}

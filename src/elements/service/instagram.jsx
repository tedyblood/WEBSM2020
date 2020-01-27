import React from "react";
import InstagramEmbed from "react-instagram-embed";
import Carousel from "react-bootstrap/Carousel";

const list = [
  {
    fuente: "https://www.instagram.com/p/B7pJj5Dhwjs/"
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
    fuente: "https://www.instagram.com/p/B7qcQlsnNzs/"
  }
];
export default class instagram extends React.Component {
  render() {
    const { column } = this.props;
    return (
      <div>
        <React.Fragment>
          <Carousel fade="true" interval="2500">
            {list.map((val, i) => (
              <Carousel.Item>
                <InstagramEmbed
                  url={val.fuente}
                  maxWidth={320}
                  hideCaption={true}
                  containerTagName="URL"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </React.Fragment>
      </div>
    );
  }
}

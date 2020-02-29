import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import "./portafolio.scss";
import { Link } from "react-router-dom";

const ColUnoImages = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg"
];

export class Portafolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <React.Fragment>
        <div className="gallery">
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip one">
              {ColUnoImages.map(task => (
                <div className="photo">
                  <div className="photo__image">
                    <Link
                      onClick={() =>
                        this.setState({
                          isOpen: true,
                          photoIndex: this.contador
                        })
                      }
                    >
                      <img src={task} />
                    </Link>
                  </div>
                  <div className="photo__name">Kyoto</div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip two">
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg" />
                </div>
                <div className="photo__name">Italy</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg" />
                </div>
                <div className="photo__name">Osaka</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg" />
                </div>
                <div className="photo__name">Bali</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg" />
                </div>
                <div className="photo__name">Paris</div>
              </div>
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip three">
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg" />
                </div>
                <div className="photo__name">Cusco</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg" />
                </div>
                <div className="photo__name">Rome</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg" />
                </div>
                <div className="photo__name">Paris</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg" />
                </div>
                <div className="photo__name">Bali</div>
              </div>
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip four">
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg" />
                </div>
                <div className="photo__name">Milan</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg" />
                </div>
                <div className="photo__name">Budapest</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg" />
                </div>
                <div className="photo__name">Vienna</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg" />
                </div>
                <div className="photo__name">Mexico</div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={ColUnoImages[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Portafolio;

import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg"
];

export class Lighbox extends Component {
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
      <Lightbox
        mainSrc={images[photoIndex]}
        onCloseRequest={() => this.setState({ isOpen: false })}
      />
    );
  }
}

export default Lighbox;

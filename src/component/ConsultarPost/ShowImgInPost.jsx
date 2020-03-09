import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class ShowImgInPost extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      JsonImagen: [],
      imageLoad: false
    };
  }
  componentDidMount() {
    this.GetData();
  }

  GetData = query => {
    // console.log(this.props.url);
    setTimeout(() => {
      axios
        .get(this.props.url)

        .then(response => {
          this.setState({
            PostImg: response.data
          });
          // console.log(response.data);
          this.setState({ imageLoad: true });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }, 1000);
  };
  render() {
    return (
      <React.Fragment>
        <a
          href={this.state.PostImg && this.state.PostImg.link}
          className="btn btn-success btn-block mb-5"
          target="_blank"
        >
          IR AL ARTÍCULO ORIGINAL
        </a>
        <div className="thumbnail">
          <img
            src={this.state.PostImg && this.state.PostImg.guid.rendered}
            alt={this.state.PostImg && this.state.PostImg.slug}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ShowImgInPost;

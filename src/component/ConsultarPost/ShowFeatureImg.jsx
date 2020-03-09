import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export class ShowImgInPost extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      JsonImagen: [],
      imageLoad: "visible"
    };
  }
  componentDidMount() {
    this.GetData();
  }

  GetData = query => {
    axios
      .get(this.props.url)
      // .get("https://wpdirecto.com/wp-json/wp/v2/media/5609")
      .then(response => {
        this.setState({
          PostImg: response.data,
          imageLoad: "invisible"
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="thumbnail">
          <div class={"linear-background " + this.state.imageLoad}></div>

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

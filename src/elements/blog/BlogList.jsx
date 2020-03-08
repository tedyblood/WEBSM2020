import React, { Component, Fragment } from "react";
import BlogContent from "./BlogContent";
import axios from "axios";
import { Link } from "react-router-dom";

class BLogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    axios
      .get("https://socialmedia-panama.com/wp-json/wp/v2/posts")
      .then(posts => {
        this.setState({
          posts: posts.data
        });
      });
  }

  createMarkup(html) {
    return { __html: html };
  }
  render() {
    // const PostList = BlogContent.slice(0, 6);
    return (
      <Fragment>
        <div className="row">
          {this.state.posts.map((value, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={value.id}>
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href="/">
                    <img
                      className="w-100"
                      src={`/assets/images/blog/blog-${value.images}.jpg`}
                      alt="Blog Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="blogtype">{value.category}</p>
                  <h4 className="title">
                    <a href="/blog-details">{value.title.rendered}</a>
                  </h4>
                  <div className="blog-btn">
                    <a className="rn-btn text-white" href="/blog-details">
                      Read More+s
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default BLogList;

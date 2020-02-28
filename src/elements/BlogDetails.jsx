import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Paralax from "../home/Paralax";
import { Redirect, Router } from "react-router";

class BlogDetails extends Component {
  state = {};
  componentDidMount() {
    this.setState({
      id: this.props.match.params,
      idPost: "post-ID-" + this.props.match.params.postId,
      postLS: this.GetData()
    });
    this.verificaLocalData();
  }
  componentDidUpdate() {
    // I'd like my variable to be accessible here
  }

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  async verificaLocalData() {
    await setTimeout(() => {
      if (this.state.postLS === null) {
        this.state.reload = true;
        console.log();
        this.props.history.push("/");
      } else {
        console.log("Store Lleno");
        this.state.reload = false;
      }
    }, 200);
  }
  GetData() {
    return JSON.parse(
      localStorage.getItem("post-ID-" + this.props.match.params.postId)
    );
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Blog Details" />

        {/* Start Breadcrump Area */}

        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    {/* The Home of the Future <br /> Could Bebes */}

                    {this.state.postLS && this.state.postLS.title.rendered}
                  </h2>

                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      <Moment format="DD/MM/YYYY">
                        {this.state.postLS && this.state.postLS.date}
                      </Moment>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          this.state.postLS &&
                          this.state.postLS.content.rendered
                      }}
                    ></p>
                    <div className="thumbnail">
                      <img
                        src={
                          this.state.postLS &&
                          this.state.postLS.jetpack_featured_media_url
                        }
                        alt="Blog Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Details */}

        {/* Start BLog Comment Form  */}
        <div className="blog-comment-form pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="rnform-group">
                          <input type="text" placeholder="Name" />
                        </div>
                        <div className="rnform-group">
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="rnform-group">
                          <input type="text" placeholder="Website" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="rnform-group">
                          <textarea
                            type="text"
                            placeholder="Comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="blog-btn">
                          {/* <a className="rn-button-style--2 btn-solid" href="#"></a> */}
                          <Link
                            className="rn-button-style--2 btn-solid"
                            to="/blog-details"
                          >
                            <span>SEND MESSAGE</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End BLog Comment Form  */}
      </React.Fragment>
    );
  }
}
export default BlogDetails;

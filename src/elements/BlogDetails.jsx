import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

class BlogDetails extends Component {
  state = {};
  componentDidMount() {
    //   this.state.id = this.props.match.params;
    //   this.state.idPost = "post-ID-" + this.props.match.params.postId;
    // this.state.postLS = this.GetData();
    this.setState({
      id: this.props.match.params,
      idPost: "post-ID-" + this.props.match.params.postId,
      postLS: this.GetData()
    });
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

  GetData() {
    return JSON.parse(
      localStorage.getItem("post-ID-" + this.props.match.params.postId)
    );
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    if (this.state.postLS) {
      console.log(this.state.postLS);
    }
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
                      May 18, 2020
                    </li>
                    <li>
                      <FiUser />
                      NipaBali
                    </li>
                    <li>
                      <FiMessageCircle />
                      15 Comments
                    </li>
                    <li>
                      <FiHeart />
                      Like
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
                        src="/assets/images/blog/bl-big-01.jpg"
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

import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
import Moment from "react-moment";

import jsonData from "../../public/assets/json/f1";

class BlogDetails extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      id: this.props.match.params,
      idPost: "post-ID-" + this.props.match.params.postId,
      imageStatus: "loading",
      jsonData: jsonData,
    });

    jsonData.forEach((e) => {
      if (e.id == this.props.match.params.postId) {
        // console.log(e);
        this.setState({ postSucess: true });
        this.cargaEstados(
          e,
          jsonData
            .map((l) => l.id)
            .indexOf(parseInt(this.props.match.params.postId)),
          0,
          jsonData.length
        );
      }
    });
  }

  cargaEstados(dpd, pa, pi, pf) {
    this.setState({
      dataPostDetail: dpd,
      PostActual: pa,
      PostInicial: pi,
      PostFinal: pf,
    });

    // var NextPost = this.state.jsonData[this.state.PostActual + 1];
    // var PrevPost = this.state.jsonData[this.state.PostActual - 1];
    let LastPostPosition = Object.keys(jsonData).length - 1;
    // console.log(LastPostPosition);
    setTimeout(() => {
      switch (this.state.PostActual) {
        case 0:
          // console.log("Caso 1");
          this.asignaEstadosPaginacion(
            this.state.jsonData[this.state.PostActual + 1],
            this.state.jsonData[0]
          );
          break;
        case LastPostPosition:
          this.asignaEstadosPaginacion(
            this.state.jsonData[LastPostPosition].slug,
            this.state.jsonData[this.state.PostActual - 1]
          );
          console.log(this.state.jsonData[this.state.PostActual + 1]);
          break;

        default:
          // console.log("Caso 3");
          this.asignaEstadosPaginacion(
            this.state.jsonData[this.state.PostActual + 1],
            this.state.jsonData[this.state.PostActual - 1]
          );
          break;
      }
    }, 10);
  }

  componentDidUpdate() {}

  asignaEstadosPaginacion(propsNext, propsPrev) {
    this.setState({
      NextPost: `/blog/${propsNext.slug}/${propsNext.id}`,
      PrevPost: `/blog/${propsPrev.slug}/${propsPrev.id}`,
    });
  }
  getIndexPostList() {
    return this.jsonData
      .map((l) => l.id)
      .indexOf(parseInt(this.props.match.params.postId));
  }

  handleClickAvance = (event) => {};
  handleClickRetrocede = (event) => {};
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  handleImageLoaded() {
    this.setState(this.setState({ imageStatus: "loaded" }));
  }

  handleImageErrored() {
    this.setState(this.setState({ imageStatus: "failed to load" }));
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
    // console.log(this.state.dataPostDetail);
    if (this.state.dataPostDetail && this.state.postSucess) {
      return (
        <React.Fragment>
          <PageHelmet pageTitle="Blog Details" />
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
                      {this.state.dataPostDetail &&
                        this.state.dataPostDetail.title.rendered}
                    </h2>

                    <ul className="blog-meta d-flex justify-content-center align-items-center">
                      <li>
                        <FiClock />
                        <Moment format="DD/MM/YYYY">
                          {this.state.dataPostDetail &&
                            this.state.dataPostDetail.date}
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
                <div className="botoneraPost d-flex flex-sm-column flex-lg-row justify-content-lg-between flex-lg-wrap">
                  <div className="w-sm-25 w-sm-100">
                    <a
                      aria-pressed="true"
                      class="btn btn-primary btn-block"
                      href={this.state.NextPost}
                    >
                      Artículo Siguiente
                    </a>
                  </div>
                  <div className="w-sm-25 w-sm-100">
                    <a
                      aria-pressed="true"
                      class="btn btn-primary btn-block"
                      href={this.state.PrevPost}
                    >
                      Artículo Anterior
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner-wrapper">
                    <div className="inner">
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            this.state.dataPostDetail &&
                            this.state.dataPostDetail.content.rendered,
                        }}
                      ></p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Blog Details */}
          
        </React.Fragment>
      );
    } else {
      return (
        <section>
          <div className=" container-fluid vh-100  d-flex align-items-center margin404 imagen-fondo-404">
            <div className="row w-100">
              <div className="col-6">
                <h1 class="margin404h2">
                  <b>404</b>
                  <br /> Not Found
                </h1>
              </div>
              <div className="col-6">
                La página que usted ha solicitado no se encuentra disponible.{" "}
                <br />
                Disculpe las molestias.
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
export default BlogDetails;

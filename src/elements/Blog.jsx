import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/post";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Noticias de Redes Sociales y Marketing Digital" />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Lista de Noticias"} />
        {/* End Breadcrump Area */}

        {/* Start Blog Area */}
        <div className="rn-blog-area ptb--120 bg_color--1">
          <div className="container">
            <BlogList item="24" claseTitulo=" text-black" />
            <div className="row mt--20">
              <div className="col-lg-12">
                {/* Start Pagination Area */}
                {/* <Pagination /> */}
                {/* End Pagination Area */}
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Area */}
      </React.Fragment>
    );
  }
}
export default Blog;

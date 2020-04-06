import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ls from "local-storage";

import ShowFeaturedImg from "../component/ConsultarPost/ShowFeatureImg";

import jsonData from "../../public/assets/json/f1";

let sanitizeHtml = require("sanitize-html");

export default class post extends Component {
  column = this.props;
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      imgPosts: [],
      visible: { visibility: "visible" },
      jsonData: jsonData,
    };
    this.createMarkup = this.createMarkup.bind();
  }

  //Pasa el parametro ID desde el clic en el artículo
  handleChange = (param) => (e) => {
    // param is the argument you passed to the function
    // e is the event object that returned
    //console.log(param);
    //Recorremos el objeto para ubicar el artículo
    this.state.posts.map((value, i) => {
      //Validamos el artículo seleccionado por el ID pasado en el Parámetro
      if (value.id === param) {
        // console.log("Posición " + i);
        //Se cargan los datos en el LocalStorage, con el ID del artículo
        localStorage.setItem(
          "post-ID-" + this.state.posts[i].id,
          JSON.stringify(this.state.posts[i])
        );
        const idArticulo = "post-ID-" + this.state.posts[i].id;
        console.log(idArticulo);
      }
    });
  };

  componentWillUnmount() {}

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <React.Fragment>
        <div class="d-flex justify-content-center "></div>
        <div className="row mx-1">
          {this.state.jsonData.map((value, i) => (
            <div
              className="col-xs-12 col-sm-6 col-lg-4 post-style-margen"
              key={value.id}
            >
              <div className="blog blog-style--3 mb--0 mt--20 ">
                <div className="thumbnail">
                  <Link
                    to={`/blog/${value.slug}/${value.id}`}
                    onClick={this.handleChange(value.id)}
                  >
                    {/* <ShowFeaturedImg
                      url={value._links["wp:featuredmedia"][0].href}
                    /> */}
                  </Link>
                  <div className="content">
                    <p className="blogtype">{value.category}</p>
                    <h4 className={"title" + this.props.claseTitulo}>
                      <Link
                        className={"title" + this.props.claseTitulo}
                        to={`/blog/${value.slug}/${value.id}`}
                        onClick={this.handleChange(value.id)}
                      >
                        {value.title.rendered}
                      </Link>
                    </h4>
                    <div
                      className={"Exerpt title" + this.props.claseTitulo}
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(value.excerpt.rendered),
                      }}
                    ></div>

                    <Link
                      className=" btn btn-danger btn-lg"
                      to={`/blog/${value.slug}/${value.id}`}
                      onClick={this.handleChange(value.id)}
                    >
                      Ver
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
      // <div>
      //   {this.state.posts.map(post => (
      //     <Link to={`/${post.slug}`} key={post.id}>
      //       <div className="card" key={post.id}>
      //         <div className="card-content">
      //           <h3>{post.title.rendered}</h3>
      //           <div
      //             dangerouslySetInnerHTML={this.createMarkup(
      //               post.excerpt.rendered
      //             )}
      //           />
      //         </div>
      //       </div>
      //     </Link>
      //   ))}
      // </div>
    );
  }
}

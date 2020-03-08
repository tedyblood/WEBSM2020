import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ls from "local-storage";

export default class post extends Component {
  column = this.props;
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      imgPosts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  //Pasa el parametro ID desde el clic en el artículo
  handleChange = param => e => {
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

  consultaJson(url, tipo_consulta, numItems) {
    this.serverRequest = axios
      .get(
        // `https://socialmedia-panama.com/wp-json/wp/v2/posts?per_page=${this.column.item}`
        `${url}${tipo_consulta}${numItems}`
      )
      .then(posts => {
        this.setState({
          posts: posts.data
        });
        // console.log(this.state.posts[0]._links["wp:featuredmedia"][0].href);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  consultaImgJson(id) {
    console.log(id);

    if (id) {
      console.log("tenemos id");
      this.serverRequest = axios
        .get(id)
        .then(posts => {
          this.setState({
            imgPosts: posts.data
          });
          console.log(this.state.imgPosts);
          axios.CancelToken.source();
          // const respuesta = posts.data[0].guid.rendered;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }

    // if (Object.keys(this.state.imgPosts).length === 0) {
    //   this.serverRequest = axios
    //     .get(`${url}${tipo_consulta}${id}`)
    //     .then(posts => {
    //       this.setState({
    //         imgPosts: posts.data
    //       });

    //       // const respuesta = posts.data[0].guid.rendered;
    //     })
    //     .catch(function(error) {
    //       // handle error
    //       console.log(error);
    //     });
    // }
    // /*Final de la comparación*/
    return this.state.imgPosts;
  }

  componentDidMount() {
    this.consultaJson(
      // "https://www.socialmedia-panama.com",
      // "https://www.trazos-web.com",
      "https://wpdirecto.com",
      "/wp-json/wp/v2/posts?per_page=",
      this.props.item
    );
  }
  componentWillUnmount() {}

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.state.posts.map((value, i) => (
            <div className=" col-12" key={value.id}>
              <div className="blog blog-style--3 mb--0 mt--20">
                <div className="thumbnail">
                  <Link
                    to={`/blog-details/${value.slug}/${value.id}`}
                    onClick={this.handleChange(value.id)}
                  >
                    {/* <img
                      className="w-100"
                      // src={this.state.imgPosts}
                      src={this.consultaImgJson(
                        value._links["wp:featuredmedia"][0].href
                      )}
                      alt="Blog Images"
                    /> */}
                  </Link>
                  <div className="content">
                    <p className="blogtype">{value.category}</p>
                    <h4
                      className={"title text-justify " + this.props.claseTitulo}
                    >
                      <Link
                        to={`/blog-details/${value.slug}/${value.id}`}
                        onClick={this.handleChange(value.id)}
                      >
                        {value.title.rendered}
                      </Link>
                    </h4>
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

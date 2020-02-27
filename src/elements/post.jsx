import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ls from "local-storage";

// const DataUrl = "https://socialmedia-panama.com/wp-json/wp/v2/posts";
// return fetch(`https://socialmedia-panama.com/wp-json/wp/v2/posts`)

export default class post extends Component {
  column = this.props;
  constructor(props) {
    super(props);
    this.state = {
      posts: []
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

  componentDidMount() {
    this.serverRequest = axios
      .get(
        `https://socialmedia-panama.com/wp-json/wp/v2/posts?per_page=${this.column.item}`
      )
      .then(posts => {
        this.setState({
          posts: posts.data
        });
      });
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
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={value.id}>
              <div className="blog blog-style--3 mb--0 mt--40">
                <div className="thumbnail">
                  <Link
                    to={`/blog-details/${value.slug}/${value.id}`}
                    onClick={this.handleChange(value.id)}
                  >
                    <img
                      className="w-100"
                      src={value.jetpack_featured_media_url}
                      //src={`/assets/images/blog/blog-03.jpg`}
                      alt="Blog Images"
                    />
                  </Link>
                  <div className="content">
                    <p className="blogtype">{value.category}</p>
                    <h4 className="title text-white text-justify">
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

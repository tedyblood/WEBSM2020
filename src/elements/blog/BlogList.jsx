import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
let sanitizeHtml = require("sanitize-html");



export default function Posts(props) {
  
  const [count, setCount] = useState(props);
  let [cargando, setLoading] = useState(true);  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(cargando)
    async function loadPosts() {
      const response = await fetch(
        "https://data.socialmediapanama.com/wp-json/wp/v2/posts?per_page=100"
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const posts = await response.json();
      // console.log(posts)
      setPosts(posts);
      cargando = false    
      setLoading(cargando)
      console.log(cargando)    
    }
    loadPosts();          
  }, []);

  
  
  return (
    <React.Fragment>      
        <div class="d-flex justify-content-center "></div>
        {!cargando ? "" : <h4 className={"title" + count.claseTitulo} >Cargando ideas para redes sociales...</h4>}
        <div className="row mx-1">          
          {posts.map((value, i) => (
            <div
              className="col-xs-12 col-sm-6 col-lg-4 post-style-margen"
              key={value.id}
            >
              <div className="blog blog-style--3 mb--0 mt--20 ">
                <div className="thumbnail">
                  <Link
                    // to={`/blog/${value.slug}/${value.id}`}
                    // onClick={this.handleChange(value.id)}
                  >
                    {/* <ShowFeaturedImg
                      url={value._links["wp:featuredmedia"][0].href}
                    /> */}
                  </Link>
                  <div className="content">
                    <p className="blogtype">{value.category}</p>
                    <h4 className={"title"+ count.claseTitulo }>
                      <Link
                        className={"title" + count.claseTitulo}
                        to={`/blog/${value.id}/${value.slug}`}
                        // onClick={this.handleChange(value.id)}
                      >
                        {value.title.rendered ?  value.title.rendered :  "Cargando"}
                      </Link>
                    </h4>
                    <div
                      className={"Exerpt title " + count.claseTitulo}
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(value.excerpt.rendered),
                      }}
                    ></div>

                    <Link
                      className=" btn btn-danger btn-lg"
                      to={`/blog/${value.id}/${value.slug}`}
                      // onClick={this.handleChange(value.id)}
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
    
  );
}

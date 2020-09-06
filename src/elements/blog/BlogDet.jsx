import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHelmet from "../../component/common/Helmet";
import { FiClock } from "react-icons/fi";
import Moment from "react-moment";

import LikeComp from "../commentFacebook/LikeComp";
import ShareComp from "../commentFacebook/ShareComp";
import CommentComp from "../commentFacebook/ComentComp.jsx";

import ContentPlaceholder from "../../component/ContentPlaceholder/ContentPlaceholder";

//import QueryAutor from "./BloqQuery";

const divStyle = {
  top: "188px",
  width: "90px",
  left: "0",
  height: "80px",
  position: "fixed",
  background: "#30b0d8",
  padding: "8px 0 0 15px"  
}




export default function BlogDet() {

  
  const { postId, postSlug } = useParams();  

  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `https://data.socialmediapanama.com/wp-json/wp/v2/posts/${postId}`
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, []);

  
  
  return (
    <React.Fragment>
      <PageHelmet
        pageTitle={posts.id ? posts.title.rendered : "Cargando Blog"}
        pageDesc={`Publicado el: ${
          posts.id && posts.date
        }  en el blog de noticias de Social Media Panamá`}
      />
      
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h1 className="title theme-gradient">
                  {/* The Home of the Future <br /> Could Bebes */}
                  {posts.id ? posts.title.rendered : "Cargando ..."}
                </h1>
                <diV style={divStyle}><ContentPlaceholder/></diV>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                <li><img src="https://secure.gravatar.com/avatar/442b63205385b7bb21920fd995ac7450?s=48&d=mm&r=g"/>Josueth Acevedo </li>
                  <li>
                    <FiClock />
                    <Moment format="DD/MM/YYYY">
                      {posts.id && posts.date}
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
          <div className="row"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  {" "}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: posts.id
                        ? posts.content.rendered
                        : "Cargando ...",
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
          <h4>Social</h4>
          <div className="row">
            <div className="col-6"><LikeComp /></div>
            <div className="col-6"><ShareComp/></div>
          </div>
          
          <hr/>
          <h4>Comentarios</h4>
          <CommentComp/>
          
          
        </div>
      </div>

      {/* End Blog Details */}
    </React.Fragment>
  );
}
import React, { useState, useEffect } from "react";

import "./styleCA.css"

function createMarkup(props) {
  return {
     __html: props    };
}; 

export default function Consulta_API({ children }) {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "https://data.socialmediapanama.com/wp-json/wc/store/products"
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
    <>
       {posts.map((value , index) => (
        <div key={value.id} className=" Control mt-5">
            <div>
                <div className="thumbnail-inner">
                    <div>
                    <a href={value.add_to_cart.url} target="_blank" rel="noopener noreferrer"><img src={value.images[0].src} alt={value.name}/></a>
                    </div>
                    <div className={`bg-blr-image`}></div>
                </div>
                <div className="content">
                    <div className="inner">
                        <p dangerouslySetInnerHTML={createMarkup(value.price_html)} ></p>
                        <h4><a href={value.add_to_cart.url} target="_blank" rel="noopener noreferrer">{value.name}</a></h4>
                        <p dangerouslySetInnerHTML={createMarkup(value.short_description)}></p>
                        <div className="portfolio-button">
                            <a className="rn-btn" href={value.add_to_cart.url} target="_blank" rel="noopener noreferrer">{value.add_to_cart.text}</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        
    ))}
    </>
  );
}

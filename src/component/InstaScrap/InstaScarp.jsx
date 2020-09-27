import React, { useState, useEffect } from "react";
import "./style.css";

function InstaScarp() {
  var ig = require("instagram-scraping");
  const [ScrapRes, setData] = useState([]);
  useEffect(() => {
    // Run! Like go get some data from an API.
    ig.deepScrapeTagPage("redessocialesparanegocios")
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log("Mensaje de Error: " + error);
      });
  }, [ig]);

  return (
    <div>
      {ScrapRes.medias ? (
        // INICIO
        <>
          
          <div className="Contenedor_Items">
            {ScrapRes.medias.map((item) => (
              <div className="card custom_CSS" key={item.id}>
                <img
                  className="card-img-top"
                  src={item.display_resources[0].src}
                  alt={item.accessibility_caption || "Imagen-Instagram-"+item.id}
                />
                <div className="card-body">
                  <h5 
                  className="card-title" 
                  style={{                    
                      background: "#8b8daf",
                      padding: "5px",
                      color: "white"
                    }}
                  >{item.owner.full_name}</h5>
                  <h6
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html: item.edge_media_to_caption.edges[0].node.text,
                    }}
                  ></h6>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
    // FIN
  );
}

export default InstaScarp;

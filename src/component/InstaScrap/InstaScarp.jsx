import React, { useState, useEffect } from "react";
import "./style.css";

function InstaScarp() {
  var ig = require("instagram-scraping");
  const [ScrapRes, setData] = useState([]);
  useEffect(() => {
    ig.scrapeTag("redesociales").then((result) => {
      setData(result);
    });
  });

  return (
    <div>
      {ScrapRes.medias ? (
        // ScrapRes.medias.map(item => (
        //         <div>
        //         <img src={item.thumbnail} alt=""/>
        //         </div>
        // ))
        //<img src={ScrapRes.medias[0].thumbnail} alt=""/>
        // INICIO
        <>
          
          <div className="Contenedor_Items">
          {ScrapRes.medias.map((item) => (
          <div className="card" >
            <img className="card-img-top" src={item.thumbnail_resource[4].src} alt="Card image cap" />
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <h5 className="card-text" dangerouslySetInnerHTML={{ __html: item.text }}></h5>              
            </div>
          </div>
          ))}          
          </div>
        </>
      ) : (
        // FIN

        "false"
      )}
    </div>
  );
}

export default InstaScarp;

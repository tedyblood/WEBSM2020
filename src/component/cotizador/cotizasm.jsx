import React, { Component } from "react";
import PageHelmet from "../common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import { 
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin, 
  FaPinterestP, 
  FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";

import "./css/main.css";

export class cotizasm extends Component {
  componentDidMount(){
    var Facebook = document.getElementById("Facebook");
var Instagram = document.getElementById("Instagram");
var Twitter = document.getElementById("Twitter");
var Linkedin = document.getElementById("Linkedin");
var Pinterest = document.getElementById("Pinterest");
var Youtube = document.getElementById("Youtube");
var TikTok = document.getElementById("TikTok");

var L__Facebook = document.getElementById("L__Facebook");
var L__Instagram = document.getElementById("L__Instagram");
var L__Twitter = document.getElementById("L__Twitter");
var L__Linkedin = document.getElementById("L__Linkedin");
var L__Pinterest = document.getElementById("L__Pinterest");
var L__Youtube = document.getElementById("L__Youtube");
var L__TikTok = document.getElementById("L__TikTok");

var PostsMonth = 15;
var CustomImages = 15;
var BoostedPosts = 2;
var Contest = 0;

var GrupoServicio = 0;
var costoBase = 140;
var costoServiciosEspeciales = [0, 1, 1.5, 5, 8.5];

var valorInicial = 140;
var valorSumar,
  ValorTotal = 0;

function suma(prop, propService = 1) {
  ValorTotal = valorInicial * propService + ValorTotal;
  // console.log(ValorTotal);
  document.getElementById("PrecioText").innerHTML = `$ ${ValorTotal}`;
}

function restar(prop, propService = 1) {
  ValorTotal = ValorTotal - valorInicial * propService;
  // console.log(ValorTotal);
  document.getElementById("PrecioText").innerHTML = `$ ${ValorTotal}`;

}

Facebook.addEventListener("change", (e) => {
  if (e.target.checked) {
    L__Facebook.classList.add("btn-seleccionado");
    GrupoServicio = GrupoServicio + 1;
    suma(GrupoServicio);
  } else {
    L__Facebook.classList.remove("btn-seleccionado");
    GrupoServicio = GrupoServicio - 1;
    restar(GrupoServicio);
  }
  LoadServiceTXT(GrupoServicio);  
});

Instagram.addEventListener("change", (e) => {
  if (e.target.checked) {
    L__Instagram.classList.add("btn-seleccionado");
    GrupoServicio = GrupoServicio + 1;
    suma(GrupoServicio);
  } else {
    L__Instagram.classList.remove("btn-seleccionado");
    GrupoServicio = GrupoServicio - 1;
    restar(GrupoServicio);
  }
  LoadServiceTXT(GrupoServicio);  
});

Linkedin.addEventListener("change", (e) => {
  if (e.target.checked) {
    L__Linkedin.classList.add("btn-seleccionado");
    GrupoServicio = GrupoServicio + 1;
    suma(GrupoServicio);
  } else {
    L__Linkedin.classList.remove("btn-seleccionado");
    GrupoServicio = GrupoServicio - 1;
    restar(GrupoServicio);
  }
  LoadServiceTXT(GrupoServicio);  
});

Twitter.addEventListener("change", (e) => {
  if (e.target.checked) {
    L__Twitter.classList.add("btn-seleccionado");
    GrupoServicio = GrupoServicio + 1;
    suma(GrupoServicio, costoServiciosEspeciales[2]);
  } else {
    L__Twitter.classList.remove("btn-seleccionado");
    GrupoServicio = GrupoServicio - 1;
    restar(GrupoServicio, costoServiciosEspeciales[2]);
  }
  LoadServiceTXT(GrupoServicio);  
});

Pinterest.addEventListener("change", (e) => {
  if (e.target.checked) {
    L__Pinterest.classList.add("btn-seleccionado");
    GrupoServicio = GrupoServicio + 1;
    suma(GrupoServicio , costoServiciosEspeciales[2]);
  } else {
    L__Pinterest.classList.remove("btn-seleccionado");
    GrupoServicio = GrupoServicio - 1;
    restar(GrupoServicio , costoServiciosEspeciales[2]);
  }
  LoadServiceTXT(GrupoServicio);  
});

Youtube.addEventListener("change", (e) => {
  if (e.target.checked) {
    L__Youtube.classList.add("btn-seleccionado");
    GrupoServicio = GrupoServicio + 1;
    suma(GrupoServicio, costoServiciosEspeciales[4]);
  } else {
    L__Youtube.classList.remove("btn-seleccionado");
    GrupoServicio = GrupoServicio - 1;
    restar(GrupoServicio, costoServiciosEspeciales[4]);
  }
  LoadServiceTXT(GrupoServicio);  
});

TikTok.addEventListener("change", (e) => {
  if (e.target.checked) {
    L__TikTok.classList.add("btn-seleccionado");
    GrupoServicio = GrupoServicio + 1;
    suma(GrupoServicio, costoServiciosEspeciales[3]);
  } else {
    L__TikTok.classList.remove("btn-seleccionado");
    GrupoServicio = GrupoServicio - 1;
    restar(GrupoServicio, costoServiciosEspeciales[3]);
  }
  LoadServiceTXT(GrupoServicio);  
});

function LoadServiceTXT(props) {
  document
    .getElementById("servicios")
    .getElementsByTagName("li")[0].innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>  
    ${
    PostsMonth * props
  } Post Mensuales`;
  document
    .getElementById("servicios")
    .getElementsByTagName("li")[1].innerHTML = `<i class="fa fa-picture-o" aria-hidden="true"></i>  
    ${
    CustomImages * props
  } Diseños Personalizados`;
  document
    .getElementById("servicios")
    .getElementsByTagName("li")[2].innerHTML = `<i class="fa fa-line-chart" aria-hidden="true"></i> 
    ${props} Post promocionados`;
  document
    .getElementById("servicios")
    .getElementsByTagName("li")[3].innerHTML = `<i class="fa fa-trophy" aria-hidden="true"></i> ${
    props > 3 ? Contest + 1 : 0
  } Concursos Anuales`;
}

// self executing function here
(function () {
  document.getElementById("servicios").getElementsByTagName("li")[0].innerHTML =
    ` 0 Post Mensuales`;
  document.getElementById("servicios").getElementsByTagName("li")[1].innerHTML =
    `<i class="fa fa-picture-o" aria-hidden="true"></i> 0 Diseños Personalizados`;
  document.getElementById("servicios").getElementsByTagName("li")[2].innerHTML =
    `<i class="fa fa-line-chart" aria-hidden="true"></i> 0 Post promocionados`;
  document.getElementById("servicios").getElementsByTagName("li")[3].innerHTML =
    `<i class="fa fa-trophy" aria-hidden="true"></i> 0 Concursos Anuales`;
  document.getElementById("PrecioText").innerHTML = "$ 0.00";

  console.log();
})();

  }
  render() {
    return (
      <>
        {/* <PageHelmet pageTitle="Cotizador" /> */}
        {/* Start Breadcrump Area */}
        {/* <Breadcrumb
          title={"Cotizador"}
          pageDescr={"Sistema de Cotizador para Redes Sociales"}
        /> */}
        {/* End Breadcrump Area */}

        {/* Start Blog Area */}
        
        <div class="container-fluid">
      <div class="row FilaContenedora">
          <div class="Botones col-sm-4 col-md-7">
            <div class="titleColumn">
              <h5>Seleccione las Redes Sociales</h5>
            </div>
            <label id="L__Facebook" class="btn btn-primary-custom ">
              <input
                id="Facebook"
                class="boton__"
                type="checkbox"
                name="Facebook"
                value="Facebook"
              />
              
              <IconContext.Provider value={{ className: "iconSocialMedia" }}><FaFacebookSquare /></IconContext.Provider>
              <i class="fa fa-facebook-official fa-2x"></i>
            </label>
            <label id="L__Instagram" class="btn btn-primary-custom ">
              <input
                id="Instagram"
                class="boton__"
                type="checkbox"
                name="Instagram"
                value="Instagram"
              />
              <IconContext.Provider value={{ className: "iconSocialMedia" }}><FaInstagram /></IconContext.Provider>
              <i class="fa fa-instagram fa-2x"></i>
            </label>
            <label id="L__Twitter" class="btn btn-primary-custom ">
              <input
                id="Twitter"
                class="boton__"
                type="checkbox"
                name="Twitter"
                value="Twitter"
              />              
              <IconContext.Provider value={{ className: "iconSocialMedia" }}><FaTwitter /></IconContext.Provider>
              <i class="fa fa-twitter fa-2x"></i>
            </label>
            <label id="L__Linkedin" class="btn btn-primary-custom ">
              <input
                id="Linkedin"
                class="boton__"
                type="checkbox"
                name="Linkedin"
                value="Linkedin"
              />
              <IconContext.Provider value={{ className: "iconSocialMedia" }}><FaLinkedin /></IconContext.Provider>
              <i class="fa fa-linkedin fa-2x"></i>
            </label>
            <label id="L__Pinterest" class="btn btn-primary-custom ">
              <input
                id="Pinterest"
                class="boton__"
                type="checkbox"
                name="Pinterest"
                value="Pinterest"
              />
              <IconContext.Provider value={{ className: "iconSocialMedia" }}><FaPinterestP /></IconContext.Provider>
              <i class="fa fa-pinterest-p fa-2x"></i>
            </label>
            <label id="L__Youtube" class="btn btn-primary-custom ">
              <input
                id="Youtube"
                class="boton__"
                type="checkbox"
                name="Youtube"
                value="Youtube"
              />
              <IconContext.Provider value={{ className: "iconSocialMedia" }}><FaYoutube /></IconContext.Provider>
              <i class="fa fa-youtube fa-2x"></i>
            </label>
            <label id="L__TikTok" class="btn btn-primary-custom ">
              <input
                id="TikTok"
                class="boton__"
                type="checkbox"
                name="TikTok"
                value="TikTok"
              />    
              {/* <IconContext.Provider value={{ className: "iconSocialMedia" }}><FaInstagram /></IconContext.Provider>               */}
              <img class="ImgIcon" src="./assets/images/tick.png" alt="TikTok" srcset="" />
            </label>

          </div>
          <div class="ServiciosData col-xs-6 col-sm-5 col-md-3">
            <div class="titleColumn">
              <h5>Servicios base incluídos</h5>
            </div>
            <div id="servicios">
              <ul class="ListaServicios">
                <li class="Post"></li>
                <li class="customImg"></li>
                <li class="Boost"></li>
                <li class="Contest"></li>
            </ul>
              
            </div>
          </div>
          <div class="PrecioLoad col-xs-6 col-sm-3 col-md-2">
            <div class="titleColumn ">
              <h5>Inversión</h5>
            </div>
            <div class="PrecioWrap">
              <h5 id="PrecioText"></h5>
            </div>
          </div>
      </div>
  </div>
        {/* End Blog Area */}
      </>
    );
  }
}

export default cotizasm;

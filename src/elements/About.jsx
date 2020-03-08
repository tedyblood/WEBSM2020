import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import img1 from "../../public/assets/images/historia/01.JPG";
import img3 from "../../public/assets/images/historia/02.JPG";
import img2 from "../../public/assets/images/historia/03.JPG";
import img4 from "../../public/assets/images/historia/04.jpg";

class About extends Component {
  render() {
    let title = "Nosotros",
      description =
        "Te ayudamos a sobresalir en áreas de marketing, donde la mayoría se quedan atrás: la investigación, la estrategia y la la ejecución de los aspectos técnico-creativo.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Nosotros" />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"¿Quienes Somos?"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img className="w-100" src={img1} alt="About Images" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Nuestro lema</h3>
                          <p>
                            <b>“Crear relaciones valiosas” </b>¿Por qué? Debido
                            a que nuestros mayores beneficios provienen del
                            trabajo y la generosidad que ponemos en nuestras
                            relaciones con los clientes, compañeros de trabajo,
                            socios y colegas.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Nuestros Valores</h3>
                          <p>
                            Creemos en hacer todo lo posible para servir a los
                            demás en primer lugar, esta filosofía opera desde el
                            amor en lugar del miedo, podemos decir que la
                            impecabilidad de nuestras palabras, la diversión, el
                            dar, el karma, y el deseo de aprender, mientras que
                            enseñar a los demás, es parte de nuestra filosofía
                            de trabajo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">
                  Que alcance tiene nuestro equipo
                </h4>
                <p>
                  Al contratar a Social Media Panamá, estas contratando un
                  equipo conformado por Diseñadores, Desarrolladores y Expertos
                  en Comunicación digital. Nosotros funcionamos como un
                  departamento de Marketing Externo.
                </p>
                <a className="rn-btn btn-white" href="/contact">
                  Hablemos
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img
                  src="/assets/images/about/finding-us-01.png"
                  alt="Finding Images"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title">Nuestra Historia</h2>
                  <p>
                    La secuencia de imágenes describe los diferentes momentos en
                    los que hemos sido invitados como expositores.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={img1} alt="Blog Images" />
                  </div>
                  <div className="content">
                    <h4 className="title">2010</h4>
                    <p className="designation">Social Media Day</p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={img2} alt="Blog Images" />
                  </div>
                  <div className="content">
                    <h4 className="title">2011</h4>
                    <p className="designation">Cámara de Comercio</p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={img3} alt="Blog Images" />
                  </div>
                  <div className="content">
                    <h4 className="title">2013</h4>
                    <p className="designation">Internacional Institute</p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}
              {/* Start Single Team  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={img4} alt="Blog Images" />
                  </div>
                  <div className="content">
                    <h4 className="title">2014</h4>
                    <p className="designation">RPC TV Panama</p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}
      </React.Fragment>
    );
  }
}
export default About;

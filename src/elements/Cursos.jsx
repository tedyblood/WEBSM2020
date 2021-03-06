import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import Breadcrumb from "./common/Breadcrumb";
import CursosList from "./portfolio/CursosList";


class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Cursos' description="Aprende a desarrollar un plan de redes sociales, triunfa en tus redes sociales hoy."/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Cursos'}   />
                {/* End Breadcrump Area */}

                                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">Aprende a desarrollar <br></br>un Social Media Plan.</h2>
                                        
                                        <p>Esta es una lista de cursos que consideremos que tienen un alto valor, a lo largo del año los vamos tomando y según la calidad del contenido nos sentimos cómodos en recomendarlo a nuestros visitantes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <CursosList />
                            </div>                            
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}




            </React.Fragment>
        )
    }
}
export default Portfolio;
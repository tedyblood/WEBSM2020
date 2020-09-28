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
                <PageHelmet pageTitle='Empleos' description="¿Deseas trabajar con nosotros? "/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Empleos'}   />
                {/* End Breadcrump Area */}

                                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1" style={{"height": "1721"}}>
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">Formulario de Empleo</h2>
                                        
                                        <p>En este paso no te pediremos tu hoja de vida, tampoco nos emociona saber si vives en San Francisco o en Pacora. Nos gusaría conocer tus tus habilitades y competencias. Queremos ver tu portafolio,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2LlswLPZGwqHlyfA0rFVGyf8oTiL0el_TBUJyf9oPlYG5Kg/viewform?embedded=true" width="100%" height="1721" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>

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
import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";

import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";
import ContactTwo from "../elements/contact/ContactTwo";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ImageHeader
} from "react-simple-card";
import ModalContact from "../component/common/ModalContact";
import { FaCommentsDollar } from "react-icons/fa";

class ServiceDetailsSM extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {}

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Servicios de Pago por Click (PPC)"  pageDesc="Servicio pago por clic en Facebook, Instagram, Waze, Twitter, Spotify, Amazon."/>
        {/* End Pagehelmet  */}
        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--2"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h1 className="title theme-gradient">
                    La publicidad de Pago Por Clic
                  </h1>
                  <p>
                    La compra de medios en Instagram tiene un impacto inmediato
                    a un precio muy competitivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <GirAnimada bottom="23" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="page-title mb--50">
                    <h2 className="title">
                      ¿Cuánto cuesta <br />
                      anunciarse en Instagram?
                    </h2>
                    <p>
                      La publicidad en instagram como en tantos otros canales
                      tiene un costo base de 1 dólar diario, sin embargo esto se
                      puede resumir en un gran, Depende
                      <br />
                      <hr /> Dependerá de los recursos disponibles, dependera de
                      los objetivos, del costo del clic. En cualquier caso
                      nosotros asesoramos a nuestros clientes en tiempo y forma,
                      además hacemos una proyección de resultados esperados.
                      Podemos obtener resultados a gran escala o en micro
                      segmentos con el objetivo de alcance
                    </p>
                  </div>
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          {" "}
                          <img
                            className="w-100"
                            src="/assets/images/service/ppc.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h2 className="title mt-5">
                            Generar clientes potenciales
                          </h2>
                          <p>
                            Te ofrecemos clientes potenciales fácilmente en un
                            mundo en donde todo sucede entre dispositivos.
                          </p>
                          <h2 className="title mt-5">Soporte Personalizado</h2>
                          <p>
                            Ofrecemos un sistema integrado de asistencia rápida
                            de varios niveles. Comunicación abierta por
                            Teléfono, Chat o Email
                          </p>
                          <h2 className="title mt-5">Twitter Ads</h2>
                          <p>
                            Con campañas publicitarias en Twitter conseguirás
                            que tus Tweets y tu cuenta sean visibles para para
                            un grupo de personas interesadas en tu oferta
                            comercial. Además podrás conseguir varios objetivos
                            fundamentales como pueden ser más seguidores en tu
                            cuenta o retuits, me gusta, respuestas o clics en su
                            Tweet Promocionado, captación de prospectos.
                          </p>
                          <h2 className="title mt-5">Anuncios en Instagram</h2>
                          <p>
                            Realizamos campañas publicitarias en Instagram
                            dentro de la plataforma y mediante el sistema del
                            administrador de anuncios de Facebook, con foto o
                            vídeo o en modo carrusel enfocados a conseguir el
                            objetivo deseado: instalación de la app mobile,on
                            conversies en la web, clicks a la web, post
                            engagement, visionados de vídeo…
                          </p>
                          <h2 className="title mt-5">
                            Anuncios de video en Youtube
                          </h2>
                          <p>
                            Planeamos y Lanzamos campañas publicitarias en
                            Youtube Ads en todos los formatos publicitarios
                            vigentes siempre dentro del presupuesto y
                            necesidades y los segmentamos para que se dirijan a
                            tu target ideal.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="page-title mb--50">
                        <h2 className="title">
                          ¿Qué incluye los servicios compra de anuncios en
                          internet?
                        </h2>
                        <p>
                          Antes de publicar tus anuncios para generar clientes
                          potenciales implementamos las siguientes
                          segmentaciones:
                        </p>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <Card className="Estilos_Card_PPC">
                            <ImageHeader imageSrc="/assets/images/service/publicos-ppc.png" />
                            <CardHeader>
                              <h3>Públicos personalizados</h3>
                            </CardHeader>
                            <CardBody>
                              <p>
                                Llegamos a tu público de mayor valor creando un
                                <b>públicos personalizados</b>. Utilizamos los
                                datos de tus clientes para conectarte con
                                públicos valiosos o crear públicos en función de
                                sus acciones previas. Algunos ejemplos de
                                públicos personalizados son las personas de tu
                                CRM o las que visitaron recientemente tu sitio o
                                app.
                              </p>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <Card className="Estilos_Card_PPC">
                            <ImageHeader imageSrc="/assets/images/service/publicos-ppc2.png" />
                            <CardHeader>
                              <h3>Públicos similares</h3>
                            </CardHeader>
                            <CardBody>
                              <p>
                                Utilizamos públicos similares para ampliar tu
                                base de clientes llegando a las personas que se
                                parecen a tus clientes más valiosos. Con
                                herramientas de Facebook, ejecutamos
                                herramientas que generan modelos sofisticados
                                para identificar a las personas. Este método de
                                segmentación puede ser muy eficaz porque usamos
                                muchos atributos para predecir qué personas se
                                parecen a tus mejores clientes.
                              </p>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <Card className="Estilos_Card_PPC">
                            <ImageHeader imageSrc="/assets/images/service/publicos-ppc3.png" />
                            <CardHeader>
                              <h3>Personas cerca de ti</h3>
                            </CardHeader>
                            <CardBody>
                              <p>
                                Si tienes una o más tiendas podemos usar la
                                función de localizador de tiendas con los
                                anuncios para clientes potenciales. Esta función
                                está diseñada como ayuda para dirigirte a
                                posibles clientes que están cerca de tus
                                tiendas, ya que permite a las personas elegir
                                dónde quieren comprar.
                              </p>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Contact Page Area  */}
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area  */}
        {/* End Page Wrapper */}
      </React.Fragment>
    );
  }
}
export default ServiceDetailsSM;

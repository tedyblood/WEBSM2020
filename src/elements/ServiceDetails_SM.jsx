import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { Link } from "react-router-dom";

import SVG from "../component/animation/GreenshockOne";

import GirAnimada from "../component/animation/AnimationG";
import { AnimationSlider } from "../component/animation/AnimationSlider";

import Instagram from "../elements/service/instagramTwo";

import ContactTwo from "../elements/contact/ContactTwo";

import Cotizasm from "../component/cotizador/cotizasm";

import Scrap from "../component/InstaScrap/InstaScarp";

class ServiceDetailsSM extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {}
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet
          pageTitle="Gestión de Redes Sociales"
          pageDesc="Soporte local y gestión de redes sociales diarias, 48 horas de soporte de redes semanales. Organizamos Concursos y otras actividades lúdicas en tus perfiles."
        />
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
                    Gestión de Redes Sociales
                  </h1>
                  <p>
                    Alta experiencia en manejo de redes sociales para empresas en Latinoamérica
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
                  {/* <div className="page-title mb--50">
                                        <h2 className="title">Digital Brands.</h2>
                                        <p>Lorem ipsum dolor sit amet, is. Digital Brands. </p>
                                    </div> */}
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/socialmedia.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Ofrecemos Servicios profesionales con experiencia en
                            manejo de redes sociales para potenciar tu negocio
                            en el mundo digital.
                          </p>
                          <p>
                            Nuestra agencia de comunicación digital estudiará y
                            aprenderá la filosofía y los valores de su empresa,
                            integrándose como un departamento de marketing anexo
                            a su organigrama y garantizando así la transmisión
                            al exterior de una imagen y unos valores adecuados.
                          </p>
                          <h3 className="title mt-5">
                            ¿Qué hacemos por tu marca?
                          </h3>
                          <ol className="liststyle">
                            <li>
                              Informe inicial de presencia online de la marca,
                              en Internet y medios sociales.
                            </li>
                            <li>Páginas web optimizadas para Buscadores.</li>
                            <li>
                              Creación de perfiles y cuentas en redes sociales.
                            </li>
                            <li>
                              Distribución de los contenidos a través de los
                              canales digitales.
                            </li>
                            <li>
                              Monitorización continua y recogida del feedback
                              del cliente para envío a la organización.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    <div class="container">
                      <div class="row Row__Title_Cotizador">
                        <div class="Titulo__cotizador col-sm-12">
                          <h3 class="title">Calcular costo de paquete de redes sociales</h3>
                        </div>
                      </div>
                      <div class="row Row_Cotizador__Widget ">
                        <div class="Cotizador__Widget col-sm-12">
                          <Cotizasm />
                        </div>
                        <div class="Texto__Widget__Cotizador col-sm-6">
                          Estos datos son estimados, todos nuestros servicios
                          buscan un retorno de inversión mediante una secuencia
                          de acciones personalizadas que no están listadas en
                          esta calculadora. Lo invitamos a solicitar una
                          cotización sin compromiso.
                        </div>
                        <div class="Call__To__Action__Widget col-sm-6 mt-3">
                          <Link className="btn btn-warning" to="/contact">
                            Solicita una cotización personalizada
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h3 className="title">
                            Reducción de costes en publicidad
                          </h3>
                          <p>
                            En social media desarrollamos un plan para que los
                            Community Managerpuedan compartir detalles
                            esenciales de tu negocio para que tus clientes te
                            encuentren y contacten más fácilmente.
                          </p>
                        </div>
                        <div className="details mt_md--30 mt_sm--30 mt-5">
                          <h3 className="title">
                            Reducción de costes en publicidad
                          </h3>
                          <p>
                            En social media desarrollamos un plan para que los
                            Community Managerpuedan compartir detalles
                            esenciales de tu negocio para que tus clientes te
                            encuentren y contacten más fácilmente.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/socialmedia-panama.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <AnimationSlider></AnimationSlider>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30 mt-5">
                          <h3 className="title">
                            Servicio de Community Manager
                          </h3>
                          <ol>
                            <li>
                              Nuestro servicio de community manager se ocupará
                              de estas tareas complementarias.
                            </li>
                            <li>
                              Realizamos un Branding de la Marca antes de
                              iniciar cualquier trabajo.
                            </li>
                            <li>
                              Contamos con diseñadores para personalizar las
                              cuentas y las publicaciones.
                            </li>
                            <li>
                              Creamos y distribuimos contenido importante de su
                              empresa en cualquier medio digital.
                            </li>
                            <li>
                              Creamos experiencia de marca. Hacemos que su
                              target obtenga información sobre su marca, sobre
                              los valores que la identifican y de esta manera,
                              generar sentimientos positivos por la marca.
                            </li>
                            <li>
                              Realizamos recorridos por los establecimientos en
                              la ciudad de Panamá para la selección de la
                              mercancía y la toma de fotos.
                            </li>
                            <li>
                              Tenemos cámaras, equipo, luces, caja de luz,
                              fondos y personal capacitado para tomar fotos y
                              vídeos de sus productos, en tu local o evento, a
                              cualquiera hora, o día del año y lo podrás
                              utilizar en tus redes sociales o cualquier otro
                              medio.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* StartParrafos */}
                    <div class="container Parrafos">
                      <div class="row RowLeft">
                        <div class="details col-sm-6 col-md-8">
                          <h3 className="title">
                            Manejo de redes sociales para destacar.
                          </h3>
                          <p>
                            Si buscas posicionar tu marca o empresa en las redes
                            sociales, aumentar la interacción en tu comunidad y
                            la captación de potenciales clientes, necesitas más
                            que textos sin sentido que se repiten una y otra vez
                            logrando únicamente que el receptor de los mimos se
                            aburra y opte por dar dejar de seguir a tu marca.
                            Recuerda que es mejor optar por calidad antes que
                            cantidad. Es un error común creer que una gran
                            cantidad de seguidores en Facebook, Instagram o
                            Twitter es sinónimo de ventas, pero NO. Es crucial
                            para tu negocio lograr que la mayor cantidad de tus
                            seguidores se conviertan en potenciales clientes
                            consumidores del producto o servicio que ofreces.
                            Sigue leyendo y descubre qué es un Community manager
                            y porqué lo necesitas.
                          </p>
                        </div>
                        <div class="col-sm-6 col-md-4"></div>
                      </div>
                      <div class="row RowRigh">
                        <div class="col-md-4"></div>
                        <div class="details col-md-8">
                          <h3 className="title">
                            ¿Qué es un Community manager?
                          </h3>
                          <p>
                            Podría creerse que defender la imagen de tu negocio
                            es trabajo fácil, pero no lo es, la gestión de una
                            marca en redes sociales exige ciertos conocimientos,
                            técnicas y habilidades, por ello micro, medianas y
                            grandes empresas cuentan con un profesional
                            encargado de construir, administrar y moderar las
                            redes sociales de su marca o empresa, este trabajo
                            lo delegan al: Community manager.
                          </p>
                          <p>
                            En breves palabras, el Community manager es un
                            profesional de marketing digital que se encarga de
                            construir y gestionar la comunidad online y la
                            identidad de tu marca o empresa, creando relaciones
                            estables con tus clientes y fans en las distintas
                            plataformas digitales ¡No dejes tus redes en manos
                            inexpertas!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="container Parrafos">
                      <div class="row RowLeft">
                        <div class="details col-sm-6 col-md-8">
                          <h3 className="title">
                            Ya entiendes que es, pero ¿Qué hace un Community
                            manager?
                          </h3>
                          <p>
                            Toda marca o empresa aspira lograr una perfecta
                            gestión de la comunicación online, un Community
                            manager es lo que necesitas, pero… ¿cuáles son sus
                            funciones?
                          </p>
                          <h4 className="titleh4">
                            Como Community managers te ofrecemos los siguientes
                            servicios:
                          </h4>
                          <ol>
                            <li>Diseño de estrategias</li>
                            <li>Gestión de comunidades</li>
                            <li>Gestión de crisis</li>
                            <li>Atención al cliente</li>
                            <li>
                              Evaluación y gestión de proyectos y procesos
                            </li>
                            <li>Herramientas 2.0</li>
                            <li>Manejo de copywriting</li>
                            <li>Analítica web, etc.</li>
                          </ol>
                        </div>
                        <div class="col-sm-6 col-md-4"></div>
                      </div>
                      <div class="row RowRigh">
                        <div class="col-sm-6 col-md-4"></div>
                        <div class="details col-sm-6 col-md-8">
                          <p>
                            Dentro del perfil del CM, no falta una gran dosis de
                            empatía que permiten ponerse en la piel de los
                            usuarios que interactúan esperando consumir el
                            contenido, la capacidad de comunicarse a través de
                          </p>
                          <p>
                            textos que van más allá de sólo redactar, es la
                            creatividad y el ingenio una parte de las
                            características necesarias para establecer buenas
                            relaciones digitales, solventar futuros problemas y
                            encontrar las soluciones a las necesidades para así
                            conectar con tu comunidad.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="container Parrafos">
                      <div class="row RowLeft">
                        <div class="details col-sm-6 col-md-8">
                          <h4 className="title">
                            ¿Qué necesita tu empresa, negocio o marca?
                          </h4>
                          <p>
                            Fijar el objetivo de tus redes es clave para lograr
                            el éxito y como parte de nuestro trabajo te ayudamos
                            a:
                          </p>
                          <ol>
                            <li>
                              Descubrir la plataforma indicada que se adapta al
                              producto o servicio que esperas ofrecer
                            </li>
                            <li>
                              Mantener actualizada tu marca o empresa con el fin
                              de innovar a tus seguidores en las distintas
                              plataformas digitales.
                            </li>
                            <li>
                              Desarrollar la estrategia adecuada para impulsar y
                              posicionar tu producto o servicio.
                            </li>
                            <li>
                              Automatizar el proceso de búsqueda y captación de
                              clientes.
                            </li>
                            <li>
                              Aliar estrategias en las diversas plataformas
                              (Twitter, Facebook, Instagram, etc.).
                            </li>
                            <li>
                              Lograr el mayor alcance de usuarios que puedan ser
                              tus potenciales clientes porque conocemos a tus
                              seguidores, interactuamos con ellos y sabemos que
                              buscan.
                            </li>
                          </ol>
                        </div>
                        <div class="col-sm-6 col-md-4"></div>
                      </div>
                      <div class="row RowRigh">
                        <div class="col-sm-6 col-md-4"></div>
                        <div class="details col-sm-6 col-md-8">
                          <h3 className="title">
                            Ser parte del crecimiento y desarrollo de tu marca o
                            negocio es nuestro objetivo
                          </h3>
                          <p>
                            Para lograr posicionar empresa estamos capacitados
                            para:
                          </p>
                          <ol>
                            <li>
                              <b>Crear contenido creativo y atractivo</b>{" "}
                              dedicado a tu cliente ideal para así satisfacer la
                              necesidad del mismo, tal contenido es adaptado a
                              la plataforma digital que se ajusta mejor a tu
                              marca, servicio o producto. Un copywriting para el
                              feed de Instagram, no es igual a uno para una
                              sección de tu blog. Recuerda que todos vamos a las
                              redes sociales a consumir contenido y es nuestro
                              deber crear textos persuasivos con la intención de
                              generar la acción que buscamos: generar ventas,
                              aumentar interacción, ganar suscriptores, etc.
                              Dentro de los tipos de contenido manejamos:
                              <li>
                                <b>Corporativo:</b> Es recomendable recordarle a
                                tus clientes quienes son, que hace, que ofrecen,
                                porque elegir tu producto o servicio. Generar
                                seguridad y confianza es un aspecto clave para
                                acercarse a tu comunidad.
                              </li>
                              <li>
                                <b>Comercial:</b> Este tipo de contenido nos
                                permite hacer ventas directas, ofrecer los
                                productos o servicios usando textos persuasivos
                                y llamativos que despierten interés en el
                                usuario al otro lado de la pantalla.
                              </li>
                              <li>
                                <b>Informativo:</b> No siempre podemos vender en
                                nuestras redes porque terminaríamos aburriendo a
                                nuestros seguidores. Para captar la atención de
                                nuestros clientes o prospectos es de gran ayuda
                                generar contenido con valor informativo. Las
                                guías, tutoriales, descripción de contenido,
                                tips, consejos y más son parte de esta sección.{" "}
                              </li>
                              <li>
                                <b>Informativo:</b> No siempre podemos vender en
                                nuestras redes porque terminaríamos aburriendo a
                                nuestros seguidores. Para captar la atención de
                                nuestros clientes o prospectos es de gran ayuda
                                generar contenido con valor informativo. Las
                                guías, tutoriales, descripción de contenido,
                                tips, consejos y más son parte de esta sección.{" "}
                              </li>
                              <li>
                                <b>Organizar tu calendario editorial</b> o de
                                publicaciones: el uso de esta herramienta
                                permite seguir el plan de contenido según las
                                líneas estratégicas previamente establecidas.
                                Cada marca debe comunicarse a través de sus
                                contenidos adaptados y personalizados para cada
                                red social.
                              </li>
                              <li>
                                <b>Monitorizar las publicaciones</b>, medir el
                                impacto y obtener información detallada sobre
                                qué tipo de publicaciones y contenido funcionan
                                mejor para generar interacciones. Analizar todos
                                los parámetros estratégicos son aspectos
                                fundamentales. Conocer el crecimiento de la
                                comunidad, el engagement, ROI, tráfico web
                                social, entre otros.
                              </li>
                              <li>
                                <b>Diseñar imágenes atractivas</b> en sintonía
                                con el contenido y la temática, además de
                                emplear diversos formatos de diseño (fotos,
                                vídeos, infografías, gráficos, etc.).{" "}
                              </li>
                              <li>
                                <b>Establecer relaciones</b> solidas con los
                                fans, clientes o prospectos de la marca o
                                empresa. Estamos preparados para comunicarnos
                                eficazmente y resolver toda inquietud que se
                                presente en la comunidad. Humanizar tu marca es
                                parte del proceso para hacer sentir a tus
                                seguidores únicos. El engagement tiene que ver
                                con emociones, despertarlas es nuestro trabajo y
                                compromiso. Detrás de un follow, hay una persona
                                con una necesidad a la que tú producto o
                                servicio responde y nosotros estamos para
                                establecer un diálogo bidireccional.
                              </li>
                              <li>
                                <b>Mantenernos en tendencia</b>, activos y
                                escuchando las novedades de tu nicho o sector.
                                Nos encargamos de filtrar información para estar
                                al día de la información relevante para nuestros
                                clientes.{" "}
                              </li>
                              <li>
                                <b>Manejar una crisis</b> de reputación online.
                                A pesar de ser una tarea complicada, no te
                                preocupes. Responder ante comentarios negativos
                                y encontrar soluciones eficaces que permitan
                                calmar al usuario es parte de nuestro trabajo.
                              </li>
                              <li>
                                <b>Crear campañas publicitarias</b> en las
                                diversas plataformas digitales.{" "}
                              </li>
                            </li>
                          </ol>
                          <p>
                            Todos tenemos presente lo que ha implicado el auge
                            de las redes sociales y entendemos que la publicidad
                            tradicional ha ido perdiendo terreno frente a los
                            medios digitales. Cada campaña publicitaria digital
                            debe ser personalizada según la red social a la que
                            va dirigida ya que un usuario si bien no busca en
                            Facebook lo que espera conseguir en Twitter o
                            Linkedin,
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="container Parrafos">
                      <div class="row RowLeft">
                        <div class="details col-sm-6 col-md-8">
                          <h3 className="title">
                            Dentro de los principales ejemplos de publicidad en
                            redes tenemos:
                          </h3>
                          <h4>Facebook Ads</h4>
                          <p>
                            Es importante elegir el objetivo publicitario
                            adecuado al crear una campaña. Facebook Ads nos
                            permite generar tráfico y captar potenciales
                            clientes, nos ofrece:
                          </p>
                          <ol>
                            <li>
                              Diversos tipos de campañas dirigidas al público
                              indicado según datos demográficos.
                            </li>
                            <li>
                              Anuncios: con esta herramienta se puede
                              seleccionar el objetivo, presupuesto, el
                              calendario y el contenido del anuncio.
                            </li>
                            <li>Publicaciones promocionadas</li>
                          </ol>
                        </div>
                        <div class="col-sm-6 col-md-4"></div>
                      </div>
                      <div class="row RowRigh">
                        <div class="col-sm-6 col-md-4"></div>
                        <div class="details col-sm-6 col-md-8">
                          <h4>YouTube advertising</h4>
                          <p>
                            Esta plataforma ofrece diversos formatos de anuncios
                            que permiten captar la atención de los usuarios y
                            convertirlos en potenciales clientes. Los
                            principales formatos son:
                          </p>
                          <ol>
                            <li>
                              <b>Anuncios de video Trueview:</b> Con este
                              formato sólo se hacen pagos cuando los usuarios
                              vean o interactúen con el video Anuncios bumper:
                              Estos son videos cortos con una duración máxima de
                              6 segundos cuyo objetivo es lograr un mayor
                              alcance en la notoriedad de la marca. Con este
                              formato, se paga el anuncio cada que el video se
                              muestre mil veces. Anuncios out-stream: Este
                              formato de anuncio se reproduce exclusivamente en
                              dispositivos móviles y tablets. Estos anuncios se
                              reproducen inicialmente en mute y solo el usuario
                              haciendo clic sobre el hará que se active el
                              sonido. El anunciante solo paga si el usuario
                              reproduce el video durante dos segundos mínimo.
                            </li>
                            <li>
                              <b>Anuncios bumper:</b> Estos son videos cortos
                              con una duración máxima de 6 segundos cuyo
                              objetivo es lograr un mayor alcance en la
                              notoriedad de la marca. Con este formato, se paga
                              el anuncio cada que el video se muestre mil veces.
                            </li>
                            <li>
                              <b>Anuncios out-stream:</b> Este formato de
                              anuncio se reproduce exclusivamente en
                              dispositivos móviles y tablets. Estos anuncios se
                              reproducen inicialmente en mute y solo el usuario
                              haciendo clic sobre el hará que se active el
                              sonido. El anunciante solo paga si el usuario
                              reproduce el video durante dos segundos mínimo.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div class="container Parrafos">
                      <div class="row RowLeft">
                        <div class="col-sm-6 col-md-8">
                          <h3 className="title">
                            Ser parte del crecimiento y desarrollo de tu marca o
                            negocio es nuestro objetivo
                          </h3>
                          <p>
                            Para lograr posicionar empresa estamos capacitados
                            para:
                          </p>
                          <b>Crear contenido creativo y atractivo</b> dedicado a
                          tu cliente ideal para así satisfacer la necesidad del
                          mismo, tal contenido es adaptado a la plataforma
                          digital que se ajusta mejor a tu marca, servicio o
                          producto. Un copywriting para el feed de Instagram, no
                          es igual a uno para una sección de tu blog. Recuerda
                          que todos vamos a las redes sociales a consumir
                          contenido y es nuestro deber crear textos persuasivos
                          con la intención de generar la acción que buscamos:
                          generar ventas, aumentar interacción, ganar
                          suscriptores, etc. Dentro de los tipos de contenido
                          manejamos:
                          <ol>
                            <li>
                              <b>Corporativo:</b> Es recomendable recordarle a
                              tus clientes quienes son, que hace, que ofrecen,
                              porque elegir tu producto o servicio. Generar
                              seguridad y confianza es un aspecto clave para
                              acercarse a tu comunidad.
                            </li>
                            <li>
                              <b>Comercial:</b> Este tipo de contenido nos
                              permite hacer ventas directas, ofrecer los
                              productos o servicios usando textos persuasivos y
                              llamativos que despierten interés en el usuario al
                              otro lado de la pantalla.
                            </li>
                            <li>
                              <b>Informativo:</b> No siempre podemos vender en
                              nuestras redes porque terminaríamos aburriendo a
                              nuestros seguidores. Para captar la atención de
                              nuestros clientes o prospectos es de gran ayuda
                              generar contenido con valor informativo. Las
                              guías, tutoriales, descripción de contenido, tips,
                              consejos y más son parte de esta sección.{" "}
                            </li>
                            <li>
                              <b>Informativo:</b> No siempre podemos vender en
                              nuestras redes porque terminaríamos aburriendo a
                              nuestros seguidores. Para captar la atención de
                              nuestros clientes o prospectos es de gran ayuda
                              generar contenido con valor informativo. Las
                              guías, tutoriales, descripción de contenido, tips,
                              consejos y más son parte de esta sección.{" "}
                            </li>

                            <li>
                              <b>Organizar tu calendario editorial</b> o de
                              publicaciones: el uso de esta herramienta permite
                              seguir el plan de contenido según las líneas
                              estratégicas previamente establecidas. Cada marca
                              debe comunicarse a través de sus contenidos
                              adaptados y personalizados para cada red social.
                            </li>
                            <li>
                              <b>Monitorizar las publicaciones</b>, medir el
                              impacto y obtener información detallada sobre qué
                              tipo de publicaciones y contenido funcionan mejor
                              para generar interacciones. Analizar todos los
                              parámetros estratégicos son aspectos
                              fundamentales. Conocer el crecimiento de la
                              comunidad, el engagement, ROI, tráfico web social,
                              entre otros.
                            </li>
                            <li>
                              <b>Diseñar imágenes atractivas</b> en sintonía con
                              el contenido y la temática, además de emplear
                              diversos formatos de diseño (fotos, vídeos,
                              infografías, gráficos, etc.).{" "}
                            </li>
                            <li>
                              <b>Establecer relaciones</b> solidas con los fans,
                              clientes o prospectos de la marca o empresa.
                              Estamos preparados para comunicarnos eficazmente y
                              resolver toda inquietud que se presente en la
                              comunidad. Humanizar tu marca es parte del proceso
                              para hacer sentir a tus seguidores únicos. El
                              engagement tiene que ver con emociones,
                              despertarlas es nuestro trabajo y compromiso.
                              Detrás de un follow, hay una persona con una
                              necesidad a la que tú producto o servicio responde
                              y nosotros estamos para establecer un diálogo
                              bidireccional.
                            </li>
                            <li>
                              <b>Mantenernos en tendencia</b>, activos y
                              escuchando las novedades de tu nicho o sector. Nos
                              encargamos de filtrar información para estar al
                              día de la información relevante para nuestros
                              clientes.{" "}
                            </li>
                            <li>
                              <b>Manejar una crisis</b> de reputación online. A
                              pesar de ser una tarea complicada, no te
                              preocupes. Responder ante comentarios negativos y
                              encontrar soluciones eficaces que permitan calmar
                              al usuario es parte de nuestro trabajo.
                            </li>
                            <li>
                              <b>Crear campañas publicitarias</b> en las
                              diversas plataformas digitales.{" "}
                            </li>
                          </ol>
                        </div>
                        <div class="col-sm-6 col-md-4"></div>
                      </div>
                      <div class="row RowRigh">
                        <div class="col-sm-6 col-md-4"></div>
                        <div class="col-sm-6 col-md-8">
                          <h3 className="title">
                            ¿Aún no sabes si contratar nuestro servicio de CM?
                            Te ayudamos…
                          </h3>
                          <p>
                            Tienes una marca o empresa que aspiras posicionar en
                            redes, buscas conectar con potenciales clientes y
                            establecer una comunicación bidireccional efectiva,
                            pero...
                          </p>
                          <ul>
                            <li>
                              Publicas a diario ofreciendo tus servicios o
                              productos, pero tus textos te aburren incluso a ti
                            </li>
                            <li>
                              Tienes miles de seguidores en las redes sociales,
                              pero no logras que interactúen y mucho menos que
                              compren tus productos o servicios
                            </li>
                            <li>
                              Tus campañas publicitarias sólo han reflejado
                              perdidas, no ganancias
                            </li>
                            <li>
                              No entiendes nada de retargeting, engagement,
                              copywriting, email marketing, ads, etc.
                            </li>
                            <li>
                              Agotaste todas tus ideas y no sabes que más hacer
                            </li>
                          </ul>
                          <p>
                            No te desesperes y delega el manejo de tus redes a
                            un profesional: Community manager. Deja en nuestras
                            manos expertas y nos encargaremos de representar la
                            voz de tu marca. Pero si luego de leer este artículo
                            no te decides por salvar tu empresa contratando un
                            CM, te invito a leer con calma nuevamente.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="container Parrafos"></div>

                    {/* End Parrafos */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-12 col-12">
                        <h2>Trabajos</h2>
                        Algunas de las cuentas bajo nuestra responsabilidad
                        <Instagram />
                      </div>
                    </div>
                    {/* Start Contact Page Area  */}
                    <div className="rn-contact-page ptb--120 bg_color--1">
                      <ContactTwo />
                    </div>
                    {/* End Contact Page Area  */}
                    {/* End Single Area */}
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-12 col-12">
                        <h2>El momento de ser parte de las redes sociales es hoy</h2>
                        Hay muchas personas en internet publicando en este momento, si quieres dar el siguiente paso en redes sociales con precisión, escríbenos
                        
                      </div>
                    </div>
                    {/* Start Contact Page Area  */}
                    <div className="rn-contact-page ptb--120 bg_color--1">
                      <Scrap/>
                    </div>
                    {/* End Contact Page Area  */}
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Page Wrapper */}
      </React.Fragment>
    );
  }
}
export default ServiceDetailsSM;

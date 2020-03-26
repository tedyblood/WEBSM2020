// @flow
import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "../../../public/assets/css/plugins.css";

const SectionWipes2Styled = styled.div`
  /*==================================================
 * Effect 2
 * ===============================================*/
  .effect2 {
    position: relative;
  }
  .effect2:before,
  .effect2:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
  .effect2:after {
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
  overflow: hidden;

  .col-sm-12.my-auto {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  #pinContainer .panel {
    height: 100vh;
    width: 100%;
    position: absolute;
    text-align: center;
  }

  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.blue {
    // background-color: #3883d8;
  }
  .panel.red {
    background-color: red;
  }
`;

class SectionWipes2 extends Component {
  createMarkup(html) {
    return { __html: html };
  }
  render() {
    return (
      <React.Fragment>
        <SectionWipes2Styled>
          <Controller>
            <Scene triggerHook="onLeave" duration="300%" pin>
              <Timeline
                wrapper={<div id="pinContainer" class="container-fluid" />}
              >
                <section className="panel">
                  <div class="col-sm-12 my-auto">
                    <div class="card card-block w-50 effect2">
                      <div class="card-body panel-normal">
                        <img
                          className="card-img-top"
                          src={this.props.dataHome[0].img}
                          alt={this.props.dataHome[0].img}
                        />
                        <h5 class="card-title">
                          {this.props.dataHome[0].titulo}
                        </h5>
                        <h6 class="card-subtitle mb-2 precioTXT">
                          {this.props.dataHome[0].subtitulo}
                        </h6>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: this.props.dataHome[0].parrafo
                          }}
                          class="card-text lista"
                        ></p>
                        <a href={this.props.dataHome[0].url} class="card-link">
                          {this.props.dataHome[0].url_texto}
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {this.props.data.map((item, i) => (
                  <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
                    <section className="panel">
                      <div>
                        <div class="col-sm-12 my-auto">
                          <div
                            class={
                              "card card-block w-50  effect2 offset-" +
                              item.offSet +
                              " mb-" +
                              item.offSet * 2
                            }
                          >
                            <div class={"card-body " + item.panelColor}>
                              <img
                                className="card-img-top"
                                src={item.img}
                                alt="Card image cap"
                              />
                              <h5 class="card-title">{item.titulo}</h5>
                              <h6 class="card-subtitle mb-2 precioTXT">
                                {item.subtitulo}
                              </h6>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item.parrafo
                                }}
                                class="card-text lista"
                              ></p>
                              <a href={item.url} class="card-link">
                                {item.url_texto}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Tween>
                ))}
              </Timeline>
            </Scene>
          </Controller>
        </SectionWipes2Styled>
      </React.Fragment>
    );
  }
}

export default SectionWipes2;

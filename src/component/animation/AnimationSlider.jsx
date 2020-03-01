import React, { Component } from "react";
import "./sliderAnimado.scss";

export class AnimationSlider extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="containerPop">
          <div class="error404page">
            <div class="newcharacter404">
              <div class="chair404"></div>
              <div class="leftshoe404"></div>
              <div class="rightshoe404"></div>
              <div class="legs404"></div>
              <div class="torso404">
                <div class="body404"></div>
                <div class="leftarm404"></div>
                <div class="rightarm404"></div>
                <div class="head404">
                  <div class="eyes404"></div>
                </div>
              </div>
              <div class="laptop404"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AnimationSlider;
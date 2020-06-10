import React, { Component, StrictMode } from "react";

import "../calculadora.css";
import { useParams } from "react-router-dom";

let allRanges, range, bubble, val;

function ObservaRangos(props) {
  allRanges = props;
  //allRanges = document.querySelectorAll(".range-wrap");

  allRanges.forEach((wrap) => {
    range = wrap.querySelector(".range");
    bubble = wrap.querySelector(".bubble");
  });
  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
  function setBubble(range, bubble) {
    val = range.value;
    let min = range.min;
    let max = range.max;
    let newVal = Number(((val - min) * 100) / (max - min));
    //console.log("Compo: " + val);
    bubble.innerHTML = val;
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${0.5 - newVal * 0.15}px))`;
    //console.log(newVal);
  }
}

const hero = (props) => (
  <div class={"range-wrap" + props.props.idName}>
    <label htmlFor="range">{props.props.titulo}</label>
    <input
      name="rango"
      id="rango"
      type="range"
      class="range"
      min={props.props.min}
      max={props.props.max}
      step="1"
      defaultValue="1"
      defaultChecked="true"
      // onChange={(e) => {
      //   this.handleChange(e);
      // }}
    />
    <output class="bubble"></output>
  </div>
);

export class SliderOne extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: 0 };
  }
  componentDidMount() {
    let x = document.querySelectorAll(`.range-wrap${this.props.idName}`);
    ObservaRangos(x);
    console.log(x);
  }
  componentDidUpdate() {}
  handleChange(e) {
    this.setState({ valor: val });
  }

  render() {
    return (
      <div>
        <hero props={this.props} />
      </div>
    );
  }
}

export default SliderOne;

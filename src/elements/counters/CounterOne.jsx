import React, { Component, Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class CounterOne extends Component {
  state = {
    didViewCountUp: false
  };
  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    let Data = [
      {
        countNum: 1,
        countTitle: "Mesa."
      },
      {
        countNum: 2,
        countTitle: "Sillas."
      },
      {
        countNum: 40,
        countTitle: "Minutos."
      },
      {
        countNum: 2,
        countTitle: "Café."
      }
    ];

    return (
      <Fragment>
        <div className="row">
          {Data.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-3 col-md-3 col-sm-6 col-12"
              key={index}
            >
              <h5 className="counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 100 }}
                  delayedCall
                >
                  <CountUp
                    end={this.state.didViewCountUp ? value.countNum : 0}
                  />
                </VisibilitySensor>
              </h5>
              <p className="description">{value.countTitle}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default CounterOne;
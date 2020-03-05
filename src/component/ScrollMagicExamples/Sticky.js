// @flow
import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

const StickyStyled = styled.div`
  .section {
    //height: 2vh;
  }

  .sticky {
    // background-color: red;
    width: 100%;

    & div {
      padding: 30px;
    }
  }

  .blue {
    // background-color: blue;
  }
`;

const Sticky = () => (
  <StickyStyled>
    <div className="section" />
    <Controller>
      <Scene duration={200} pin={true} enabled={true}>
        <div className="sticky">
          <img
            className="w-50 centrarImagen"
            src="./assets/images/service/facebook2.gif"
            alt="Service Images"
          />
        </div>
      </Scene>
      <Scene duration={200} pin={{ pushFollowers: false }}>
        <div className="sticky">
          <img
            className="w-50 centrarImagen"
            src="./assets/images/service/facebook.gif"
            alt="Service Images"
          />
        </div>
      </Scene>
      <Scene duration={200} pin={true} offset={100}>
        <div className="sticky blue">
          <img
            className="w-50 centrarImagen"
            src="./assets/images/service/extraLarge.png"
            alt="Service Images"
          />
        </div>
      </Scene>
    </Controller>
    <div className="section" />
  </StickyStyled>
);

export default Sticky;

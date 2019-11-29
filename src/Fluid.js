import React, { useEffect, useRef } from "react";
import ImageDisplacement from "./lib";
import styled from "styled-components";

const FluidContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Fluid = ({ head }) => {
  const fluid = useRef(null);

  useEffect(() => {
    const w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const images =
      w > h
        ? {
            jan: require("./assets/jambon_h.jpg"),
            peter: require("./assets/peter_h.jpg"),
            bart: require("./assets/bart_h.jpg"),
            theo: require("./assets/theo_h.jpg")
          }
        : {
            jan: require("./assets/jambon_v.jpg"),
            peter: require("./assets/peter_v.jpg"),
            bart: require("./assets/bart_v.jpg"),
            theo: require("./assets/theo_v.jpg")
          };
    const go = () => {
      fluid.current.innerHTML = "";
      ImageDisplacement({
        element: fluid.current,
        imageSrc: images[head]
      });
    };

    go();
  });

  return <FluidContainer ref={fluid} />;
};

export default Fluid;

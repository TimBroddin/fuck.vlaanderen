import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ImageDisplacement from "./lib";

const FluidContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
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
        ? [
            require("./assets/jambon_h.jpg"),
            require("./assets/peter_h.jpg"),
            require("./assets/bart_h.jpg"),
            require("./assets/theo_h.jpg")
          ]
        : [
            require("./assets/jambon_v.jpg"),
            require("./assets/peter_v.jpg"),
            require("./assets/bart_v.jpg"),
            require("./assets/theo_v.jpg")
          ];
    const go = () => {
      fluid.current.innerHTML = "";
      ImageDisplacement({
        element: fluid.current,
        imageSrc: images[Math.floor(Math.random() * images.length)]
      });
    };

    go();
  });

  return <FluidContainer ref={fluid} />;
}

export default App;

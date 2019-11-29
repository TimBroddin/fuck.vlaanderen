import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import ScrollLock from "react-scrolllock";
import Navigation from "./Navigation";
import Fluid from "./Fluid";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const FluidContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [head, setHead] = useState("jan");

  return (
    <React.Fragment>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Navigation head={head} setHead={setHead} />
        <ScrollLock />
        <Fluid head={head} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

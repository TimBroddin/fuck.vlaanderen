import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import ScrollLock from "react-scrolllock";
import Navigation from "./Navigation";
import About from "./About";
import Fluid from "./Fluid";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  const [head, setHead] = useState("ludo");
  const [aboutVisible, setAboutVisible] = useState(false);

  return (
    <React.Fragment>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Navigation
          head={head}
          setHead={setHead}
          showAbout={() => setAboutVisible(true)}
        />
        <About visible={aboutVisible} close={() => setAboutVisible(false)} />
        <ScrollLock />
        <Fluid head={head} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

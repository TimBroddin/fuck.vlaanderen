import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import {
  Window,
  WindowContent,
  WindowHeader,
  Tooltip,
  Button,
  Fieldset
} from "react95";

const NavContainer = styled.div`
  z-index: 555;
  position: absolute;
  top: 50px;
  left: 50px;
`;

const Buttons = styled.div`
  margin-top: 20px;
`;

const Navigation = ({ head, setHead }) => {
  const audio = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const playPause = () => {
    console.log(audio);
    if (!isPlaying) {
      audio.current.play();
      setPlaying(true);
    } else {
      audio.current.pause();
      setPlaying(false);
    }
  };

  return (
    <NavContainer>
      <audio src="sy.mp3" ref={audio} loop="loop" />
      <Draggable handle=".handle">
        <Window>
          <WindowHeader className="handle">
            <span>Fuck Vlaanderen</span>
          </WindowHeader>
          <WindowContent>
            <Fieldset label="Lelijke hoofden">
              <Tooltip text="Jan Jambon">
                <Button
                  square={true}
                  size={"lg"}
                  active={head === "jan"}
                  onClick={e => setHead("jan")}
                >
                  <img
                    src={require("./assets/jambon_icon.png")}
                    alt="Jan Jambon"
                  />
                </Button>
              </Tooltip>{" "}
              <Tooltip text="Bart De Wever">
                <Button
                  square={true}
                  size={"lg"}
                  active={head === "bart"}
                  onClick={e => setHead("bart")}
                >
                  <img
                    src={require("./assets/bart_icon.png")}
                    alt="Bart De Wever"
                  />
                </Button>
              </Tooltip>{" "}
              <Tooltip text="Peter De Roover">
                <Button
                  square={true}
                  size={"lg"}
                  active={head === "peter"}
                  onClick={e => setHead("peter")}
                >
                  <img
                    src={require("./assets/peter_icon.png")}
                    alt="Peter De Roover"
                  />
                </Button>
              </Tooltip>{" "}
              <Tooltip text="Theo Francken">
                <Button
                  square={true}
                  size={"lg"}
                  active={head === "theo"}
                  onClick={e => setHead("theo")}
                >
                  <img
                    src={require("./assets/theo_icon.png")}
                    alt="Theo Francken"
                  />
                </Button>
              </Tooltip>
            </Fieldset>
            <Buttons>
              <Button onClick={() => playPause()}>
                {isPlaying
                  ? "Pauzeer toepasselijk liedje"
                  : "Speel een toepasselijk liedje"}
              </Button>
            </Buttons>
          </WindowContent>
        </Window>
      </Draggable>
    </NavContainer>
  );
};

export default Navigation;

import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeadCell,
  TableDataCell
} from "react95";

const AboutContainer = styled.div`
  z-index: 555;
  position: absolute;
  top: 10vh;
  left: 10vw;
  max-width: 80vw;
`;

const A = styled.a`
  color: blue;
  text-decoration: underline;
`;

const Buttons = styled.div`
  margin-top: 20px;
`;

const Line = styled.p`
  margin-bottom: 20px;
  margin-top: ${props => (props.top ? props.top : "0px")};
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const About = ({ visible, close }) => {
  return visible ? (
    <AboutContainer>
      <Draggable handle=".handle">
        <Window>
          <WindowHeader
            className="handle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span>Over</span>
            <Button
              style={{ marginRight: "-6px", marginTop: "1px" }}
              size={"sm"}
              square
              onClick={() => close()}
            >
              <span
                style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
              >
                x
              </span>
            </Button>
          </WindowHeader>

          <WindowContent>
            <Line>
              Fuck.vlaanderen, een domme domeinnaam met een geinigheidje op.
            </Line>
            <Line>
              <Strong>Credits</Strong>
            </Line>
            <Table>
              <TableHead>
                <TableRow head>
                  <TableHeadCell>Wat?</TableHeadCell>
                  <TableHeadCell>Wie?</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableDataCell style={{ lineHeight: 1 }}>
                    Concept &amp; uitwerking
                  </TableDataCell>
                  <TableDataCell>
                    <A
                      href="https://broddin.be"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Tim Broddin
                    </A>
                  </TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell>Muziek</TableDataCell>
                  <TableDataCell style={{ lineHeight: 1 }}>
                    Sonic Youth - Youth against fascism
                  </TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell style={{ lineHeight: 1 }}>
                    WebGL effect
                  </TableDataCell>
                  <TableDataCell>
                    <A
                      href="https://github.com/Marcel-G/webgl-fluid-displacement"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Marcel-G
                    </A>
                  </TableDataCell>
                </TableRow>
              </TableBody>
            </Table>
            <Line top="20px">
              <Strong>Disclaimer</Strong>
            </Line>
            <Line>
              Alle eventuele meningen die uit dit werk kunnen afgeleid worden
              zijn enkel en alleen van de maker.{" "}
              <span style={{ backgroundColor: "black" }}>Fuck de N-VA.</span>
            </Line>
            <Buttons>
              <A
                href="https://github.com/timbroddin/fuck.vlaanderen"
                rel="noopener noreferrer"
                target="_blank"
              >
                Broncode
              </A>
            </Buttons>
          </WindowContent>
        </Window>
      </Draggable>
    </AboutContainer>
  ) : null;
};

export default About;

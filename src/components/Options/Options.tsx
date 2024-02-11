import React from "react";
import { VscTextSize } from "react-icons/vsc";
import { BiSun } from "react-icons/bi";
import styled from "styled-components";

const Container = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: end;

  .font-size {
    display: flex;
    align-items: bottom;
  }
`;

const Options = () => {
  return (
    <Container>
      <div className="font-size">
        <VscTextSize style={{ fontSize: "0.75em" }} />
        <VscTextSize style={{ fontSize: "1.25em" }} />
      </div>
      <div>
        <BiSun />
      </div>
    </Container>
  );
};

export default Options;

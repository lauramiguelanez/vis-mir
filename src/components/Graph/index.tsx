import React from "react";
import styled from "styled-components";
import Rings from "./Rings";
import TableContents from "./TableContents";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-aspect-ratio: 7/5) {
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const RingsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  @media (max-aspect-ratio: 7/5) {
    margin-top: 80vh;
    /* height: 200%;
    overflow-y: scroll; */
  }
`;

const Graph: React.FC = () => {
  return (
    <Wrapper>
      <RingsWrapper>
        <Rings />
      </RingsWrapper>
      <TableContents />
    </Wrapper>
  );
};

export default Graph;

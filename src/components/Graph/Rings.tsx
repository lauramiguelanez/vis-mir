import React from 'react';
import styled from 'styled-components';
import { Circles } from './Circles';
import { Islands } from './Islands';
import { LightHouse } from './LightHouse';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const RingWrapper = styled.div`
  position: relative;
  width: 100vmin;
  height: 100vmin;
`;

const AbsoluteSquare = styled.div`
  position: absolute;
  top: 0;
  width: 100vmin;
  height: 100vmin;
  pointer-events: none;
`;
const Absolute = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

const Rings: React.FC = () => {
  return (
    <Wrapper>
      <Absolute>
        <LightHouse />
      </Absolute>
      <RingWrapper>
        <AbsoluteSquare>
          <Circles />
        </AbsoluteSquare>
        <AbsoluteSquare>
          <Islands />
        </AbsoluteSquare>
      </RingWrapper>
    </Wrapper>
  );
};

export default Rings;

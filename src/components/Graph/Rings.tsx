import React from 'react';
import styled from 'styled-components';
import { Circles } from './Circles';
import { Islands } from './Islands';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Absolute = styled.div`
  position: absolute;
  top: 0;
  width: 100vmin;
  height: 100vmin;
  pointer-events: none;
`;

const Rings: React.FC = () => {
  return (
    <Wrapper>
      <Absolute>
        <Circles />
      </Absolute>
      <Absolute>
        <Islands />
      </Absolute>
    </Wrapper>
  );
};

export default Rings;

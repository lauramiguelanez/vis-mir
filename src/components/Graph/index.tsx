import React from 'react';
import styled from 'styled-components';
import Rings from './Rings';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Graph: React.FC = () => {
  return (
    <Wrapper>
      <Rings />
    </Wrapper>
  );
};

export default Graph;

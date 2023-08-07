import React from 'react';
import styled from 'styled-components';
import Rings from './Rings';
import TableContents from './TableContents';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Graph: React.FC = () => {
  return (
    <Wrapper>
      <Rings />
      <TableContents />
    </Wrapper>
  );
};

export default Graph;

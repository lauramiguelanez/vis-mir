import React from 'react';
import styled from 'styled-components';

import Graph from './components/Graph';

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

function App() {
  return (
    <AppStyled>
      <Graph />
      <header className="App-header">VIS-MIR</header>
    </AppStyled>
  );
}

export default App;

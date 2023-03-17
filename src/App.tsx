import React from 'react';
import {Header} from './components/Header';
import {StockTable} from './components/StockTable';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Roboto Light", sans-serif;
  overflow: hidden;
`

const MainContent = styled.div`
  height: 100%;
  width: 50%;
  margin: auto;

  @media(max-width: 1250px) {
    width: 100%;
  }
`;

function App() {
  return (
    <AppWrapper>
      <MainContent>
      <Header/>
      <StockTable/>
      </MainContent>
    </AppWrapper>
  );
}

export default App;

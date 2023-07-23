import React from 'react';
import styled from 'styled-components';

interface IProps {
  children?: React.ReactNode;
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;
  min-width: 500px;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    min-width: 100%;
    padding: 0 5px;
  }
  padding: 0 50px;
  overflow: scroll;

  /* style scrollbar */
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000;
    border: 2px solid #fff;
  }
`;

export const PageLayout: React.FC<IProps> = ({ children }) => {
  return (
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  );
};

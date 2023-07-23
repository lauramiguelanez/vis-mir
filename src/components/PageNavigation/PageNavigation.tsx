import React from 'react';
import styled from 'styled-components';

interface IPageNavigationProps {
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const PageNavigation: React.FC<IPageNavigationProps> = ({ children }) => {
  return <Wrapper>{/* <ContentWrapper>{children}</ContentWrapper> */}</Wrapper>;
};

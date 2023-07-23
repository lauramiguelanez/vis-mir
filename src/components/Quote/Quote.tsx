import React from 'react';
import styled from 'styled-components';

interface IQuoteProps {
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  margin: 60px;
`;

const Text = styled.div`
  font-family: ${(props) => props.theme.font.family.playfair} italic;
  font-weight: bold;
  font-size: 20px;
`;

export const Quote: React.FC<IQuoteProps> = ({ children }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

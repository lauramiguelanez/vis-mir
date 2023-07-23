import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 18px;
  padding: 20px 0;
  max-width: 1000px;
  align-self: flex-end;
`;
export const BodyText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Body>{children}</Body>;
};

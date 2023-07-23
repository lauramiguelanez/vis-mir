import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  marging-top: 50px;
  border: black;
`;

export const FootNoteSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

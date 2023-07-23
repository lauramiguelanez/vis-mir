import React from 'react';
import styled from 'styled-components';

interface ISubtitleProps {
  children?: React.ReactNode;
}

const SubtitleStyled = styled.div`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 48px;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }

  margin-bottom: 40px;
`;
export const Subtitle: React.FC<ISubtitleProps> = ({ children }) => {
  return <SubtitleStyled>{children}</SubtitleStyled>;
};

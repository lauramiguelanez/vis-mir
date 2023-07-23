import React from 'react';
import styled from 'styled-components';

interface ITitleProps {
  author?: string;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  margin: 60px 0;
`;

const TitleStyled = styled.div`
  font-family: ${(props) => props.theme.font.family.playfair};
  font-weight: bold;
  font-size: 72px;
  @media only screen and (max-width: 600px) {
    font-size: 48px;
  }
`;

const AuthorStyled = styled.div`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 22px;
`;

export const Title: React.FC<ITitleProps> = ({ children, author }) => {
  return (
    <Wrapper>
      <TitleStyled>{children}</TitleStyled>
      {author ? <AuthorStyled>{author}</AuthorStyled> : null}
    </Wrapper>
  );
};

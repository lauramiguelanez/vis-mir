import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a``;

export const Link: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => {
  return <LinkStyled {...props}>{children}</LinkStyled>;
};

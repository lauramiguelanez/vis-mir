import React from 'react';
import styled from 'styled-components';

interface IFrameProps {
  src: string;
  title?: string;
  [key: string]: any;
}

const IframeStyled = styled.iframe`
  margin: 50px;
  /* width: 100%;
  height: auto; */
`;
export const IframeWrapper: React.FC<IFrameProps> = ({ src, title, ...props }) => {
  return <IframeStyled src={src} title={title} {...props} />;
};

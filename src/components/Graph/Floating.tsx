import React from 'react';
import styled, { keyframes } from 'styled-components';

const MIN = 0;
const MAX = 10;

interface IFloatingProps {
  min?: number;
  max?: number;
  children: React.ReactNode;
}

interface IFloatingAProps {
  min: number;
  max: number;
}

const randomPx = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);

const randomTransform = (min: number, max: number) =>
  `{ transform: translate(${randomPx(min, max)}px,  ${randomPx(min, max)}px); }`;

const floatingAnimation = (min: number, max: number) => keyframes`
  from ${randomTransform(min, max)}
  10%  ${randomTransform(min, max)}
  20%  ${randomTransform(min, max)}
  30%  ${randomTransform(min, max)}
  40%  ${randomTransform(min, max)}
  50%  ${randomTransform(min, max)}
  60%  ${randomTransform(min, max)}
  70%  ${randomTransform(min, max)}
  80%  ${randomTransform(min, max)}
  90%  ${randomTransform(min, max)}
  to   ${randomTransform(min, max)}
`;

const FloatingAnimated = styled.div<IFloatingAProps>`
  animation-name: ${({ min, max }) => floatingAnimation(min, max)};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
`;

export const Floating: React.FC<IFloatingProps> = ({ children, max = MAX, min = MIN }) => {
  return (
    <FloatingAnimated max={max} min={min}>
      {children}
    </FloatingAnimated>
  );
};

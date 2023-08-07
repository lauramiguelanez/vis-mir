import styled from 'styled-components';
import { TooltipPosition } from './tooltip.types';

export const Container = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
`;

export const Tooltip = styled.div<{
  coords: { x: number; y: number };
  position: TooltipPosition;
  transform?: string;
  active: boolean;
}>`
  height: min-content;
  width: min-content;

  padding: 0px 8px;

  box-sizing: border-box;
  background-color: white;
  color: black;
  border-radius: 2px;
  border: 1px solid black;

  top: ${({ coords }) => `${coords.y}px`};
  left: ${({ coords }) => `${coords.x}px`};
  position: fixed;

  transition: 150ms opacity;
  z-index: 9999;

  opacity: ${({ active }) => (active ? 1 : 0)};
  ${({ active }) => (!active ? 'pointer-events: none;' : '')};
  ${({ transform }) => (transform ? `transform: ${transform};` : '')};
`;

export const ChildrenWrapper = styled.div`
  width: max-content;
  height: max-content;
`;

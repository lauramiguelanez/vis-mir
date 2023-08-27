import React, { useState } from 'react';
import styled from 'styled-components';
import { IMAGES } from './images';

const Wrapper = styled.div<{ hover: boolean }>`
  height: 100%;
  width: 100%;
  padding: 10px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background: white;

  -webkit-transition: 1s -webkit-filter linear;
  -moz-transition: 1s -moz-filter linear;
  -moz-transition: 1s filter linear;
  -ms-transition: 1s -ms-filter linear;
  -o-transition: 1s -o-filter linear;
  transition: 1s filter linear, 1s -webkit-filter linear;
  filter: invert(${({ hover }) => (hover ? 100 : 0)});
`;

const Position = styled.div`
  position: absolute;
  height: auto;
  width: 25vmin;
  right: 30%;
  bottom: 20px;
`;

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  pointer-events: all;
`;

const HoverWrapper = styled.div<{ hover: boolean }>``;

export const LightHouse: React.FC = () => {
  const c = IMAGES.other.lightHouse;
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  const onClick = () => {
    if (c.path)
      /*  window.open(c.path, '_blank', 'noreferrer'); //  */
      window.location.href = c.path;
  };

  return (
    <Wrapper hover={hover}>
      <Position>
        <HoverWrapper hover={hover}>
          <Svg
            id={c.id}
            data-name={c.name}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={c.viewBox}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          >
            <image
              id={`${c.id}-img`}
              width={c.width}
              height={c.height}
              transform={c.transform}
              xlinkHref={c[0].image}
            />
          </Svg>
        </HoverWrapper>
      </Position>
    </Wrapper>
  );
};

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMAGES, ISvgImage } from './images';
import { Floating } from './Floating';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: scale(0.9);
`;

const Border = styled.div`
  height: 95vmin;
  width: 95vmin;
  position: relative;
`;

const Position = styled.div<{ left: number; top: number; size: number }>`
  position: absolute;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  transform: translate(-70%, -70%);
`;

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  pointer-events: all;
`;

const getRadius = () => {
  const { innerHeight, innerWidth } = window;
  const d = Math.min(...[innerHeight, innerWidth]);
  const r = d / 2;

  return r;
};

const getPosition = (radius: number, numNodes: number, index: number) => {
  const n = 5;
  const random = Math.round(Math.random() * (n - 1));
  const total = numNodes * n;
  const i = index * n + random;

  const width = radius * 2;
  const angle = (i / (total / 2)) * Math.PI;
  const left = radius * Math.cos(angle) + width / 2;
  const top = radius * Math.sin(angle) + width / 2;

  return { left, top };
};

const Island: React.FC<{ data: ISvgImage; i: number }> = ({ data: c, i }) => {
  const [hover, setHover] = useState<0 | 1>(0);
  const [pos, setPos] = useState<{ left: number; top: number; size: number }>();

  const setStyles = () => {
    const radius = getRadius();
    const size = radius * 0.4;

    const { left, top } = getPosition(radius, 5, i);
    setPos({ left, top, size });
  };

  useEffect(() => {
    setStyles();
    window.addEventListener('resize', setStyles);
    return () => window.removeEventListener('resize', setStyles);
  }, []);

  const onMouseEnter = () => {
    setHover(1);
  };
  const onMouseLeave = () => {
    setHover(0);
  };

  const onClick = () => {};

  return pos ? (
    <Position key={c.id} left={pos.left} top={pos.top} size={pos.size}>
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
          xlinkHref={c[hover]?.image}
        />
      </Svg>
    </Position>
  ) : null;
};

export const Islands: React.FC = () => {
  return (
    <Wrapper>
      <Border>
        {Object.keys(IMAGES.islands).map((id, i) => {
          const c = IMAGES.islands[id];

          return (
            <Floating key={id} min={-2} max={2}>
              <Island data={c} i={i} />
            </Floating>
          );
        })}
      </Border>
    </Wrapper>
  );
};

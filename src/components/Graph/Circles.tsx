import React, { useState } from 'react';
import styled from 'styled-components';

import { IMAGES, ISvgImage } from './images';
import { Floating } from './Floating';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px;
`;

const Svg = styled.svg`
  pointer-events: all;
  width: 100%;
  height: 100%;
`;

const Circle: React.FC<{ data: ISvgImage }> = ({ data: c }) => {
  const [hover, setHover] = useState<0 | 1>(0);

  const onMouseEnter = () => {
    setHover(1);
  };
  const onMouseLeave = () => {
    setHover(0);
  };

  const onClick = () => {
    if (c.link) window.open(c.link, '_blank', 'noreferrer');
    if (c.path) window.location.href = c.path;
  };

  return (
    <image
      key={c.id}
      id={c.id}
      data-name={c.name}
      width={c.width}
      height={c.height}
      transform={c.transform}
      xlinkHref={c[hover]?.image}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    />
  );
};

export const Circles: React.FC = () => {
  return (
    <Floating min={-4} max={4}>
      <Wrapper>
        <Svg
          id="rings"
          data-name="Access/Invisibiluty"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 454.08 464.29"
        >
          {Object.keys(IMAGES.circles)
            .reverse()
            .map((id) => {
              const c = IMAGES.circles[id];
              return <Circle key={id} data={c} />;
            })}
        </Svg>
      </Wrapper>
    </Floating>
  );
};

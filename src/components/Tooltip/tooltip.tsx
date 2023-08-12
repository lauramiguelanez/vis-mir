import React, { useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { TooltipProps, TooltipPosition, ArrowAlignment } from './tooltip.types';
import * as S from './tooltip.styles';

let hoverTimeoutId: NodeJS.Timeout;
const TIMEOUT_DURATION_MS = 500;

function calculatePosition(rect: DOMRect): TooltipPosition {
  const center = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
  if (center.x < window.innerWidth / 2) {
    return 'right';
  }
  if (center.x > window.innerWidth / 2) {
    return 'left';
  }
  if (center.y < window.innerHeight / 2) {
    return 'bottom';
  }
  if (center.y < window.innerHeight / 2) {
    return 'top';
  }

  return 'top';
}

function getCoords(position: TooltipPosition, rect?: DOMRect) {
  if (!rect) return { x: 0, y: 0 };
  switch (position) {
    case 'top':
      return { x: rect.x + rect.width / 2, y: rect.y };
    case 'right':
      return { x: rect.x + rect.width, y: rect.y + rect.height / 2 };
    case 'left':
      return { x: rect.x, y: rect.y + rect.height / 2 };
    case 'bottom':
      return { x: rect.x + rect.width / 2, y: rect.y + rect.height };
    default:
      return { x: 0, y: 0 };
  }
}

/**
 * ***Important**: This component uses portals. If you haven't created a root level container this component won't render! Create an empty div element with the id `tooltip-root`. And place it at the top of your app.
 *
 * @param param0.content The content you want to be shown on tooltip
 * @param param0.position Positioning of the tooltip. If set to 'auto', this component will try to calculate the best position for the tooltip to prevent clipping with the edges of the browser.
 * @returns
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'auto',
  children,
  delay = TIMEOUT_DURATION_MS,
  transform,
}) => {
  const rootElement = document.getElementById('tooltip-root');
  const childrenWrapperRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const calculatedPosition = useMemo(() => {
    if (!childrenWrapperRef.current || position !== 'auto') return position;
    return calculatePosition(childrenWrapperRef.current?.getBoundingClientRect());
  }, [position, childrenWrapperRef.current]);

  const coords = useMemo(
    () => getCoords(calculatedPosition, childrenWrapperRef.current?.getBoundingClientRect()),
    [childrenWrapperRef.current, childrenWrapperRef.current?.getBoundingClientRect()],
  );

  function handleMouseEnter() {
    if (hoverTimeoutId !== undefined) {
      clearTimeout(hoverTimeoutId);
    }
    hoverTimeoutId = setTimeout(() => {
      setShowTooltip(true);
    }, delay);
  }

  function handleMouseLeave() {
    if (hoverTimeoutId !== undefined) {
      clearTimeout(hoverTimeoutId);
    }

    setShowTooltip(false);
  }

  function renderPortal(value: JSX.Element) {
    if (!rootElement) return null;
    return ReactDOM.createPortal(value, rootElement);
  }

  return (
    <S.Container>
      {renderPortal(
        <S.Tooltip
          coords={coords}
          position={calculatedPosition}
          active={showTooltip}
          transform={transform}
        >
          {content}
        </S.Tooltip>,
      )}
      <S.ChildrenWrapper
        ref={childrenWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </S.ChildrenWrapper>
    </S.Container>
  );
};

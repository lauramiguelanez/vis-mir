import React, { ReactElement } from 'react';

export type TooltipPosition = 'auto' | 'left' | 'right' | 'top' | 'bottom';
export type ArrowAlignment = 'start' | 'center' | 'end';

export type TooltipProps = {
  content: React.ReactNode;
  position: TooltipPosition;
  delay?: number;
  children?: ReactElement;
  transform?: string;
};

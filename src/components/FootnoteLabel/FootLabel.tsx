import React from 'react';
import styled from 'styled-components';
import { Link } from '../Link';

interface IFootLabelProps {
  id: string;
}

const Label = styled.span`
  font-family: ${props => props.theme.font.family.mulish};
  font-size: 8px;
  vertical-align: super;
`;

const LabelLink = styled(Link)``;

// https://codepen.io/SitePoint/pen/QbMgvY
export const FootLabel: React.FC<IFootLabelProps> = ({ id }) => {
  return (
    <Label>
      <LabelLink href={`#${id}`} aria-describedby={`#${id}-label`} id={`#${id}-ref`}>
        {id}
      </LabelLink>
    </Label>
  );
};

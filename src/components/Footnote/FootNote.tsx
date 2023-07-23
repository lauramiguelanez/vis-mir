import React from 'react';
import styled from 'styled-components';
import { Link } from '../Link';

interface IFootNoteProps {
  id: string;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 10px;
  margin-right: 10px;
`;

const Text = styled.span`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 12px;
`;

const LinkBack = styled(Link)`
  padding-left: 10px;
`;

export const FootNote: React.FC<IFootNoteProps> = ({ id, children }) => {
  return (
    <Wrapper>
      <Label>{id}</Label>
      <Text>
        {children}
        <LinkBack href={`#${id}-ref`} aria-label="Back to content">
          ↩
        </LinkBack>
      </Text>
    </Wrapper>
  );
};

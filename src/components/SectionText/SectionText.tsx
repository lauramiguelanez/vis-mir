import React from 'react';
import styled from 'styled-components';

interface ISectionTextProps {
  tag?: string;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  padding-left: 100px;
`;

const Tag = styled.span`
  padding-right: 20px;
`;
const Section = styled.span``;

export const SectionText: React.FC<ISectionTextProps> = ({ tag, children }) => {
  return (
    <Wrapper>
      {tag ? <Tag>{tag}</Tag> : null}
      <Section>{children}</Section>
    </Wrapper>
  );
};

import React from 'react';
import styled from 'styled-components';
import { useTypeWritingAnimation } from './useTypeWritingAnimation';

interface INoteProps {
  text: string;
}

const lineHeight = 25;

const Wrapper = styled.div`
  margin: 60px 100px;
  background-color: ${({ theme }) => theme.color.note};
  transform: skew(-5deg, 0);

  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1);

  padding: ${lineHeight}px;
`;

const Background = styled.div`
  padding: ${lineHeight}px;
  background-image: repeating-linear-gradient(
    ${({ theme }) => theme.color.note} 0px,
    ${({ theme }) => theme.color.note} ${lineHeight}px,
    grey ${lineHeight + 1}px
  );
`;

const Text = styled.div`
  whitespace: pre;
  position: relative;
  font-family: ${(props) => props.theme.font.family.fira};
  font-size: 20px;
  line-height: ${lineHeight + 1}px;
`;

const Placeholder = styled.div`
  opacity: 0;
`;

const TypedText = styled.div`
  position: absolute;
  top: 0;
`;

const Paragraph = styled.div`
  margin-bottom: ${lineHeight + 2}px;
`;

export const Note: React.FC<INoteProps> = ({ text }) => {
  const animatedText = useTypeWritingAnimation(text);

  return (
    <Wrapper>
      <Background>
        <Text>
          <Placeholder>
            {text.split('/b').map((p) => (
              // eslint-disable-next-line react/jsx-key
              <Paragraph>{p}</Paragraph>
            ))}
          </Placeholder>
          <TypedText>
            {animatedText.split('/b').map((p) => (
              // eslint-disable-next-line react/jsx-key
              <Paragraph>{p}</Paragraph>
            ))}
          </TypedText>
        </Text>
      </Background>
    </Wrapper>
  );
};

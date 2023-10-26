import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IMAGES } from './images';

const Absolute = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

const NavContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 16px;
`;

const Side = styled.div`
  height: 100%;
  margin: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;

  @media (max-aspect-ratio: 7/5) {
    height: 100vh;
    width: 100%;
    margin: 20px;
  }
`;

const LeftSide = styled.div`
  pointer-events: all;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 40px; */
`;

const RightSide = styled.div`
  @media (min-aspect-ratio: 7/5) {
    width: calc(calc(50vw - 50vmin) - 10px);
  }
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const AbstractWrapper = styled.div`
  height: auto;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: all;
  padding-right: 10px;
`;

/////////////

const Paragraph = styled.p`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 12px;
`;

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-weight: bold;
  font-size: 56px;
  margin-bottom: 10px;
  margin-block-start: -25px;

  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 42px;
  }
  @media only screen and (max-height: 500px) {
    font-size: 25px;
  }
  @media only screen and (max-height: 700px) {
    font-size: 34px;
  }
  @media only screen and (max-height: 900px) {
    font-size: 42px;
  }

  @media (max-aspect-ratio: 7/5) {
    font-size: 30px;
  }
`;
const H2 = styled.h2`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 22px;
  margin: 0;
  margin-bottom: 20px;
  @media (max-aspect-ratio: 7/5) {
    font-size: 16px;
  }
`;
const H3 = styled.h3`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 16px;
  margin: 0;
  margin-bottom: 20px;
`;

const NavWrapper = styled.div<{ height: number }>`
  @media (min-aspect-ratio: 7/5) {
    width: calc(calc(50vw - 50vmin) - 10px);
  }
  /* height: ${({ height }) => height + 70}px; */
`;

const NavEl = styled.div`
  pointer-events: all;
  margin-bottom: 20px;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 1200px) {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1550px) {
    margin-bottom: 12px;
  }

  @media only screen and (max-height: 500px) {
    margin-bottom: 8px;
  }
  @media only screen and (max-height: 700px) {
    font-size: 10px;
  }
  @media only screen and (max-height: 900px) {
    margin-bottom: 12px;
  }
`;

const NavElI = styled.div`
  margin-bottom: 12px;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    margin-bottom: 5px;
  }
  @media only screen and (max-width: 1450px) {
    margin-bottom: 8px;
  }
  @media only screen and (max-height: 500px) {
    margin-bottom: 5px;
  }
  @media only screen and (max-height: 700px) {
    font-size: 6px;
  }
  @media only screen and (max-height: 900px) {
    margin-bottom: 8px;
  }
`;

const NavText = styled.h3<{ hover: boolean }>`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 20px;
  font-weight: normal;
  transition: all 1s ease-in-out;
  margin: 0;
  padding: 0;
  text-decoration: ${({ hover }) => (hover ? 'underline' : 'none')};
  @media only screen and (max-width: 900px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 1550px) {
    font-size: 14px;
  }
  @media only screen and (max-height: 500px) {
    font-size: 10px;
  }
  @media only screen and (max-height: 700px) {
    font-size: 12px;
  }
  @media only screen and (max-height: 900px) {
    font-size: 14px;
  }
`;

const NavDescription = styled.div<{ hover: boolean }>`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 14px;

  -webkit-transition: height, 0.5s linear;
  -moz-transition: height, 0.5s linear;
  -ms-transition: height, 0.5s linear;
  -o-transition: height, 0.5s linear;
  transition: height, 0.5s linear;
  height: ${({ hover }) => (hover ? '70px' : '0px')};
  text-decoration: none !important;
  margin: 0;
  padding: 0;
`;

const Abstract: React.FC = () => {
  return (
    <AbstractWrapper>
      <Paragraph>
        <i>Massaging The Asylum System</i> is a year-long collaboration between refugee justice
        centre Trampoline House (DK) and neurodiverse collective Project Art Works (UK). The project
        was initiated by Carlota Mir and Sara Alberani in the context of documenta fifteen and
        funded with common resources from the lumbung Collective Pot.
      </Paragraph>
      <Paragraph>
        Together, we set out to explore how migrant and neurodivergent communities are affected by
        social systems of <strong>care</strong> and
        <strong> control</strong>, and we sought ways to massage the asylum system - yes, massage,
        like a real <strong>massage</strong> - so that it could become softer and more humane.
        Bringing together the vision and artistic tools from both organisations, our work became a{' '}
        <strong>temporary coalition</strong> of dissident bodies.
      </Paragraph>
      <Paragraph>
        As a lumbung practice, <strong>harvest</strong> refers to artistic recordings of discussions
        and meetings. Harvested by co-curator Carlota Mir, the map revisits the ecosystem of the
        project and its traces: informal encounters, public conversations, art installations, and
        two workshop series in Copenhagen and Kassel, reflecting a multitude of voices from artists,
        collective members, facilitators, activists, publics, and the lumbung community.
      </Paragraph>
      <Paragraph>
        Arranged chronologically alongside notes and personal reflections, the circles take readers
        through the collaboration process, while the islands point at the underlying tensions that
        inform the work. The map also connects this harvest with a twin issue on the project
        featuring poems and letters, published with Trampoline House magazine visAvis and Lumbung
        books.
      </Paragraph>
    </AbstractWrapper>
  );
};

const NavElement: React.FC<{
  i: number;
  text: { title: string; description: string; level: string };
  path: string;
}> = ({ text, path }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <NavEl
      onClick={() => {
        /* if (path) window.open(path, "_blank", "noreferrer"); */ window.location.href = path;
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NavText hover={hover}>
        <strong>{text.level}</strong>
        {text.title} <NavDescription hover={hover}>{text.description}</NavDescription>
      </NavText>
    </NavEl>
  );
};

const NavElIsland: React.FC<{
  text: { title: string; description: string; level: string };
  path: string;
}> = ({ text, path }) => {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <NavElI
      onClick={() => {
        /* if (path) window.open(path, "_blank", "noreferrer") */ window.location.href = path;
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NavText hover={hover}> {text.title}</NavText>
    </NavElI>
  );
};

const Navigation: React.FC = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref?.current]);

  const { path: lPath, text: lText } = IMAGES.other.lightHouse;
  return (
    <NavWrapper height={height}>
      <H3>Navigation chart</H3>
      {Array.from({ length: 7 }, (_, i) => i + 1)
        .map((i) => i - 1)
        .map((i) => {
          const { text, path } = IMAGES.circles[`c${i}`] || {};
          return text && path ? <NavElement i={i} path={path} text={text} /> : null;
        })}
      {Array.from({ length: 5 }, (_, i) => i + 1)
        .map((i) => i - 1)
        .map((i) => {
          const { text, path } = IMAGES.islands[`i${i}`] || {};
          console.log(i, text);
          return text && path ? <NavElIsland path={path} text={text} /> : null;
        })}

      {lPath && lText ? <NavElIsland path={lPath} text={lText} /> : null}
    </NavWrapper>
  );
};

const TitleWrapper = styled.div`
  /* margin: 20px 0px; */
  /* position: absolute;
  top: 0; */
  width: calc(calc(50vw - 50vmin) - 0px);
  /* width: calc(30vw - 70px); */
  pointer-events: none;
`;

const BigTitle: React.FC = () => {
  return (
    <TitleWrapper>
      <H1>Cosmologies of Asylum</H1>
      <H2>A Lumbung Collaboration between Trampoline House and Project Art Works</H2>
    </TitleWrapper>
  );
};

const TableContents: React.FC = () => {
  return (
    <Absolute id="table-of-contents">
      <NavContainer>
        <Side>
          <LeftSide>
            <BigTitle />
            <Navigation />
          </LeftSide>
        </Side>
        <Side>
          <RightSide>
            <Abstract />
          </RightSide>
        </Side>
      </NavContainer>
    </Absolute>
  );
};

export default TableContents;

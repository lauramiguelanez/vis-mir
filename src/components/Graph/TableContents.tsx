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
  width: calc(calc(50vw - 50vmin) - 10px);
  height: 100%;
  margin: 60px;
`;

const LeftSide = styled.div`
  pointer-events: all;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightSide = styled.div`
  pointer-events: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/////////////

const Paragraph = styled.p`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 14px;
`;
const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 36px;
  margin-bottom: 10px;
`;
const H2 = styled.h2`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 16px;
  text-align: right;
  margin: 0;
  margin-bottom: 20px;
`;
const NavWrapper = styled.div<{ height: number }>`
  /* height: ${({ height }) => height + 70}px; */
`;
const NavEl = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
`;

const NavA = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NavText = styled.h3<{ hover: boolean }>`
  font-family: ${(props) => props.theme.font.family.mulish};
  font-size: 20px;
  font-weight: normal;
  transition: all 1s ease-in-out;
  margin: 0;
  padding: 0;
  text-decoration: ${({ hover }) => (hover ? 'underline' : 'none')};
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
    <>
      <Paragraph>
        This is a harvest of ‘Massaging The Asylum System’, a year-long collaboration between
        refugee justice centre Trampoline House (DK) and neurodiverse collective Project Art Works
        (UK), initiated by Carlota Mir and Sara Alberani in the context of documenta fifteen.
        Together, we set out to explore how these two communities are affected by social systems of
        care and control. Focusing on the asylum system in Denmark, we joined forces to create
        alliances, imagine a better asylum system and take back agency and joy. The project was
        collectively funded by the Lumbung community with money from the Collective Pot.
      </Paragraph>
      <Paragraph>
        Harvested by Carlota Mir, the map contains the traces of the work we did together:
        conversations, public programmes, workshops, collective drawings, informal moments, and
        installations in Kassel, along with notes and reflections from the author’s Lumbung diaries.
        Organised in a chronological manner around an introductory essay (core circle), the contents
        are distributed in concentric layers and reflect a multitude of voices: artists, collective
        members, curators, activists, facilitators, publics, and the Lumbung community.
      </Paragraph>
      {/* <Paragraph>
        The smaller islands are organised around antonym word pairings that point at key themes of
        the work: care/control, health/illness, solidarity/hostility, access/invisibility,
        alliance/division.
      </Paragraph> */}
      {/*  <Paragraph>
        In the landscape, layers also intertwine with other sites - Trampoline House, Project Art
        Works, Lumbung dot space, and Trampoline House independent publisher visÀvis, featuring a
        twin issue on the project that is based on a letter exchange.
      </Paragraph> */}
    </>
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
    <NavA href={path}>
      <NavEl
        /* onClick={() => {
          if (path) window.location.href = path;
        }} */
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <NavText hover={hover}>
          <strong>{text.level}</strong>
          {text.title} <NavDescription hover={hover}>{text.description}</NavDescription>
        </NavText>
      </NavEl>
    </NavA>
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

  return (
    <NavWrapper height={height}>
      <H1>Cosmologies of Asylum</H1>
      <H2>Navigation chart</H2>
      {Array.from({ length: 7 }, (_, i) => i + 1).map((i) => {
        const { text, path } = IMAGES.circles[`c${i}`] || {};
        return text && path ? <NavElement i={i} path={path} text={text} /> : null;
      })}
    </NavWrapper>
  );
};

const TableContents: React.FC = () => {
  return (
    <Absolute id="table-of-contents">
      <NavContainer>
        <Side>
          <LeftSide>
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

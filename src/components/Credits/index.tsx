import React, { FC } from 'react';
import styled from 'styled-components';

const logoCodeForMD = '/images/code-for-md-logo.svg';
const logoTSB = '/images/netz39-logo.svg';

const CreditsContainer = styled.div`
  width: 150px;
  height: auto;
  flex-direction: column;
  display: flex;
  justify-content: end;
  position: absolute;
  top: 12px;
  right: 12px;
  align-items: center;

  @media screen and (max-width: ${p => p.theme.screens.tablet}) {
    display: none;
  }
`;

const CodeForMDLogo = styled.img`
  width: 150px;
`;

const Netz39Link = styled.a`
  width: fit-content;
`;

const Netz39Logo = styled.img`
  width: 100px;
`;

const Credits: FC = () => {
  return (
    <CreditsContainer>
      <a
        href='https://codefor.de/magdeburg'
        rel='noopener noreferrer'
        target='_blank'
      >
        <CodeForMDLogo src={logoCodeForMD} alt='Logo Code for Magdeburg' />
      </a>
      <Netz39Link
          href='https://netz39.de'
          target='_blank'
          rel='noopener noreferrer'
      >
          <Netz39Logo src={logoTSB} alt='Logo Netz39 e.V.' />
      </Netz39Link>
    </CreditsContainer>
  );
};

export default Credits;

import React, { FC } from 'react';
import styled from 'styled-components';
import useLocalizedContent from '../../utils/hooks/useLocalizedContent';

const logoTSB = 'https://logos.citylab-berlin.org/logo-tsb-outline.svg';
const logoCodeForMagdeburg = '/images/code-for-md-logo.svg';
const logoNetz39 = '/images/netz39-logo.svg';

const LogoContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0rem 0.5rem 0rem;
  display: flex;
`;

const LabelLogoGroup = styled.div`
  width: 100%;
`;

const Label = styled.div`
  width: 100%;
  font-size: ${p => p.theme.fontSizeS};
  margin-bottom: 0.5rem;
  color: ${p => p.theme.colorTextDark};
  opacity: 0.66;
`;

const Logo = styled.img`
  width: 80%;
`;

const Credits: FC = () => {
  const content = useLocalizedContent();
  const { projectOf, executedBy, fundedBy } = content.credits;
  return (
    <LogoContainer>
      <LabelLogoGroup>
        <Label>{projectOf}</Label>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://technologiestiftung-berlin.de/'
        >
          <Logo src={logoTSB} alt='Logo Technologiestiftung Berlin' />
        </a>
      </LabelLogoGroup>
      <LabelLogoGroup>
        <Label>{executedBy}</Label>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://codefor.de/magdeburg'
        >
          <Logo src={logoCodeForMagdeburg} alt='Logo Code for Magdeburg' />
        </a>
      </LabelLogoGroup>
      <LabelLogoGroup>
        <Label>{fundedBy}</Label>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://netz39.de'
        >
          <Logo src={logoNetz39} alt='Logo Netz39 e.V.' />
        </a>
      </LabelLogoGroup>
    </LogoContainer>
  );
};

export default Credits;

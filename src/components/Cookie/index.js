import React from 'react';
import styled from 'styled-components';
import Store from '../../state/Store';

import Actions from '../../state/Actions';
import { connect } from 'unistore/react';

import ButtonRound from '../ButtonRound/';

const CookieDiv = styled.div`
  position: absolute;
  bottom: 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 1;
  font-size: 12px;
  box-shadow: ${p => p.theme.boxShadow};
  height: auto;
  width: 100%;
  background: white;
`;

const Inner = styled.div`
  max-width: calc(100wv-48px);
  flex-direction: row;
  display: flex;
  align-items: center;
  flex-wrap: none;
  justify-content: space-between;
  padding: 10px;
`;

const StyledCardDescription = styled.div`
  width: 60%;
  line-height: 150%;
  opacity: 0.66;

  a {
    color: ${p => p.theme.colorTextDark};
    &:hover {
      opacity: 0.33;
    }
  }

  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;

const Cookie = p => {
  const { cookiesAccepted } = p;

  const setCookie = () => {
    document.cookie = 'disclaimerAccepted=true;path=/;';
    Store.setState({ cookiesAccepted: true });
  };

  return (
    <>
      {!cookiesAccepted && (
        <CookieDiv>
          <Inner>
            <StyledCardDescription>
              Diese Webseite verwendet Cookies, um bestimmte Funktionen zu
              ermöglichen und das Angebot zu verbessern. Indem du hier
              fortfährst stimmst du der Nutzung von Cookies zu.{' '}
              <a
                href="https://www.technologiestiftung-berlin.de/de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weitere Informationen.
              </a>
            </StyledCardDescription>
            <ButtonRound fontSize={'.8rem'} toggle={() => setCookie()}>
              Einverstanden
            </ButtonRound>
          </Inner>
        </CookieDiv>
      )}
    </>
  );
};

export default connect(
  state => ({
    cookiesAccepted: state.cookiesAccepted,
  }),
  Actions
)(Cookie);
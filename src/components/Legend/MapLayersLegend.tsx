import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { interpolateColor } from '../../utils/colorUtil';
import { useActions, useStoreState } from '../../state/unistore-hooks';
import { workingColor } from '../TreesMap/mapColorUtil';
import { createCSSGradient } from './createCSSGradient';
import { PumpsColorLegend } from './PumpsColorLegend';
import { RainColorLegend } from './RainColorLegend';
import { TreesColorLegend } from './TreesColorLegend';
import {
  FlexColumn,
  FlexColumnLast,
  FlexRow,
  FlexRowFit,
  FlexSpace,
} from './LegendFlexBoxes';
import { LegendDot, LegendRect, StrokedLegendDot } from './LegendRectsDots';
import { ItemLabel, legendLabels } from './LegendLabels';
import SmallParagraph from '../SmallParagraph';
import { isMobile } from 'react-device-detect';

export interface IsActiveProps {
  isActive?: boolean;
}

const StyledItemLabel = styled(ItemLabel)`
  width: auto;
  padding: 0;
`;

const LegendDiv = styled.div<IsActiveProps>`
  position: absolute;
  bottom: 36px;
  right: 12px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin: 0 auto;
  font-size: 12px;
  box-shadow: ${p => p.theme.boxShadow};
  height: min-content;
  ${props => (props.isActive ? 'min-height: 230px;' : '')}
  padding: 8px 12px;
  width: ${p => (p.isActive ? '210px' : '110px')};
  background: white;

  &:hover {
    cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  }
`;

const StyledCardDescription = styled(SmallParagraph)`
  font-weight: bold;
  font-size: 0.8rem;
  opacity: 1;
`;

const LegendToggle = styled.span<IsActiveProps>`
  cursor: pointer;
  height: fit-content;
  padding: 8px ${props => props.theme.spacingS};
  transition: background-color 200ms ease-out;
  &:hover {
    background-color: ${props =>
      props.isActive ? props.theme.colorGreyLight : ''};
  }
`;
const rainColors = legendLabels.map(item => interpolateColor(item.value));
const rainGradient = createCSSGradient(rainColors);

const MapLayerLegend: FC = () => {
  const { setVisibleMapLayer } = useActions();

  const visibleMapLayer = useStoreState('visibleMapLayer');

  const [legendExpanded, setLegendExpanded] = useState(isMobile ? false : true);

  if (legendExpanded === false) {
    return (
      <LegendDiv onClick={() => setLegendExpanded(true)}>
        <FlexSpace>
          <FlexColumn>
            <StyledCardDescription>Legende</StyledCardDescription>
          </FlexColumn>
          <LegendToggle>+</LegendToggle>
        </FlexSpace>
      </LegendDiv>
    );
  }

  return (
    <LegendDiv isActive>
      <FlexSpace isActive>
        <FlexColumnLast>
          <StyledCardDescription onClick={() => setLegendExpanded(false)}>
            {visibleMapLayer === 'pumps'
              ? 'Öffentliche Pumpen'
              : 'Niederschlag'}
          </StyledCardDescription>
          {visibleMapLayer !== 'pumps' && (
            <SmallParagraph>der letzten 30 Tage (Liter)</SmallParagraph>
          )}
        </FlexColumnLast>
        <LegendToggle isActive onClick={() => setLegendExpanded(false)}>
          —
        </LegendToggle>
      </FlexSpace>
      {visibleMapLayer !== 'pumps' && (
        <FlexRow>
          {visibleMapLayer === 'trees' && <TreesColorLegend />}
          {visibleMapLayer === 'rain' && <RainColorLegend />}
        </FlexRow>
      )}
      {visibleMapLayer === 'pumps' && <PumpsColorLegend />}

      <FlexColumnLast isLast={true}>
        <StyledCardDescription>Datenpunkte</StyledCardDescription>
        <SmallParagraph>durch Klick ein- & ausblenden.</SmallParagraph>
        <FlexRowFit
          isActive={visibleMapLayer === 'trees'}
          onClick={() => {
            setVisibleMapLayer('trees');
          }}
        >
          <LegendDot
            className={'legend-dot'}
            color={'#2c303b'}
            gradient={visibleMapLayer === 'trees' ? rainGradient : undefined}
          />

          <StyledItemLabel>Straßen- & Anlagenbäume</StyledItemLabel>
        </FlexRowFit>
        <FlexRowFit
          isActive={visibleMapLayer === 'pumps'}
          onClick={() => {
            setVisibleMapLayer('pumps');
          }}
        >
          <StrokedLegendDot
            gradient={
              visibleMapLayer === 'pumps' ? workingColor.hex : undefined
            }
          />

          <StyledItemLabel>Öffentl. Pumpen</StyledItemLabel>
        </FlexRowFit>
        <FlexRowFit
          isActive={visibleMapLayer === 'rain'}
          onClick={() => {
            setVisibleMapLayer('rain');
          }}
        >
          <LegendRect
            gradient={visibleMapLayer === 'rain' ? rainGradient : undefined}
          />

          <StyledItemLabel>Niederschlagsflächen</StyledItemLabel>
        </FlexRowFit>
      </FlexColumnLast>
    </LegendDiv>
  );
};

export default MapLayerLegend;

import styled from 'styled-components';
import {appearBodyTransition, txtColor} from '../consts';

export const StyledH3 = styled.h3`
  color: ${txtColor};
  font-family: TWK Everett, serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

export const AppearingFillWidthCenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  opacity: ${props => props.show};
  transition: ${appearBodyTransition};
  height: ${props => props.show === 1 ? 'auto' : '0'};
`

export const Subtitle = styled.h2`
  font-family: TWK Everett, serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

export const Paragraph = styled.p`
  color: ${txtColor};
  text-align: center;
  margin: 0;
  font: 300 16px/23px Helvetica Neue, -apple-system, Roboto, Helvetica, sans-serif;
`;

export const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AlignedLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Spacer = styled.div`
  width: ${props => props.width ? `${props.width}` : 'auto'};
  height: ${props => props.height ? `${props.height}` : 'auto'};
  flex: none;
`;

export const ResponsiveSpacer = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  flex: none;

  @media (max-width: 768px) {
    width: ${props => props.mobileWidth || props.width || 'auto'};
    height: ${props => props.mobileheight || props.height || 'auto'};
  }
`;


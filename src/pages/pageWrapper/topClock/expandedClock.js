import styled from 'styled-components';
import {txtColor, expandedClockTransition} from '../../../consts';
import {Spacer} from '../../styledComponents';

const BigDigitsForNumber = ({number}) => {
    return number.toString().padStart(2, '0').split('').map((digit, index) => (
        <DigitContainer key={index}>{digit}</DigitContainer>
    ))
}

export const ExpandedClockBody = ({expanded, timeLeftData}) => {
    return <FillWidthCenteredColumn
        style={{
            height: expanded ? "auto" : "0",
            transition: `opacity ${expandedClockTransition}, height ${expandedClockTransition}`,
            opacity: expanded ? "1" : "0",
        }}
    >
        <Spacer height='1rem' />
        <ClockTitle style={{lineHeight: "normal"}}>Claiming live for:</ClockTitle>
        <Spacer height='1.5rem' />
        <CenteredRow>
            <ExpandedClock>
                <CenteredRow>
                    <BigDigitsForNumber number={timeLeftData.days} />
                </CenteredRow>
                <ClockSubtitle>days</ClockSubtitle>
            </ExpandedClock>
            <ExpandedClock>
                <CenteredRow>
                    <ClockBoldSubtitle>:</ClockBoldSubtitle>
                    <BigDigitsForNumber number={timeLeftData.hours} />
                </CenteredRow>
                <ClockSubtitle>hours</ClockSubtitle>
            </ExpandedClock>
            <ExpandedClock>
                <CenteredRow>
                    <ClockBoldSubtitle>:</ClockBoldSubtitle>
                    <BigDigitsForNumber number={timeLeftData.minutes} />
                </CenteredRow>
                <ClockSubtitle>minutes</ClockSubtitle>
            </ExpandedClock>
        </CenteredRow>
    </FillWidthCenteredColumn>
}

export const ExpandedClock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ClockTitle = styled.h2`
  color: ${txtColor};
  font-family: Inter, serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const ClockContainer = styled.div`
  max-width: 59.375rem;
  width: 70%;
  min-height: ${props => props.expanded === 1 ? "10.9375rem" : "3.6rem"};
  transition: min-height ${expandedClockTransition};
  border-radius: 0.625rem;
  border: 1px solid #36312F;
  background: linear-gradient(45deg, #24201F 0%, #327fda 100%);
  
  @media (max-width: 768px) {
    height: ${props => props.expanded ? "10.9375rem" : "4.7rem"};
    width: 100%;
  }
`

export const DigitContainer = styled.div`
  display: flex;
  width: 2.625rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #161615;
  color: ${txtColor};
  text-align: center;
  font-family: Inter, serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
`

export const ClockSubtitle = styled.h2`
  color: ${txtColor};
  font-family: Inter, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const ClockBoldSubtitle = styled.h3`
  color: ${txtColor};
  text-align: center;
  font-family: Inter, serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
`

export const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const FillWidthCenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

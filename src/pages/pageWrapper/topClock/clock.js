import {ClockContainer, ClockTitle, ExpandedClockBody} from './expandedClock';
import styled from 'styled-components';
import {claimEndDate, txtColor, expandedClockTransition} from '../../../consts';
import {Spacer} from '../../styledComponents';

function timeToTarget(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        return {days: 0, hours: 0, minutes: 0};
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);

    return {days, hours, minutes};
}

export const TimeLeftClock = ({expanded, onClick}) => {
    const timeLeftData = timeToTarget(claimEndDate);
    return (
        <ClockContainer expanded={expanded ? 1 : 0} onClick={onClick}>
            <ExpandedClockBody expanded={expanded} timeLeftData={timeLeftData} />
            <ResponsiveRow
                style={{
                    height: !expanded ? "auto" : "0",
                    transition: `opacity ${expandedClockTransition}, height ${expandedClockTransition}`,
                    opacity: !expanded ? "1" : "0",
                }}
            >
                <ClockTitle>Claiming live for:</ClockTitle>
                <FillHeightCenteredRow>
                    <ShrinkedClockNumberSubtitle>{timeLeftData.days}</ShrinkedClockNumberSubtitle>
                    <ShrinkedClockTextSubtitle>&nbsp;days</ShrinkedClockTextSubtitle>
                    <Spacer width={'1.5rem'} />
                    <ShrinkedClockNumberSubtitle>{timeLeftData.hours}</ShrinkedClockNumberSubtitle>
                    <ShrinkedClockTextSubtitle>&nbsp;hours</ShrinkedClockTextSubtitle>
                    <Spacer width={'1.5rem'} />
                    <ShrinkedClockNumberSubtitle>{timeLeftData.minutes}</ShrinkedClockNumberSubtitle>
                    <ShrinkedClockTextSubtitle>&nbsp;minutes</ShrinkedClockTextSubtitle>
                </FillHeightCenteredRow>
            </ResponsiveRow>
        </ClockContainer>
    );
}

const FillHeightCenteredRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`

const ResponsiveRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 1rem 1.4rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 1.4rem;
    gap: 1rem;
  }
`

const ShrinkedClockNumberSubtitle = styled.h2`
  color: ${txtColor};
  font-family: Inter, serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ShrinkedClockTextSubtitle = styled.h2`
  color: ${txtColor};
  font-family: Inter, serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`

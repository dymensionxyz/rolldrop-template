import {Paragraph, ResponsiveSpacer, Spacer, Subtitle} from '../styledComponents';
import {LandingAddrInput} from './landingAddrInput';
import styled from 'styled-components';
import {disappearBodyTransition} from '../../consts';

export const LandingPageBody = ({inputAddr, setInputAddr, handleEnterClick, show, isLoading}) => (
    <FadingFillWidthCenteredColumn show={show ? 1 : 0}>
        <ResponsiveSpacer height='3.5rem' mobileheight='2.5rem' />
        <Subtitle>Check eligibility</Subtitle>
        <Spacer height='1rem' />
        <Paragraph>Enter your address below to check if you are eligible!</Paragraph>
        <ResponsiveSpacer height='3rem' mobileheight='1.5rem' />
        <LandingAddrInput
            inputAddr={inputAddr}
            setInputAddr={setInputAddr}
            handleEnterClick={handleEnterClick}
            isLoading={isLoading}
        />
    </FadingFillWidthCenteredColumn>)

export const FadingFillWidthCenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding-bottom: 2rem;
  opacity: ${props => props.show};
  transition: ${disappearBodyTransition};
  height: ${props => props.show === 1 ? 'auto' : '0'};
`

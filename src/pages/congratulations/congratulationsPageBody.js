import styled from 'styled-components';
import {
    AppearingFillWidthCenteredColumn, ResponsiveSpacer,
    Spacer,
    StyledH3
} from '../styledComponents';
import {CopyAddrComponent} from './copyAddr';
import {
    containerColor,
    txtColor,
    enterButtonBgColor,
    secondaryTextColor,
    strings,
    whiteTxtColor
} from '../../consts';
import {ReactComponent as CongratsIcon} from '../../assets/congratulations.svg';

export const CongratulationsBody = ({eligibleAmount, claimAddr, show}) => {
    return (
        <AppearingFillWidthCenteredColumn show={show ? 1 : 0}>
            <CongratulationsContainer>
                <StyledH3>Congrats!</StyledH3>
                <Spacer height='0.6rem' />
                <StyledParagraph>
                    The following {strings.Name} address that will receive at least the following amount of {strings.Token} on genesis.
                </StyledParagraph>
                <Spacer height='1.5rem' />
                <SeparatorLine />
                <Spacer height='1.5rem' />
                <CopyAddrComponent addr={claimAddr} />
                <Spacer height='2rem' />
                <AmountInfoSubtitle>Minimum amount to be received</AmountInfoSubtitle>
                <Spacer height='0.75rem' />
                <AmountTxt>{eligibleAmount.toFixed(2) + " "} {strings.Token}</AmountTxt>
            </CongratulationsContainer>
            <Spacer height='1.5rem' />
            <NoteContainer>
                <NoteInnerContainer>
                    <CongratsIcon style={{flex: 'none'}} />
                    <NoteTxt>
                        The displayed {strings.Token} amount represents the minimum amount you are currently eligible for.<br />
                        Please note that this amount may increase depending on the percentage of addresses that make a claim.
                    </NoteTxt>
                </NoteInnerContainer>
            </NoteContainer>
            <ResponsiveSpacer height='7rem' mobileheight='3rem' />
        </AppearingFillWidthCenteredColumn>
    );
}

const SeparatorLine = styled.div`
  width: 100%;
  background-color: white;
  opacity: 4%;
  height: 1px;
`

const CongratulationsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${containerColor};
  backdrop-filter: blur(22px);
  width: 100%;
  max-width: 32rem;
`

export const AmountInfoSubtitle = styled.h4`
  color: ${secondaryTextColor};
  text-align: right;
  font-family: Inter, serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */
`

export const AmountTxt = styled.h1`
  color: ${txtColor};
  text-align: center;
  font-family: Inter, serif;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 3rem */
`

export const StyledParagraph = styled.p`
  color: ${txtColor};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 146%;
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`

const NoteContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 32rem;
  padding: 1rem;
  align-items: flex-start;
  gap: 1.125rem;
  border-radius: 0.5rem;
  background: ${containerColor};
`

const NoteInnerContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: ${enterButtonBgColor};
`

export const NoteTxt = styled.p`
  color: ${whiteTxtColor};
  font-family: Inter, serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.02rem;
`

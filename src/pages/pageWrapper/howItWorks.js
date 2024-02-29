import styled from 'styled-components';
import {
    AlignedLeftColumn,
    ResponsiveSpacer,
    Spacer,
    StyledH3
} from '../styledComponents';
import BigPhoto from '../../assets/big_photo.png';
import {txtColor, strings} from '../../consts';

export const HowItWorksSection = () => <>
    <ResponsiveFillWidthRow>
        <AlignedLeftColumn>
            <StyledH3>{strings.Description.Header}</StyledH3>
            <ResponsiveSpacer height='3rem' mobileheight='1.5rem' />
            <LongParagraph>
                {strings.Description.Body}
                <br /><br />
                Learn more:{' '}
                <a href={process.env.REACT_APP_PRESENTING_LINK} target='_blank'>
                    {strings.Description.PresentLink}
                </a>
                <br /><br />
                Try it on testnet:{' '}
                <a href={process.env.REACT_APP_READ_PORTAL_LINK}
                   target='_blank'>{process.env.REACT_APP_READ_PORTAL_LINK}</a>
            </LongParagraph>
        </AlignedLeftColumn>
        <Spacer width='7rem' />
        <CirclesImage src={BigPhoto} alt='' />
    </ResponsiveFillWidthRow>
</>

const CirclesImage = styled.img`
  width: 100%;
  max-width: 28rem;
`

export const ResponsiveFillWidthRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0.5rem;
  }
`;

export const LongParagraph = styled.p`
  color: ${txtColor};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 146%;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`

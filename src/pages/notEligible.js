import {AppearingFillWidthCenteredColumn, Paragraph, Spacer, Subtitle} from './styledComponents';
import {txtColor} from '../consts';
import styled from 'styled-components';

export const NotEligibleBody = ({show}) => (
    <AppearingFillWidthCenteredColumn show={show ? 1 : 0}>
        <Spacer height='0.75rem' />
        <Subtitle>You’re not eligible</Subtitle>
        <Spacer height='1rem' />
        <Paragraph>
            This time you’re not in but it’s not over for you. Rolldrop Season 2 is coming soon!<br />
            <a href={process.env.REACT_APP_READ_DISCORD_LINK} target='_blank'>Join the community</a> to stay tuned.
        </Paragraph>
        <Spacer height='2rem' />
        <ConnectButton onClick={() => window.location.reload()} style={{zIndex: 10}}>Try a different address</ConnectButton>
    </AppearingFillWidthCenteredColumn>)

export const ConnectButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.625rem 1.375rem;
  align-items: center;
  border-radius: 0.5rem;
  background: #2A2725;
  outline: none;
  border: none;
  color: ${txtColor};
  text-align: center;
  font-family: Inter, serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  white-space: nowrap;
`

import styled from 'styled-components';
import {CenteredRow} from '../pageWrapper/topClock/expandedClock';
import {ReactComponent as CopyIcon} from '../../assets/copyIcon.svg';
import {Tooltip} from 'react-tooltip'
import {txtColor} from '../../consts';
import 'react-tooltip/dist/react-tooltip.css';

export const CopyAddrComponent = ({addr}) => {
    return <CopyAddrExternalContainer>
        <CopyAddrContainer>
            <AddrTxt>{addr}</AddrTxt>
            <FillWidthSpacer />
            <CopyIcon
                style={{flex: "none", cursor: "pointer"}}
                onClick={() => copyToClipboard(addr)}
                data-tooltip-id='my-tooltip'
                data-tooltip-content='Copied!'
            />
            <Tooltip id='my-tooltip' openOnClick />
        </CopyAddrContainer>
    </CopyAddrExternalContainer>
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}

export const AddrTxt = styled.h3`
  color: ${txtColor};
  font-family: Inter, serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    max-width: 14rem;
  }
`

export const CopyAddrExternalContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  background: #191716;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`
export const CopyAddrContainer = styled(CenteredRow)`
  padding: 1rem;
  border-radius: 0.5rem;
  background: #141212;
  width: calc(100% - 2rem);
  justify-content: flex-start;
`

const FillWidthSpacer = styled.div`
  flex-grow: 1; // Add this line
`;

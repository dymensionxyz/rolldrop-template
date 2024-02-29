import styled from 'styled-components';
import {
    blackBackground,
    blackText,
    txtColor,
    enterButtonBgColor,
    enterButtonBorderColor,
    errorTextColor,
    secondaryTextColor
} from '../../consts';
import {useEffect, useState} from 'react';
import {Spacer} from '../styledComponents';
import {CenteredRow} from '../pageWrapper/topClock/expandedClock';
import {ReactComponent as PasteIcon} from '../../assets/paste.svg';

export const LandingAddrInput = ({inputAddr, setInputAddr, handleEnterClick, isLoading}) => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(inputAddr.length > 10);
    }, [inputAddr]);

    const isError = !/^0x[a-fA-F0-9]{40}$/.test(inputAddr) && inputAddr.length > 0;
    const isEnterButtonEnabled = isButtonEnabled && !isLoading && !isError;
    return (
        <AddressContainerWidthRow>
            <AddressContainer>
                <InputContainer error={isError ? 1 : 0}>
                    <AddressInput
                        placeholder='0xAbc...795'
                        value={inputAddr}
                        onChange={(event) => setInputAddr(event.target.value)}
                    />
                    <StyledPasteIcon
                        onClick={async () => {
                            const text = await navigator.clipboard.readText();
                            setInputAddr(text);
                        }}
                    />
                </InputContainer>
                <BottomRow>
                    <EnterInputButton
                        enabled={isEnterButtonEnabled ? 1 : 0}
                        onClick={isEnterButtonEnabled ? handleEnterClick : null}
                    >
                        {isLoading ? "Loading..." : "Check"}
                    </EnterInputButton>
                </BottomRow>
            </AddressContainer>
            {isError && <>
                <Spacer height='0.4rem' />
                <ErrorText style={{marginLeft: "1rem"}}>Please enter a valid Ethereum address</ErrorText>
            </>}
        </AddressContainerWidthRow>
    );
};

const StyledPasteIcon = styled(PasteIcon)`
  position: absolute;
  right: 1rem; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer; /* If the icon is clickable */
`;

const BottomRow = styled(CenteredRow)`
  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
  }
`

export const AddressInput = styled.input`
  width: calc(100% - 2rem);
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
  font-family: Inter, serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`

export const AddressContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
  border-radius: 0.75rem;
  background: ${blackBackground};
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const EnterInputButton = styled.button`
  width: 6.5625rem;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid ${enterButtonBorderColor};
  background: ${props => props.enabled === 1 ? txtColor : enterButtonBgColor};
  color: ${props => props.enabled === 1 ? blackText : secondaryTextColor};
  cursor: pointer;
  text-align: center;
  font-family: Inter, serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  border: ${props => `1px solid ${props.error === 1 ? errorTextColor : enterButtonBorderColor}`};
  background: ${enterButtonBgColor};
  padding: 0.75rem 1rem;
  color: ${txtColor};
  box-sizing: border-box;
  border-radius: 0.375rem;
`;

export const ErrorText = styled.p`
  color: ${errorTextColor};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 146%; 
`
export const AddressContainerWidthRow = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 50rem;
`


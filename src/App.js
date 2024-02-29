import {useCallback, useState} from 'react';
import {PageWrapper} from './pages/pageWrapper/wrappers';
import {LandingPageBody} from './pages/landingPage/landingPageBody';
import {NotEligibleBody} from './pages/notEligible';
import {CongratulationsBody} from './pages/congratulations/congratulationsPageBody';
import styled from 'styled-components';
import grid from './assets/bg_grid.svg';
import {strings} from './consts';

const State = {Landing: 'Landing', Eligible: 'Eligible', NotEligible: 'NotEligible'};

export const App = () => {
    const [inputAddr, setInputAddr] = useState('');
    const [eligibleAmount, setEligibleAmount] = useState(0);
    const [addressChecking, setAddressChecking] = useState(false);
    const [state, setState] = useState(State.Landing);

    const claimAddress = useCallback(async (address) => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        try {
            const response = await fetch(process.env.REACT_APP_CLAIM_ADDRESS_REQUEST_API, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({address})
            })
            if (response.ok) {
                return await response.json()
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }, []);

    const checkAddrHandler = useCallback(async () => {
        setAddressChecking(true)
        const response = await claimAddress(inputAddr)
        if (!response?.amount) {
            setState(State.NotEligible)
        } else {
            setEligibleAmount(response.amount);
            setState(State.Eligible)
        }
    }, [inputAddr, claimAddress]);

    return (
        <ScreenSizeContainer>
            <FullScreenContainer src={grid} />
            <PageWrapper
                renderFooter={state === State.Landing}
                title={state === State.Eligible ? 'Welcome to ' + strings.Name : 'Genesis Rolldrop'}
                timeLeftExpanded={state === State.Landing}
            >
                <LandingPageBody
                    show={state === State.Landing}
                    isLoading={addressChecking}
                    inputAddr={inputAddr}
                    setInputAddr={setInputAddr}
                    handleEnterClick={checkAddrHandler}
                />
                <NotEligibleBody show={state === State.NotEligible} />
                <CongratulationsBody
                    show={state === State.Eligible}
                    claimAddr={inputAddr}
                    eligibleAmount={eligibleAmount}
                />
            </PageWrapper>
        </ScreenSizeContainer>
    );
}

export const ScreenSizeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const FullScreenContainer = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
  overflow: hidden;
  opacity: 0.1;
  scale: 1.5;
  object-fit: cover
`


import {CenteredColumn, Paragraph, ResponsiveSpacer, Spacer,} from '../styledComponents';
import {TimeLeftClock} from './topClock/clock';
import {HowItWorksSection} from './howItWorks';
import {Footer} from './footer';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as TwitterLogo} from '../../assets/twitter.svg';
import {ReactComponent as TgLogo} from '../../assets/tg.svg';
import {ReactComponent as MediumLogo} from '../../assets/medium.svg';
import styled from 'styled-components';
import {useWindowSize} from 'react-use';
import {txtColor} from '../../consts';

export const PageWrapper = ({timeLeftExpanded, renderFooter, title, children}) => {
    const {width} = useWindowSize();
    return (
        <ScreenWidthColumn>
            <CenteredColumn
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    height: width > 720 ? "65rem" : "auto",
                    justifyContent: "flex-start"
                }}
            >
                <IconsContainer>
                    <Logo onClick={() => window.location.reload()} style={{cursor: "pointer"}} />
                    <FillSpaceSpacer />
                    <TwitterLogo
                        onClick={() => window.open(process.env.REACT_APP_READ_TWITTER_LINK)}
                        style={{cursor: "pointer"}}
                    />
                    <TgLogo
                        onClick={() => window.open(process.env.REACT_APP_READ_PORTAL_LINK)}
                        style={{cursor: "pointer"}}
                    />
                    <MediumLogo
                        onClick={() => window.open(process.env.REACT_APP_READ_BLOG_LINK)}
                        style={{cursor: "pointer"}}
                    />
                </IconsContainer>
                <ResponsiveSpacer height='1.25rem' mobileheight='0' />
                <TimeLeftClock expanded={timeLeftExpanded} delayAnimation />
                <ResponsiveSpacer height='3.5rem' mobileheight='2.5rem' />
                <BgBlur />
                <Title>{title}</Title>
                <Spacer height='1rem' />
                <Paragraph>
                    Season one - <a href={process.env.REACT_APP_READ_BLOG_LINK} target='_blank'>Read More</a>
                </Paragraph>
                {children}
            </CenteredColumn>
            {renderFooter && <>
                <HowItWorksSection />
                <ResponsiveSpacer height='12rem' mobileheight='8rem' />
                <Footer />
                <Spacer height='4rem' />
            </>}
        </ScreenWidthColumn>
    )
}

const BgBlur = styled.div`
  width: 100%;
  max-width: 57.75rem;
  height: 32.5rem;
  margin-top: -4.5rem;
  margin-bottom: -28.5rem;
  flex-shrink: 0;
  border-radius: 100%;
  opacity: 0.9;
  background: var(--BG, #24201F);
  filter: blur(50px);
  z-index: -1;
  position: relative;
  
  @media (max-width: 768px) {
    margin-top: -7.5rem;
    margin-bottom: -25.5rem;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  height: fit-content;
  width: 100%;
  @media (min-width: 1000px) {
    margin-bottom: -44px;
  }
`;

export const ScreenWidthColumn = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const Title = styled.h1`
  color: ${txtColor};
  font-family: TWK Everett, serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  text-align: center;

  @media (max-width: 991px) {
    font-size: 2.5rem;
  }
`;

export const FillSpaceSpacer = styled.div`
  flex: 1;
`;

import {AlignedLeftColumn, CenteredColumn, Spacer} from '../styledComponents';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import styled from 'styled-components';
import {useWindowSize} from 'react-use';

export const Footer = () => {
    const {width} = useWindowSize();
    return <FooterContainer>
        {width < 768 && <CenteredColumn>
            <Logo style={{width: "14.4375rem", height: "2.4375rem"}} />
            <Spacer height='1.5rem' />
            <AllRightsReservedTxt>Ⓒ All Rights Reserved</AllRightsReservedTxt>
        </CenteredColumn>}
        <FillWidthRow style={{alignItems: 'flex-start'}}>
            {width > 768 && <AlignedLeftColumn>
                <Logo style={{width: "14.4375rem", height: "2.4375rem"}} />
                <Spacer height='1.5rem' />
                <AllRightsReservedTxt>Ⓒ All Rights Reserved</AllRightsReservedTxt>
            </AlignedLeftColumn>}
            <AlignedLeftColumn>
                <FooterTitle>About</FooterTitle>
                <Spacer height='1.5rem' />
                <Link href={process.env.REACT_APP_READ_WEBSITE_LINK} target='_blank'>Website</Link>
                <Link href={process.env.REACT_APP_READ_DOCS_LINK} target='_blank'>Docs</Link>
                <Link href={process.env.REACT_APP_READ_PORTAL_LINK} target='_blank'>Portal App</Link>
                <Link href={process.env.REACT_APP_READ_CAREERS_LINK}>Careers</Link>
            </AlignedLeftColumn>
            <AlignedLeftColumn>
                <FooterTitle>Community</FooterTitle>
                <Spacer height='1.5rem' />
                <Link href={process.env.REACT_APP_READ_BLOG_LINK} target='_blank'>Blog</Link>
                <Link href={process.env.REACT_APP_READ_DISCORD_LINK} target='_blank'>Discord</Link>
                <Link href={process.env.REACT_APP_READ_TWITTER_LINK} target='_blank'>X</Link>
            </AlignedLeftColumn>
            <AlignedLeftColumn style={{display: width < 768 ? 'none' : 'flex'}}>
                <FooterTitle>Legal</FooterTitle>
                <Spacer height='1.5rem' />
                <Link href='/terms.html' target='_blank'>Terms of service</Link>
                <Link href='/terms.html' target='_blank'>Privacy Policy</Link>
            </AlignedLeftColumn>
        </FillWidthRow>
    </FooterContainer>
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 5rem;
  }
`

const AllRightsReservedTxt = styled.h4`
  opacity: 0.5;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 134%;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`

export const FooterTitle = styled.h4`
  font-family: Inter, serif, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`

const Link = styled.a`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 134%;
  margin-bottom: 0.8rem;
`

export const FillWidthRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;


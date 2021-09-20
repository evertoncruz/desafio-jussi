import React from 'react';
import { WrapFooter, WrapLeft, WrapRight, FooterIcons, WrapIcons, LinkImage } from './styles';
import wppcompany from '../../assets/wppcompany.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

function Footer() {
  return (
    <WrapFooter>
      <WrapLeft>
        <FooterIcons src={wppcompany} alt='wppcompany logo'/>
      </WrapLeft>
      <WrapRight>
        <WrapIcons>
          <LinkImage to={ { pathname: 'https://www.facebook.com/agencia.jussi' } } target='_blank'>
            <FooterIcons src={facebook} alt='wppcompany logo'/>
          </LinkImage>
          <LinkImage to={ { pathname: 'https://www.instagram.com/jussi/' } } target='_blank'>
            <FooterIcons src={instagram} alt='wppcompany logo'/>
          </LinkImage>
          <LinkImage to={ { pathname: 'https://www.linkedin.com/company/agencia-jussi/' } } target='_blank'>
            <FooterIcons src={linkedin} alt='wppcompany logo'/>
          </LinkImage>
        </WrapIcons>
      </WrapRight>
    </WrapFooter>
  );
}

export default Footer;
import React from 'react';
import { WrapLogoBar, WrapLogos, Text, WrapLogo, LogoBarImage } from './styles';
import brastemp from '../../assets/brastemp.svg';
import compracerta from '../../assets/compracerta.svg';
import consul from '../../assets/consul.svg';
import thebar from '../../assets/thebar.svg';

function LogoBar() {
  return (
    <WrapLogoBar>
      <WrapLogos>
        <Text>Nossas principais lojas VTEX</Text>
        <Text>→</Text>
        <WrapLogo>
          <LogoBarImage src={brastemp} alt='brastemp logo'/>
        </WrapLogo>
        <WrapLogo>
          <LogoBarImage src={compracerta} alt='compra certa logo'/>
        </WrapLogo>
        <WrapLogo>
          <LogoBarImage src={consul} alt='consul logo'/>
        </WrapLogo>
        <WrapLogo>
          <LogoBarImage src={thebar} alt='thebar logo'/>
        </WrapLogo>
      </WrapLogos>
    </WrapLogoBar>
  );
}

export default LogoBar;
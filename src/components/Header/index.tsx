import React from 'react';

import IconLogoSVG from '../../assets/iconLogo.svg'

import {
  Container,
  ImgProfile,
  LogoContainer,
  TextLogo, 
  ImgLogo

} from './styles';

export function Header() {
  return (
    <Container>
        <LogoContainer>
            <ImgLogo src={IconLogoSVG}/>
            <TextLogo>Pharma Inc.</TextLogo>

        </LogoContainer>

    </Container>
  );
}
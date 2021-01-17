import React from 'react';

// styled component
import { FooterContainer, FooterPara, FooterLink } from "./footer.styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterPara>
        &copy; {year} AIO TODO APP.
      </FooterPara>
      <FooterPara>
        Made In India by <FooterLink href="https://github.com/navdeepsingh4298" >Navdeep Singh</FooterLink>
      </FooterPara>
    </FooterContainer>
  )
}

export default Footer;

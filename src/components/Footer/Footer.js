import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7980914608">+1234567890</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto: ishikagupta2108@gmail.com">ishika@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Resume</LinkTitle>
          <LinkItem href="https://docs.google.com/document/d/17Vosyws0AKfrCEt4MmpMktTGW-eIkwQo1T_KjUNj4vs/edit?usp=sharing" target="_blank">View my Resume</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building and Learning Simultaneously</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com/ishikaa-2302">
            <AiFillGithub size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "https://twitter.com/ishikaa_2302">
            <AiFillLinkedin size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "https://www.instagram.com/ishikaa_2032/">
            <AiFillInstagram size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "http://linkedin.com/in/ishika-gupta-0514241a9">
            <AiFillTwitterCircle size = "3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

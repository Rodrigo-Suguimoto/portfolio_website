import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call me</LinkTitle>
          <LinkItem href="tel: 1199999-9999">1199999-9999</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email me</LinkTitle>
          <LinkItem href="mailto: rodrigosuguimoto@gmail.com">rodrigosuguimoto@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time
          </Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/rodrigosuguimoto/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

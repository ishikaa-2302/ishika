import Link from 'next/link'; //to link diff pages
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di'; //for icons coming from the package

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; //styled components

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style = {{display:"flex", alignItems:"center", color : 'white', marginBottom:'20;' }}>
          <DiCssdeck size= "3rem "/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href = "https://github.com/ishikaa-2302">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "http://linkedin.com/in/ishika-gupta-0514241a9">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://www.instagram.com/ishikaa_2032/">
        <AiFillInstagram size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://twitter.com/ishikaa_2302">
        <AiFillTwitterCircle size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

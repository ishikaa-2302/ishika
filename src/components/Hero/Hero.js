import React from 'react';
import Link from 'next/link'; 
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There <br />
        Welcome to my website
      </SectionTitle>
      <SectionText>
      Hi! I'm Ishika Gupta, an aspiring MERN stack developer and a Competitive-Programming Enthausiast. I like to build and learn new things simultaneously.
      </SectionText>
      <Button><LinkItem href="https://docs.google.com/document/d/17Vosyws0AKfrCEt4MmpMktTGW-eIkwQo1T_KjUNj4vs/edit?usp=sharing" target="_blank"></LinkItem>Know More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
//onClick={() => window.location = ''} <Link href="#about"></Link>

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
      <Button onClick={() => window.location = '#about'}>Know More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
//onClick={() => window.location = ''} <Link href="#about"></Link>

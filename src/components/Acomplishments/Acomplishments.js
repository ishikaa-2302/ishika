import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10000, text: 'Lines of code written', },
  { number: 500, text: 'CP Questions Solved', },
  { number: 5, text: 'Projects built', },
  { number: 7, text: 'Programming Languages Known', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index)=>(
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
  </Section>

);
export default Acomplishments;

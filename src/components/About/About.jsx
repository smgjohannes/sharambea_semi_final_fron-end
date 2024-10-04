import React from 'react';
import {
  AboutContainer,
  AboutOverview,
  AboutSection,
  AboutTeam,
  AboutText,
  AboutTextContainer,
  AboutTitle,
} from './AboutStyles';
import Agents from '../Agents/Agents';

export const About = (props) => {
  return (
    <AboutContainer>
      <AboutSection>
        <AboutOverview>
          <AboutTitle>Overview</AboutTitle>
          <AboutTextContainer>
            <AboutText>
              Sharambea Properties boasts a team of highly experienced real
              estate professionals. The company prides itself on its knowledge
              of local property markets, ensuring that clients receive
              up-to-date and insightful advice.
            </AboutText>
            <AboutText>
              Sharambea Properties caters to a diverse clientele, including:
            </AboutText>
            <ul className='target-market-list'>
              <li>Homebuyers and sellers</li>
              <li>Commercial property investors</li>
              <li>Real estate developers</li>
              <li>Renters looking for residential and commercial spaces</li>
              <li>Corporate clients seeking office spaces</li>
            </ul>
          </AboutTextContainer>
        </AboutOverview>
        <AboutTeam>
          <AboutTitle>Our Team</AboutTitle>
          <Agents />
        </AboutTeam>
      </AboutSection>
    </AboutContainer>
  );
};

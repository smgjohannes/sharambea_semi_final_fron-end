import React from 'react';
import Card from '../Card';
import { FlexContainer } from '../ContainerElements';
import nangyImg from '../../assets/images/agents/nangy.jpeg';
import chelseaImg from '../../assets/images/agents/chelsea.jpg';

const Agents = () => {
  return (
    <FlexContainer>
      <>
        {[
          {
            id: 'AGENT-1',
            name: 'Chelsea',
            title: 'Principal Agent',
            photo: chelseaImg,
            description: ` +264 85 3833201`,
          },
          {
            id: 'AGENT-2',
            name: 'Nangy',
            title: 'Real Estate Agent ',
            photo: nangyImg,
            description: '+264 81 2036652',
          },
        ].map((r) => (
          <Card
            key={r.id}
            flexBasis={25}
            id={`agents-${r.id}`}
            link={'/agents'}
            img={r.photo}
            secondaryTitle={r.name}
            primaryTitle={r.title}
            description={r.description}
          />
        ))}
      </>
    </FlexContainer>
  );
};

export default Agents;

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
            description: `Properties: 15`,
          },
          {
            id: 'AGENT-2',
            name: 'Nangy',
            title: 'Real Estate Agent ',
            photo: nangyImg,
            description: 'Properties: 25',
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
            buttonText='Learn more'
          />
        ))}
      </>
    </FlexContainer>
  );
};

export default Agents;

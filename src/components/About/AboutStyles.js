import styled from 'styled-components';

export const AboutContainer = styled.div`
  position: relative;
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  padding: 25px 15px;

  @media (max-width: 56.25em) {
    font-size: 20px;
    flex-direction: column;
  }
`;

export const AboutOverview = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const AboutTeam = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const AboutTitle = styled.h3`
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 56.25em) {
    font-size: 20px;

    &:last-child {
      margin-top: 80px;
    }
  }
`;

export const AboutTextContainer = styled.div`
  position: relative;
  margin: 0px 15px;
  font-family: 'Roboto', sans-serif;

  & ul {
    font-size: 15px;
    list-style: none;
  }
`;

export const AboutText = styled.p`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  text-align: left;

  @media (max-width: 56.25em) {
    font-size: 14px;
  }
`;

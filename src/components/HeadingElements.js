import styled from 'styled-components';

export const Heading = styled.h1`
  position: relative;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? '700' : '500')};
  font-size: 36px;
  line-height: 42px;
  color: ${({ fontColor }) => (fontColor ? '#000' : '#fff')};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  &:after {
    content: '';
    height: 8px;
    width: 102px;
    background: #2ca58d;
    position: absolute;
    top: 2rem;
    left: 16rem;

    @media (max-width: 56.25em) {
      top: 19px;
      left: 126px;
    }
  }

  @media (max-width: 56.25em) {
    font-size: 28px;
  }
`;

export const HeadingPrimary = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 42px;
  color: ${(props) => props.fontColor || '#2ca58d'};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  @media (max-width: 56.25em) {
    font-size: 28px;
  }
`;

export const HeadingSecondary = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: ${(props) => props.fontColor || '#2ca58d'};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  @media (max-width: 56.25em) {
    font-size: 26px;
  }
`;

export const HeadingTertiary = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: ${(props) => props.fontColor || '#2ca58d'};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  @media (max-width: 56.25em) {
    font-size: 20px;
  }
`;

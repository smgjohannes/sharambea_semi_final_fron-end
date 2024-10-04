import styled from 'styled-components';

export const SectionContainer = styled.section`
  position: relative;
  background: ${(props) => props.backgroundColor || '#fff'};
  padding: 8px 0;
  margin: 40px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  @media (max-width: 56.25em) {
    margin: 20px 0;
  }
`;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const SectionContent = styled.div`
  position: relative;
  margin: ${(props) => props.margin || 30}px;

  @media (max-width: 56.25em) {
    margin: 15px;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  content: '';
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

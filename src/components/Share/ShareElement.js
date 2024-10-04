import styled from 'styled-components';

export const ShareContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 4rem;

  & > * {
    margin: 0.5rem;
  }

  @media (max-width: 56.25em) {
    justify-content: center;
    margin-top: 3rem;
  }
`;

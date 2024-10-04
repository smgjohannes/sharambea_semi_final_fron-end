import styled from 'styled-components';

export const ButtonPrimary = styled.a`
  font-family: 'Roboto';
  font-style: ${({ fontWeight }) => (fontWeight ? 'bold' : 'normal')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'normal')};
  line-height: 26px;
  background: ${({ primary }) => (primary ? '#2ca58d' : '#89e989')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-weight: ${({ fontWeight }) => (fontWeight ? '700' : '500')};
  font-size: ${({ fontBig }) => (fontBig ? '24px' : '18px')};
  border: 2px solid transparent;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? '#89e989' : '#2ca58d')};
    border: 2px solid ${({ primary }) => (primary ? '#2ca58d' : '#89e989')};
    color: #fff;
  }

  @media (max-width: 56.25em) {
    font-size: 1.8rem;
  }
`;

export const ButtonSecondary = styled.a`
  font-family: 'Roboto';
  font-style: ${({ fontWeight }) => (fontWeight ? 'bold' : 'normal')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'normal')};
  line-height: 26px;
  border: 2px solid ${({ white }) => (white ? '#2ca58d' : '#89e989')};
  white-space: nowrap;
  background: ${({ white }) => (white ? '#fff' : '#89e989')};
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-weight: ${({ fontWeight }) => (fontWeight ? '700' : '500')};
  font-size: ${({ fontBig }) => (fontBig ? '24px' : '18px')};
  cursor: pointer;
  outline: none;
  text-align: center;
  color: ${({ white }) => (white ? '#2ca58d' : '#fff')};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ white }) => (white ? '#2ca58d' : '#89e989')};
    border: 2px solid ${({ white }) => (white ? '#2ca58d' : '#89e989')};
    color: #fff;
  }

  @media (max-width: 56.25em) {
    font-size: 1.8rem;
  }
`;

export const ButtonLink = styled.a`
  font-family: 'Roboto';
  font-style: ${({ fontWeight }) => (fontWeight ? 'bold' : 'normal')};
  line-height: 26px;
  white-space: nowrap;
  background: transparent;
  padding: ${({ big }) => (big ? '14px 0px' : '16px 0px')};
  color: ${({ primary }) => (primary ? '#2ca58d' : '#89e989')};
  font-weight: ${({ fontWeight }) => (fontWeight ? '700' : '500')};
  font-size: ${({ fontBig }) => (fontBig ? '24px' : '18px')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'normal')};
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    color: ${({ primary }) => (primary ? '#89e989' : '#2ca58d')};
  }

  @media (max-width: 56.25em) {
    font-size: 1.8rem;
  }
`;

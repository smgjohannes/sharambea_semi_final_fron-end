import styled from 'styled-components';
import { FaCalendarAlt, FaMapMarker } from 'react-icons/fa';

export const CardContainer = styled.div`
  position: relative;
  margin-top: 3rem;
  background: #fff;
  transition: box-shadow 0.3s ease-in-out;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  flex: 1 ${(props) => props.flexBasis || 16}%;
  margin: 1rem;

  @media (max-width: 56.25em) {
    width: 100%;
    margin: 1rem 0.5rem;
  }
`;

export const CardMedia = styled.a`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const CardImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  color: #999999;

  @media (max-width: 56.25em) {
  }
`;

export const CardWrapper = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const CardHeading = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export const CardPrimaryTitle = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000;

  @media (max-width: 56.25em) {
    font-size: 18px;
  }
`;

export const CardSecondaryTitle = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #2ca58d;

  @media (max-width: 56.25em) {
    font-size: 16px;
  }
`;

export const CardMeta = styled.div`
  margin: 15px 0;
`;

export const CardMetaText = styled.p`
  color: #2ca58d;
  font-size: 14px;
  display: inline-block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;

export const CardDateIcon = styled(FaCalendarAlt)`
  font-size: 1.5rem;
  margin-right: 15px;
  margin-bottom: 0.2rem;
  transition: all 0.3s ease-in-out;
`;

export const CardLocation = styled.div`
  cursor: pointer;
  color: #39364f;
  display: flex;
  margin-top: 1.1rem;
  color: #39364f;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-left: 0.5rem;
  }
`;

export const CardLocationIcon = styled(FaMapMarker)`
  font-size: 1.5rem;
  margin-right: 15px;
  margin-bottom: 0.2rem;
  transition: all 0.3s ease-in-out;
`;

export const CardText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #7c859b;
  margin-bottom: 25px;
`;

export const CardCTA = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardButton = styled.a`
  font-family: 'Roboto';
  font-style: ${({ fontWeight }) => (fontWeight ? 'bold' : 'normal')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'normal')};
  line-height: 26px;
  background: #2ca58d;
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
    background: #89e989;
    color: #fff;
  }
`;

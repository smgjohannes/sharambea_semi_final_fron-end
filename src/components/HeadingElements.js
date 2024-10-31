import styled from "styled-components";
import heroBackground from "../assets/images/hero_bg_2.jpg";

export const Heading = styled.h1`
  position: relative;
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? "700" : "500")};
  font-size: 36px;
  line-height: 42px;
  color: ${({ fontColor }) => (fontColor ? "#000" : "#fff")};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);
  z-index: 999;

  &:after {
    content: "";
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 42px;
  color: ${(props) => props.fontColor || "#2ca58d"};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  @media (max-width: 56.25em) {
    font-size: 34px;
  }

  z-index: 999;
`;

export const HeadingSecondary = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  color: ${(props) => props.fontColor || "#2ca58d"};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  @media (max-width: 56.25em) {
    font-size: 28px;
  }

  z-index: 999;
`;

export const HeadingTertiary = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 42px;
  color: ${(props) => props.fontColor || "#2ca58d"};
  margin: ${(props) => props.margin || 30}px 0;
  transition: transform 0.6s cubic-bezier(0.64, 0, 0.78, 0);

  @media (max-width: 56.25em) {
    font-size: 30px;
  }

  z-index: 999;
`;

export const PageHeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 45vh;
  z-index: 8;
`;

export const PageHeaderOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
}


body {
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.6;
    background-color: #F5F5F5;
}

a {
    color: #2ca58d;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;

    &:hover {
      color: inherit;
    }
}

img {
  max-width: 100%;
  height: auto;
}

ul{
  list-style: none;
}



.m-0{
  margin: 0;
}

.animated{
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeIn{
  animation-name: fadeIn;
}

.m-md{
  margin: 0 2rem;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
 }


.dropdown-item{
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-decoration: none;
    margin: 8px 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

    &:hover {
      color: #fff;
      background-color: #2ca58d;
    }
 }

 .dropdown-toggle {
    margin: 8px 0;
 }

.dropdown-menu li {
  position: relative;
}

.dropdown-menu {
  padding: 10px 15px;
}

.dropdown:hover>.dropdown-menu {
  display: block;
}

.margin-top--sm{
  margin-top: 2rem;
}

.margin-top--md{
  margin-top: 4rem;
}

.margin-top--lg{
  margin-top: 6rem;
}

.margin-top--huge{
  margin-top: 10rem;
}

.margin-bottom--sm{
  margin-bottom: 2rem;
}

.margin-bottom--md{
  margin-bottom: 4rem;
}

.margin-bottom--lg{
  margin-bottom: 6rem;
}

.margin-bottom--huge{
  margin-bottom: 10rem;
}

.margin-sm{
  margin: 2rem;
}

.margin-md{
  margin: 4rem;
}

.margin-lg{
  margin: 6rem;
}

.margin-huge{
  margin: 8rem;
}

 /* PADDING */
.padding-top--sm{
  padding-top: 2rem;
}

.padding-top--md{
  padding-top: 4rem;
}

.padding-top--lg{
  padding-top: 6rem;
}

.padding-top--huge{
  padding-top: 10rem;
}

.padding-bottom--dm{
  padding-bottom: 2rem;
}

.padding-bottom--md{
  padding-bottom: 4rem;
}

.padding-bottom--lg{
  padding-bottom: 6rem;
}

.padding-bottom--huge{
  padding-bottom: 10rem;
}

.padding-sm{
  padding: 2rem;
}

.padding-md{
  padding: 4rem;
}

.padding-lg{
  padding: 6rem;
}

.padding-huge{
  padding: 8rem;
}

.empty{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 3rem;
  background: #fff;
  transition: box-shadow 0.3s ease-in-out;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  flex: 1 100%;
  margin: 1rem;

  @media (max-width: 56.25em) {
    width: 100%;
    margin: 1rem 0.5rem;
  }
}

.empty-title{
  font-size: 34px;
  font-weight: 700;
  color: #000;
}

.empty-message{
  font-size: 24px;
  line-height:1.6;
  padding: 25px 15px;
}

@media (max-width: 56.25em) {
  .empty-title{
    font-size: 24px;
  }

  .empty-message{
    font-size: 16px;
  }
}

`;

import { createGlobalStyle } from 'styled-components';
import bgDesc from '../img/Home-bg-desc.webp';
import bgMob from '../img/Mobile/statistics-bg-mob.webp';
import BgMobRetina from  '../img/Mobile/statistics-bg-mob@retina.webp'
import './variables.css';

export const Global = createGlobalStyle`

h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

img {
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

body{
  font-family: 'Poppins Regular';
  font-weight: 400;
  font-size: 18px;
  height: 100vh;
  color: #000;
  background-image: url(${bgDesc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    background-color: inherit !important;
    color: var(--text-forms);
}

@media screen and (max-width: 767px) {
  body {
    height: fit-content;
    background-image: url(${bgMob});
    background-position: bottom;
    /* Додаткові стилі для бекграунду на малих екранах */
  }

  @media only screen and (max-width: 767px) and (min-resolution: 192dpi) {
    body {
       background-image: url(${BgMobRetina};
        background-position: bottom;
    }
  }
`;

export default Global;

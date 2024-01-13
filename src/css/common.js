import { createGlobalStyle } from 'styled-components';
import bg from '../img/Home-bg-desc.webp'
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
  ${'' /* height: 100vh; */}
  color: #000;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
`;

export default Global;
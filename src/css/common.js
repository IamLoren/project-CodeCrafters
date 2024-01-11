import { createGlobalStyle } from 'styled-components';
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
  background: linear-gradient(
    to left top, 
    #6d54eb, 
    #652392);
}
`;

export default Global;
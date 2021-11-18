import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Montserrat:wght@400;700&display=swap');

html{
  box-sizing: border-box;
}
*,*::after, *::before{
box-sizing: inherit;
}

body{
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}
a,button{
   font-family: 'Montserrat', sans-serif;
}
`;

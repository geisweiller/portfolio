import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

#root {
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};
  
}

body,
input,
button,
a,
textarea {
  font: 500 1.4rem Poppins;
  color: ${(props) => (props.theme === true ? '#F5F5F5' : '#707070')};
} 

input, textarea {
  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};
}

a:visited {
  color: ${(props) => (props.theme === true ? '#F5F5F5' : '#707070')};
}

button {
  cursor: pointer;
}

`;
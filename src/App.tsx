import React from 'react';
import {styled, createGlobalStyle} from 'styled-components';
import Content from './Components/Content';
import Image from './Components/Image';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  font-family: 'Pretendard-Regular', sans-serif;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
  box-sizing: border-box;
}
button:active, button:focus {
  outline: none;
}
html {
  height: 100%;
}
img {
  margin-top: 10px;
}
`;

const FONTCOLOR = '#34495e';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: calc(100vh - 20px);
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 0;
`;

const H1 = styled.h1`
  color: ${FONTCOLOR};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <H1>Transmate</H1>
        <Image />
        <Content />
      </Container>
    </>
  );
}

export default App;

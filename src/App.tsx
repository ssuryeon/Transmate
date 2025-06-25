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

html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
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

* {
  box-sizing: border-box;
}

button:active, button:focus {
  outline: none;
}

img {
  margin-top: 10px;
}

blockquote {
  margin: 1em 0;
  padding-left: 1em;
  border-left: 4px solid #ccc;
  color: #555;
  background: #f9f9f9;
}

ul, ol {
  margin-left: 1.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

li {
  margin-bottom: 0.3em;
}

p {
  margin: 0.5em 0;
  line-height: 1.5;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}
`;


const FONTCOLOR = '#34495e';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 0;
  // border: 1px solid blue;
`;

const H1 = styled.h1`
  color: ${FONTCOLOR};
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 0;
  margin-top: 0;
  @media(max-width: 768px){
    font-size: 2rem;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  // justify-content: center;
  // align-items: center;
  margin: auto;
  // border: 1px solid red;
  @media(max-width: 768px){
    flex-direction: column;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <H1>Transmate</H1>
        <InnerContainer>
          <Image />
          <Content />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;

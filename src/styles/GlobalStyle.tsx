import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        font-size: 24px;
    }
    :root {
        --background-color : #F8F6F4;
        --font-color1 : #000;
        --stackcard-color : #E3F4F4; 
        --stackcard-shadow : #18122B;

        --light-color1 : #C4DFDF ;
        --light-color1 : #D2E9E9 ;
        --light-color1 : #E3F4F4 ;
        --light-color1 : #F8F6F4 ;
    }
    .dark-mode {
        --background-color : #18122B;
        --font-color1 : #fff;
        --stackcard-color : #393053;
        --stackcard-shadow : #D2E9E9;

        --dark-color1 : #635985 ;
        --dark-color1 : #443C68 ;
        --dark-color1 : #393053 ;
        --dark-color1 : #18122B ;
    }
    h1,h2,h3 {
        margin : 0;
    }
`;

export default GlobalStyle;

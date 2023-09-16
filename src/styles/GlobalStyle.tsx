import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        font-size: 3vh;
        background-color: var(--background-color);
    }
    :root {
        --background-color : #F8F6F4;
        --background-color2 : #ECEE81;

        --header-color : #A1C2F1;
        --font-color1 : #000;
        --font-color2 : #0A6EBD;
        --font-hover-color : #DAFFFB;
        --font-selected-color : #001C30;
        --stackcard-color : #E3F4F4; 
        --stackcard-shadow : #18122B;
        --marker-color : #11009E;

        --light-color1 : #C4DFDF ;
        --light-color1 : #D2E9E9 ;
        --light-color1 : #E3F4F4 ;
        --light-color1 : #F8F6F4 ;
    }
    .dark-mode {
        --background-color : #18122B;
        --background-color2 : #071952;

        --header-color : #0A6EBD;
        --font-color1 : #fff;
        --font-color2 : #A7ECEE;
        --font-hover-color : #001C30;
        --font-selected-color : #DAFFFB;
        --stackcard-color : #393053;
        --stackcard-shadow : #D2E9E9;
        --marker-color : #C4B0FF;

        --dark-color1 : #635985 ;
        --dark-color1 : #443C68 ;
        --dark-color1 : #393053 ;
        --dark-color1 : #18122B ;
    }
    h1,h2,h3,p {
        margin : 0;
    }
`;

export default GlobalStyle;

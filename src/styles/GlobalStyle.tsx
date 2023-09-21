import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'GmarketSansBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        font-size: 24px;
        background-color: var(--background-color);
        font-family: 'GmarketSansMedium';
    }
    :root {
        --background-color : #F8F6F4;
        --background-color2 : #ECEE81;
        --border-color : black;

        --header-color : #A1C2F1;
        --font-color1 : #000;
        --font-color2 : #0A6EBD;
        --font-hover-color : #DAFFFB;
        --font-selected-color : #001C30;
        --stackcard-color : #E3F4F4; 
        --stackcard-shadow : #18122B;
        --marker-color : #11009E;
    }
    .dark-mode {
        --background-color : #18122B;
        --background-color2 : #071952;
        --border-color : white;

        --header-color : #0A6EBD;
        --font-color1 : #fff;
        --font-color2 : #A7ECEE;
        --font-hover-color : #001C30;
        --font-selected-color : #DAFFFB;
        --stackcard-color : #393053;
        --stackcard-shadow : #D2E9E9;
        --marker-color : #C4B0FF;
    }
    h1,h2,h3,h4,h5,h6,button {
        font-family: 'GmarketSansBold';
    }
    h1,h2,h3,h4,h5,h6,p {
        margin : 0;
    }
`;

export default GlobalStyle;

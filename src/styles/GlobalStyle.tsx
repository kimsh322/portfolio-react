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
        --background-color2 : #CAEDFF;
        --border-color : black;

        --header-color : #A1C2F1;
        --font-color1 : #000;
        --font-color2 : #0A6EBD;
        --font-hover-color : #FBF0B2;
        --font-selected-color : #001C30;
        --stackcard-color : #E4F1FF; 
        --stack-header-color : #7091F5;
        --stackcard-shadow : #18122B;
        --marker-color : #11009E;
        --project-background-color : #75C2F6;
        --project-description-color : #CAEDFF;
    }
    .dark-mode {
        --background-color : #0E2954;
        --background-color2 : #1F6E8C;
        --border-color : white;

        --header-color : #0A6EBD;
        --font-color1 : #fff;
        --font-color2 : #A7ECEE;
        --font-hover-color : #FFC436;
        --font-selected-color : #DAFFFB;
        --stackcard-color : #5C8374;
        --stack-header-color : #183D3D;
        --stackcard-shadow : #D2E9E9;
        --marker-color : #C4B0FF;
        --project-background-color : #0E2954;
        --project-description-color : #1F6E8C;
    }
    h1,h2,h3,h4,h5,h6,button {
        font-family: 'GmarketSansBold';
    }
    h1,h2,h3,h4,h5,h6,p {
        margin : 0;
    }
`;

export default GlobalStyle;

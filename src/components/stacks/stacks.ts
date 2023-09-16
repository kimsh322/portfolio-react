import htmlImg from "../../assets/html-5.svg";
import cssImg from "../../assets/css-3.svg";
import javascriptImg from "../../assets/javascript.svg";
import typescriptImg from "../../assets/typescript-icon.svg";
import reactImg from "../../assets/react-original-wordmark.svg";
import reduxImg from "../../assets/redux-original.svg";
import styledComponentImg from "../../assets/file-type-styled.svg";
import githubImg from "../../assets/github.svg";
import figmaImg from "../../assets/figma.svg";
import postmanImg from "../../assets/postman.svg";
import nextjsImg from "../../assets/nextjs.svg";
import recoilImg from "../../assets/recoil.png";
import reactQueryImg from "../../assets/reactquery.svg";

export interface Stacks {
  stack: string;
  image: string;
  description: string;
}

type StacksCollection = Stacks[][];

export const stacksCollection: StacksCollection = [
  [
    { stack: "Html", image: htmlImg, description: "기본적인 마크업 사용이 가능합니다." },
    { stack: "Css", image: cssImg, description: "" },
    { stack: "Javascript", image: javascriptImg, description: "" },
    { stack: "Typescript", image: typescriptImg, description: "" },
  ],
  [
    { stack: "React", image: reactImg, description: "" },
    { stack: "Redux", image: reduxImg, description: "" },
    { stack: "Styled-Component", image: styledComponentImg, description: "" },
  ],
  [
    { stack: "Github", image: githubImg, description: "" },
    { stack: "Figma", image: figmaImg, description: "" },
    { stack: "Postman", image: postmanImg, description: "" },
  ],
  [
    { stack: "Next.js", image: nextjsImg, description: "" },
    { stack: "React-query", image: reactQueryImg, description: "" },
    { stack: "Recoil", image: recoilImg, description: "" },
  ],
];

import htmlImg from "../../assets/stacks/html-5.svg";
import cssImg from "../../assets/stacks/css-3.svg";
import javascriptImg from "../../assets/stacks/javascript.svg";
import typescriptImg from "../../assets/stacks/typescript-icon.svg";
import reactImg from "../../assets/stacks/react-original-wordmark.svg";
import reduxImg from "../../assets/stacks/redux-original.svg";
import styledComponentImg from "../../assets/stacks/file-type-styled.svg";
import githubImg from "../../assets/stacks/github.svg";
import figmaImg from "../../assets/stacks/figma.svg";
import postmanImg from "../../assets/stacks/postman.svg";
import nextjsImg from "../../assets/stacks/nextjs.svg";
import recoilImg from "../../assets/stacks/recoil.png";
import reactQueryImg from "../../assets/stacks/reactquery.svg";

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

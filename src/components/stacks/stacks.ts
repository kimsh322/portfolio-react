import html from "../../assets/html-5.svg";
import css from "../../assets/css-3.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript-icon.svg";
import react from "../../assets/react-original-wordmark.svg";
import redux from "../../assets/redux-original.svg";
import styledComponent from "../../assets/file-type-styled.svg";
import github from "../../assets/github.svg";
import figma from "../../assets/figma.svg";
import postman from "../../assets/postman.svg";
import nextjs from "../../assets/nextjs.svg";
import recoil from "../../assets/recoil.png";
import reactQuery from "../../assets/reactquery.svg";

export interface Stacks {
  [key: string]: string;
}

type StacksCollection = [string, Stacks][];

export const stacksCollection: StacksCollection = [
  ["Language & Markup", { Html: html, Css: css, Javascript: javascript, Typescript: typescript }],
  ["Library & FrameWork", { React: react, Redux: redux, "Styled-Component": styledComponent }],
  ["Tools", { Github: github, Figma: figma, Postman: postman }],
  ["Now Learning", { "Next.js": nextjs, "React-query": reactQuery, Recoil: recoil }],
];

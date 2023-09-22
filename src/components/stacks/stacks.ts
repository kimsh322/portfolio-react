import javascriptImg from "../../assets/img/stacks/javascript.svg";
import typescriptImg from "../../assets/img/stacks/typescript-icon.svg";
import reactImg from "../../assets/img/stacks/react-original-wordmark.svg";
import reduxImg from "../../assets/img/stacks/redux-original.svg";
import styledComponentImg from "../../assets/img/stacks/file-type-styled.svg";
import githubImg from "../../assets/img/stacks/github.svg";
import figmaImg from "../../assets/img/stacks/figma.svg";
import postmanImg from "../../assets/img/stacks/postman.svg";
import nextjsImg from "../../assets/img/stacks/nextjs.svg";
import recoilImg from "../../assets/img/stacks/recoil.png";
import reactQueryImg from "../../assets/img/stacks/reactquery.svg";

export interface Stacks {
  stack: string;
  image: string;
  description: string;
}

type StacksCollection = Stacks[][];

export const stacksCollection: StacksCollection = [
  [
    {
      stack: "Javascript",
      image: javascriptImg,
      description:
        "기본적인 문법을 익혔으며 간단한 애니메이션을 만들 수 있고 스코프, 실행 컨텍스트 등의 개념을 이해하고있습니다.",
    },
    {
      stack: "Typescript",
      image: typescriptImg,
      description: "필요한 타입을 지정할 수 있고 조건문, 함수 등을 통해 타입을 좁힐 수 있습니다.",
    },
  ],
  [
    {
      stack: "React",
      image: reactImg,
      description: "컴포넌트 단위의 코드를 작성할 수 있고 화면에 필요한 UI를 만들 수 있습니다.",
    },
    {
      stack: "Redux",
      image: reduxImg,
      description: "Flux 패턴을 이해하고 있고 store를 통한 전역상태관리를 할 수 있습니다.",
    },
    {
      stack: "Styled-Component",
      image: styledComponentImg,
      description: "CSS-in-JS의 개념을 이해하고 있고 컴포넌트단위로 스타일을 작성할 수 있습니다.",
    },
  ],
  [
    {
      stack: "Github",
      image: githubImg,
      description:
        "git을 통해 버전관리를 할 수 있으며 github을 통한 그룹 코드 관리 경험이 있습니다.",
    },
    {
      stack: "Figma",
      image: figmaImg,
      description:
        "Figma를 통해 간단한 와이어프레임을 만들 수 있고 주어진 Figma 작업물을 이해할 수 있습니다.",
    },
    {
      stack: "Postman",
      image: postmanImg,
      description: "postman으로 http 메서드에 따른 api 테스트를 할 수 있습니다.",
    },
  ],
  [
    {
      stack: "Next.js",
      image: nextjsImg,
      description:
        "SSR,SSG등 렌더링 방식, pre-fetching,hydrate 등의 최적화에 대해 학습하여 프로젝트 제작중입니다.",
    },
    {
      stack: "React-query",
      image: reactQueryImg,
      description: "서버로 데이터 요청을 보낼 때 여러가지 기능을 가진 React-query를 실습중입니다.",
    },
    {
      stack: "Recoil",
      image: recoilImg,
      description: "Flux 패턴의 redux와 Atomic 패턴의 recoil의 장단점에 대해 학습중입니다.",
    },
  ],
];

import { ProjectContents } from "../typing-practice/typingPractice";
import mainImg from "./img/main_signin.png";
import navImg from "./img/nav_and_header.gif";
import todaylistImg from "./img/todaylist.gif";
import todayEndImg from "./img/todayend.gif";
import historyImg from "./img/history.gif";
import mobileImg1 from "./img/moblie-image1.png";
import mobileImg2 from "./img/mobile-image2.png";

export const todolistContents: ProjectContents = {
  title: "Todolist",
  introduce: "history를 볼 수 있는 todolist입니다.",
  image: [mainImg, navImg, todaylistImg, todayEndImg, historyImg, mobileImg1, mobileImg2],
  period: "2023.03 ~ 2023.04",
  team: "개인 프로젝트",
  testId: { id: "kim@google.com", password: "qwe123" },
  stacks: "Typescript, React, Redux, Firebase, Styled-Component",
  link: {
    deploy: "https://todolist-75cfc.web.app/",
    github: "https://github.com/kimsh322/todolist-ts",
  },
  implement: [
    "회원가입 및 로그인 기능",
    "할일 List CRUD 기능 및 저장기능",
    "이전에 작성한 Todolist 볼 수 있는 기능",
    "반응형 웹으로 구현",
  ],
  description: [
    "typescript를 이용한 프로젝트입니다.",
    "달력을 만들어 해당 날짜의 todolist와 메모를 볼 수 있도록 로직을 작성하였습니다.",
    "Redux-toolkit, 세션 스토리지를 활용하여 로그인 상태를 유지했습니다.",
    "Firebase의 auth, FireStore를 이용한 인증 및 데이터베이스 사용법에 대해 학습했습니다.",
    "비슷한 형태의 modal창을 custom hook으로 만들어 반복되는 코드를 줄여보았습니다.",
    "지인의 피드백을 받아 모바일로도 볼 수 있도록 media query를 이용한 반응형웹으로 구현했습니다.",
  ],
};

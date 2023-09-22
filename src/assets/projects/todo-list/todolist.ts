import { ProjectContent } from "../typing-practice/typingPractice";

export const typingPractice: ProjectContent = {
  title: "Todolist",
  introduce: "history를 볼 수 있는 todolist입니다.",
  image: [],
  period: "2023.03 ~ 2023.04",
  team: "개인 프로젝트",
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
    "",
    "Firebase의 auth, FireStore를 이용한 인증 및 데이터베이스 사용법에 대해 학습했습니다.",
    "지인의 피드백을 받아 모바일로도 볼 수 있도록 media query를 이용한 반응형웹으로 구현했습니다.",
  ],
};
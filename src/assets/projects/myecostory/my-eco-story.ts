import { ProjectContents } from "../typing-practice/typingPractice";
import homeImg from "./img/home-img.png";
import boardListImg from "./img/board-list-img.png";
import boardDetailImg from "./img/board-detail-img.png";
import writeImg from "./img/write-img.png";
import loginImg from "./img/login-img.png";
import userImg from "./img/user-img.png";
import bookmarkImg from "./img/bookmark-img.png";

export const myecostoryContents: ProjectContents = {
  title: "나만의 친환경",
  introduce: "친환경 주제의 커뮤니티 웹사이트 입니다.",
  image: [homeImg, boardListImg, boardDetailImg, writeImg, loginImg, userImg, bookmarkImg],
  period: "2023.04 ~ 2023.06",
  team: "FE 3인 BE 3인",
  testId: { id: "kim@google.com", password: "qwer1234" },
  stacks: "Typescript, React, Redux, Styled-Component,Vite, Quill-editor",
  link: {
    deploy: "http://ourecostory.s3-website.ap-northeast-2.amazonaws.com/",
    github: "https://github.com/codestates-seb/seb43_main_007",
    blog: "https://riverpigeon.tistory.com/207",
  },
  implement: [
    "회원가입 및 로그인(Oauth포함) 기능",
    "글쓰기, 댓글쓰기 등 게시판 기능",
    "좋아요, 북마크, 관리자 채택글 기능",
  ],
  description: [
    "로그인,회원가입, 홈 화면, 마이페이지 북마크 부분을 담당했습니다.",
    "JWT를 통한 인증을 구현하면서 인증보안 관련 학습을 할 수 있었습니다.",
    "React-hook-form 도입을 제안하여 Input 태그의 확장성과 효율성을 확보할 수 있었습니다.",
    "캐러셀 UI를 구현하면서 개발자의 Trick(무한 캐러셀효과)을 학습할 수 있었고, 구현에 있어 생각을 넓힐 수 있는 계기가 되었습니다.",
    "ESlint, Prettier를 사용하여 코드 컨벤션을 통일해 conflict를 최소화하여 작업 효율을 높였습니다.",
    "Github Action을 통한 배포 자동화로 생산성을 향상시켰습니다.",
    "기획부터 배포까지 진행하여 하나의 프로젝트가 어떻게 시작되고 끝나는지 흐름을 파악할 수 있었습니다.",
    "프로젝트를 진행하면서 수시로 요구사항과 기능이 변하는 상황에서 프론트엔드와 벡엔드의 소통의 중요성 학습할 수 있었습니다.",
  ],
};

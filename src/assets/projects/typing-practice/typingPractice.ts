import entranceImg from "./img/entrance_page.gif";
import gameoverImg from "./img/Gameover.gif";
import matchImg from "./img/match_type.gif";
import rankingImg from "./img/ranking_rule.gif";
import startImg from "./img/start.gif";

export interface TestId {
  id: string;
  password: string;
}

export interface ProjectContents {
  title: string;
  introduce: string;
  testId?: TestId;
  image: string[];
  period: string;
  team: string;
  stacks: string;
  link: {
    deploy: string;
    github: string;
    blog?: string;
  };
  implement: string[];
  description: string[];
}

export const typingPracticeContents: ProjectContents = {
  title: "타자연습게임",
  introduce: "화면에 나오는 단어를 타자로 쳐서 없애 점수를 얻는 게임입니다.",
  image: [matchImg, entranceImg, startImg, rankingImg, gameoverImg],
  period: "2023.01 ~ 2023.02",
  team: "개인 프로젝트",
  stacks: "HTML, CSS, Vanilla Javascript",
  link: {
    deploy: "https://kimsh322.github.io/typing-practice/",
    github: "https://github.com/kimsh322/typing-practice",
    blog: "https://riverpigeon.tistory.com/135",
  },
  implement: [
    "화면 내에 단어 랜덤으로 생성, 입력시 삭제 후 점수가 올라가는 시스템 구현",
    "setInterval을 이용한 간단한 js 애니메이션 구현",
    "로컬 스토리지를 활용한 랭킹 시스템 구현",
  ],
  description: [
    "외부모듈 없이 vanilla javascript로 만든 프로젝트입니다.",
    "웹개발 기본을 배운 후 이것으로 실제 웹사이트를 어떻게 만드는지 알고싶어 무작정 시작해봤습니다.",
    "이 프로젝트를 통해 html의 기본 작성법, css 레이아웃 및 정렬, dom 조작 방법 및 간단한 js 애니메이션에 대해 학습하였습니다.",
    "첫 프로젝트를 통해 웹페이지가 어떻게 만들어지는지 알게 되었고, 개발에 몰입하는 계기가 되었습니다.",
  ],
};

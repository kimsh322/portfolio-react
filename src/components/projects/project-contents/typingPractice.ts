import entranceImg from "../../../assets/typing-practice/entrance_page.gif";
import gameoverImg from "../../../assets/typing-practice/Gameover.gif";
import matchImg from "../../../assets/typing-practice/match_type.gif";
import rankingImg from "../../../assets/typing-practice/ranking_rule.gif";
import startImg from "../../../assets/typing-practice/start.gif";

export interface ProjectContent {
  title: string;
  image: string[];
  period: string;
  team: string;
  stacks: string;
  link: {
    deploy: string;
    github: string;
    blog?: string;
  };
  description: string[];
}

export const typingPractice: ProjectContent = {
  title: "타자연습게임",
  image: [matchImg, entranceImg, startImg, rankingImg, gameoverImg],
  period: "2023.01 ~ 2023.02",
  team: "개인 프로젝트",
  stacks: "Vanilla Javascript",
  link: {
    deploy: "https://kimsh322.github.io/typing-practice/",
    github: "https://github.com/kimsh322/typing-practice",
    blog: "https://riverpigeon.tistory.com/135",
  },
  description: [
    "Html, Css, Vanilla Javascript 만을 사용하여 만든 프로젝트입니다.",
    "웹개발 기본을 배운 후 이것으로 실제 웹사이트를 어떻게 만드는지 알고싶어 무작정 시작해봤습니다.",
    "이 프로젝트를 통해 html의 기본 작성법, css 레이아웃 및 정렬, 그리고 dom 조작 방법에 대해 학습하였습니다.",
    "setTimeout, setInterval을 통해 box 내부 단어 생성 및 소멸 이벤트를 만들어보았고,",
    "로컬 스토리지를 활용한 랭킹 시스템도 만들어보았습니다.",
    "첫 프로젝트를 통해 웹페이지가 어떻게 만들어지는지 알게 되었고, 개발에 몰입하는 계기가 되었습니다.",
  ],
};

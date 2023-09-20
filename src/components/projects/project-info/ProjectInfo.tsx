import styled from "styled-components";
import { ProjectContent } from "../project-contents/typingPractice";
import ProjectInfoLink from "./ProjectInfoLink";
import ProjectInfoImplement from "./ProjectInfoImplement";

interface Props {
  project: ProjectContent;
}

const ProjectInfo = ({ project }: Props) => {
  const { introduce, period, team, stacks } = project;
  const parsingTitle = ["간단소개", "기간", "팀", "사용스택"];
  const parsingList = [introduce, period, team, stacks];

  return (
    <ProjectInfoContainer>
      <ProjectInfoLink link={project.link} />
      {parsingList.map((list, idx) => {
        return (
          <li className="info-line" key={list}>
            <div className="list-title">{parsingTitle[idx]}</div>
            <div className="list-description">{list}</div>
          </li>
        );
      })}
      <ProjectInfoImplement implement={project.implement} />
    </ProjectInfoContainer>
  );
};

const ProjectInfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  background-color: var(--background-color);
  border: 0.5px solid black;
  margin: 0;
  padding: 5% 2%;
  font-size: 0.7em;
  .info-line {
    display: flex;
    width: 100%;
    height: 15%;
    list-style: none;
    .list-title {
      margin-right: 5%;
      width: 20%;
      font-family: "GmarketSansBold";
    }
    .list-description {
      width: 80%;
    }
  }
`;

export default ProjectInfo;

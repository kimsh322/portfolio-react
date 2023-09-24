import styled from "styled-components";
import { ProjectContents } from "../../../assets/projects/typing-practice/typingPractice";
import ProjectInfoLink from "./ProjectInfoLink";
import ProjectInfoImplement from "./ProjectInfoImplement";
import ProjectTestId from "./ProjectTestId";

interface Props {
  project: ProjectContents;
}

const ProjectInfo = ({ project }: Props) => {
  const { introduce, period, team, stacks, link } = project;
  const parsingTitle = ["간단소개", "기간", "팀", "사용스택"];
  const parsingList = [introduce, period, team, stacks];

  return (
    <ProjectInfoContainer>
      <ProjectInfoLink links={link} />
      {project.testId && <ProjectTestId testId={project.testId} />}
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
  background-color: var(--project-description-color);
  border: 0.5px solid var(--border-color);
  margin: 0;
  padding: 5% 2%;
  font-size: 0.7em;
  border-radius: 5px 0 0 5px;
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
  @media (max-width: 1024px) {
    width: 90%;
    padding: 3% 2%;
    border-radius: 5px 5px 0 0;
    .info-line {
      height: 50px;
    }
  }
  @media (max-width: 550px) {
    font-size: 0.6em;
  }
  @media (max-width: 400px) {
    .info-line {
      .list-title {
        font-size: 0.9em;
      }
    }
  }
`;

export default ProjectInfo;

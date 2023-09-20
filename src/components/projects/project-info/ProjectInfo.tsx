import styled from "styled-components";
import { ProjectContent } from "../project-contents/typingPractice";

interface Props {
  project: ProjectContent;
}

const ProjectInfo = ({ project }: Props) => {
  const { introduce, period, team, stacks } = project;
  const parsingTitle = ["간단소개", "기간", "팀", "사용스택"];
  const parsingList = [introduce, period, team, stacks];

  return (
    <ProjectInfoContainer>
      <li className="info-line">
        <div className="list-title">관련 링크</div>
        <div className="list-description">
          <a href={project.link.deploy} className="link" target="_blank">
            배포 링크
          </a>
          <a href={project.link.github} className="link" target="_blank">
            Github
          </a>
          <a href={project.link.blog} className="link" target="_blank">
            회고 블로그
          </a>
        </div>
      </li>
      {parsingList.map((list, idx) => {
        return (
          <li className="info-line" key={list}>
            <div className="list-title">{parsingTitle[idx]}</div>
            <div className="list-description">{list}</div>
          </li>
        );
      })}
      {
        <li className="info-line">
          <div className="list-title">기능</div>
          <ul className="implement-lists-container">
            {project.implement.map((list) => {
              return (
                <li className="implement-list" key={list}>
                  {list}
                </li>
              );
            })}
          </ul>
        </li>
      }
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
      .link {
        text-decoration: none;
        margin-right: 0.5em;
        color: var(--font-color2);
      }
    }
    .implement-lists-container {
      width: 80%;
      padding: 0;
      .implement-list {
        list-style: square;
      }
    }
  }
`;

export default ProjectInfo;

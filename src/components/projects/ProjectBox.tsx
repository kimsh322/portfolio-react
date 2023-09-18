import styled from "styled-components";
import Carousel from "./carousel/Carousel";
import { ProjectContent } from "./project-contents/typingPractice";

interface Props {
  project: ProjectContent;
}

const ProjectBox = ({ project }: Props) => {
  return (
    <ProjectBoxContainer>
      <h3>{project.title}</h3>
      <Carousel project={project} />
      <div className="contents">
        <div className="left-content">왼쪽 인포</div>
        <div className="right-content">오른쪽 설명</div>
      </div>
    </ProjectBoxContainer>
  );
};

const ProjectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: skyblue;
  width: 70%;
  height: 1300px;
  margin: 5% 0;
  padding: 2%;
  .contents {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 55%;
    margin-top: 2%;
    .left-content,
    .right-content {
      width: 45%;
      height: 100%;
      background-color: #fff;
      border: 0.5px solid black;
    }
  }
`;

export default ProjectBox;

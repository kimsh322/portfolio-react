import styled from "styled-components";
import Carousel from "./carousel/Carousel";
import { ProjectContents } from "../../assets/projects/typing-practice/typingPractice";
import { useState } from "react";
import ProjectInfo from "./project-info/ProjectInfo";
import ProjectDescription from "./project-description/ProjectDescription";

interface Props {
  project: ProjectContents;
}

const ProjectBox = ({ project }: Props) => {
  const [imageNumber, setImageNumber] = useState(1);
  const maxLength = project.image.length;

  const pageNumber = (num: number, maxLength: number) => {
    if (num === 0) return maxLength;
    if (num > maxLength) return 1;
    return num;
  };

  return (
    <ProjectBoxContainer>
      <h3>{project.title}</h3>
      <Carousel
        projectImgs={project.image}
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
      />
      <span className="page-number">{` ${pageNumber(imageNumber, maxLength)} / ${maxLength}`}</span>
      <div className="contents">
        <ProjectInfo project={project} />
        <ProjectDescription descriptions={project.description} />
      </div>
    </ProjectBoxContainer>
  );
};

const ProjectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--project-background-color);
  width: 70%;
  min-width: 1000px;
  margin: 5% 0;
  padding: 2%;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  border-radius: 10px;
  .contents {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 600px;
    margin-top: 2%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 0px;
    .contents {
      flex-direction: column;
      justify-content: start;
      align-items: center;
      height: auto;
    }
  }
  @media (max-width: 550px) {
    .page-number {
      font-size: 0.7em;
    }
  }
`;

export default ProjectBox;

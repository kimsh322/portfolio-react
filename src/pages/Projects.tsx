import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";
import { typingPractice } from "../components/projects/project-contents/typingPractice";

const parsingProjects = [typingPractice];

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      {parsingProjects.map((project) => {
        return <ProjectBox key={project.title} project={project} />;
      })}
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2%;
  background-color: var(--background-color2);
`;

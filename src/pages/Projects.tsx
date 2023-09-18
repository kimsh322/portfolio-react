import styled from "styled-components";
import Project from "../components/projects/Project";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <Project />
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
`;

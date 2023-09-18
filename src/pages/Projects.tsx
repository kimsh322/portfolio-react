import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectBox />
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

import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";
import { typingPracticeContents } from "../assets/projects/typing-practice/typingPractice";
import { todolistContents } from "../assets/projects/todo-list/todolist";
import { myecostoryContents } from "../assets/projects/myecostory/my-eco-story";

const parsingProjects = [myecostoryContents, todolistContents, typingPracticeContents];

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
  padding: 7% 2% 2% 2%;
  background-color: var(--background-color2);
`;

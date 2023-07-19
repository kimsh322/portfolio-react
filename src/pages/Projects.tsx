import { motion } from "framer-motion";
import styled from "styled-components";

const Projects = () => {
  return (
    <ProjectsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      Projects
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 1000px;
  padding: 2%;
`;

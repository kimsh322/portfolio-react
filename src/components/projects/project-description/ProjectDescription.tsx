import styled from "styled-components";

interface Props {
  descriptions: string[];
}

const ProjectDescription = ({ descriptions }: Props) => {
  return (
    <ProjectDescriptionContainer>
      <h3>상세 설명</h3>
      {descriptions.map((description) => {
        return <li className="list">{description}</li>;
      })}
    </ProjectDescriptionContainer>
  );
};

const ProjectDescriptionContainer = styled.ul`
  width: 45%;
  background-color: var(--project-description-color);
  border: 0.5px solid var(--border-color);
  margin: 0;
  padding: 5% 2%;
  font-size: 0.7em;
  border-radius: 0 5px 5px 0;
  .list {
    margin-top: 3%;
  }
`;

export default ProjectDescription;

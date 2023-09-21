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
  height: 100%;
  background-color: var(--background-color);
  border: 0.5px solid var(--border-color);
  margin: 0;
  padding: 5% 2%;
  font-size: 0.7em;
  .list {
    margin-top: 3%;
  }
`;

export default ProjectDescription;

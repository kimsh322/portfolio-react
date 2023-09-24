import styled from "styled-components";

interface Props {
  descriptions: string[];
}

const ProjectDescription = ({ descriptions }: Props) => {
  return (
    <ProjectDescriptionContainer>
      <h3>상세 설명</h3>
      {descriptions.map((description) => {
        return (
          <li className="list" key={description}>
            {description}
          </li>
        );
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
  @media (max-width: 1024px) {
    width: 90%;
    padding: 5% 4%;
    border-radius: 0 0 5px 5px;
  }
  @media (max-width: 550px) {
    font-size: 0.6em;
  }
  @media (max-width: 400px) {
    padding-left: 5.5%;
    font-size: 0.5em;
  }
`;

export default ProjectDescription;

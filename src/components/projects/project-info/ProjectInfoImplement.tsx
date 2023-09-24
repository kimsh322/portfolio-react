import styled from "styled-components";

interface Props {
  implement: string[];
}

const ProjectInfoImplement = ({ implement }: Props) => {
  return (
    <ProjectInfoImplementContainer>
      <div className="list-title">기능</div>
      <ul className="implement-lists-container">
        {implement.map((list) => {
          return (
            <li className="implement-list" key={list}>
              {list}
            </li>
          );
        })}
      </ul>
    </ProjectInfoImplementContainer>
  );
};

const ProjectInfoImplementContainer = styled.li`
  display: flex;
  width: 100%;
  height: 15%;
  list-style: none;
  .list-title {
    margin-right: 5%;
    width: 20%;
    font-family: "GmarketSansBold";
  }
  .implement-lists-container {
    width: 80%;
    padding: 0;
    .implement-list {
      list-style: square;
    }
  }
  @media (max-width: 1024px) {
    height: auto;
  }
  @media (max-width: 550px) {
    margin-top: 10px;
  }
  @media (max-width: 400px) {
    .list-title {
      font-size: 0.9em;
    }
  }
`;

export default ProjectInfoImplement;

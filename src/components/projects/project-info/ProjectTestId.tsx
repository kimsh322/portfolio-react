import styled from "styled-components";
import { TestId } from "../../../assets/projects/typing-practice/typingPractice";

interface Props {
  testId: TestId;
}

const ProjectTestId = ({ testId }: Props) => {
  return (
    <ProjectTestIdContainer>
      <div className="list-title">테스트</div>
      <div className="list-description">
        <p className="test-id">아이디 : {testId.id}</p>
        <p>비밀번호 : {testId.password}</p>
      </div>
    </ProjectTestIdContainer>
  );
};

const ProjectTestIdContainer = styled.li`
  display: flex;
  width: 100%;
  height: 15%;
  list-style: none;
  .list-title {
    margin-right: 5%;
    width: 20%;
    font-family: "GmarketSansBold";
  }
  .list-description {
    width: 80%;
  }
  @media (max-width: 1024px) {
    height: 50px;
  }
  @media (max-width: 400px) {
    .list-title {
      font-size: 0.9em;
    }
  }
`;

export default ProjectTestId;

import styled from "styled-components";
import { StackProps } from "./StackCard";

const StackDescription = ({ title, stacks }: StackProps) => {
  return (
    <StackDescriptionContainer>
      <h3 className="title">{title}</h3>
      <ul className="list-container">
        {Object.keys(stacks).map((stack) => {
          return (
            <li key={stack} className="list-item">
              {stack}
            </li>
          );
        })}
      </ul>
    </StackDescriptionContainer>
  );
};

export default StackDescription;

const StackDescriptionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  .title {
    text-align: center;
  }
  .list-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
  }
  .list-item {
    margin-top: 1%;
  }
`;

import styled from "styled-components";
import { StackProps } from "./StackCard";

const StackDescription = ({ title, stacks }: StackProps) => {
  return (
    <StackDescriptionContainer>
      <h3>{title}</h3>
      <ul>
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
  .list-item {
    margin-top: 1%;
  }
`;

import styled from "styled-components";
import { StackProps } from "./StackCard";

const StackImage = ({ title, stacks }: StackProps) => {
  return (
    <StackImageContainer>
      <h3>{title}</h3>
      <div>
        {Object.keys(stacks).map((stack) => {
          return <img src={stacks[stack]} alt={`${stack}`} key={stack} className="icon" />;
        })}
      </div>
    </StackImageContainer>
  );
};

export default StackImage;

const StackImageContainer = styled.div`
  .icon {
    width: 45%;
    height: 100px;
    margin: 1% 0;
  }
`;

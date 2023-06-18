import styled from "styled-components";
import { StackProps } from "./StackCard";

const StackImage = ({ title, stacks }: StackProps) => {
  return (
    <StackImageContainer>
      <h3 className="title">{title}</h3>
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
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  .title {
    text-align: center;
  }
  .icon {
    width: 45%;
    height: 100px;
    margin: 1% 0;
  }
`;

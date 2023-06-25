import styled from "styled-components";
import { StackProps } from "./StackCard";

const StackImage = ({ title, stacks }: StackProps) => {
  return (
    <StackImageContainer>
      <h3 className="title">{title}</h3>
      <div className="icon-container">
        {Object.keys(stacks).map((stack) => {
          return (
            <div key={stack} className="icon-box">
              <img src={stacks[stack]} alt={`${stack}`} className="icon" />
            </div>
          );
        })}
      </div>
    </StackImageContainer>
  );
};

export default StackImage;

const StackImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  .title {
    text-align: center;
  }
  .icon-container {
    width: 100%;
    height: 100%;
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .icon-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    max-height: 8vw;
    min-height: 100px;
    margin: 5%;
  }
`;

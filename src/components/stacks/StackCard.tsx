import styled from "styled-components";
import { Stacks } from "./stacks";
import StackImage from "./StackImage";
import StackDescription from "./StackDescription";

export interface StackProps {
  title: string;
  stacks: Stacks;
}

const StackCard = ({ title, stacks }: StackProps) => {
  return (
    <StackCardContainer>
      <div className="card">
        <StackDescription title={title} stacks={stacks} />
        <StackImage title={title} stacks={stacks} />
      </div>
    </StackCardContainer>
  );
};

export default StackCard;

const StackCardContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 45%;
  height: 50%;
  background-color: var(--stackcard-color);
  margin: 1% 1%;
  padding: 2%;
  border-radius: 10px;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  cursor: pointer;
  &:hover .card {
    transform: rotateY(180deg);
  }
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: color 0.1s, transform 0.5s;
    transform-style: preserve-3d;
  }
`;

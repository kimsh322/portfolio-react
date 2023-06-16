import styled from "styled-components";
import { Stacks } from "./stacks";

interface Props {
  title: string;
  stacks: Stacks;
}

const StackCard = ({ title, stacks }: Props) => {
  return (
    <StackCardContainer>
      <h3>{title}</h3>
      <div>
        {Object.keys(stacks).map((stack) => {
          return <img src={stacks[stack]} alt={`${stack}`} key={stack} className="icon" />;
        })}
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
  transition: color 0.1s, background-color 0.3s, transform 0.3s;
  &:hover {
    transform: translateY(-10px);
    transition: color 0.1s, background-color 0.3s, transform 0.3s;
  }
  .icon {
    width: 45%;
    height: 100px;
    margin: 1% 0;
  }
`;

import styled from "styled-components";
import { Stacks } from "./stacks";
import { useState } from "react";
import StackImage from "./StackImage";
import StackDescription from "./StackDescription";

export interface StackProps {
  title: string;
  stacks: Stacks;
}

const StackCard = ({ title, stacks }: StackProps) => {
  const [isDescription, setIsDescription] = useState(false);
  return (
    <StackCardContainer onMouseOver={() => setIsDescription(true)} onMouseOut={() => setIsDescription(false)}>
      {isDescription ? <StackDescription title={title} stacks={stacks} /> : <StackImage title={title} stacks={stacks} />}
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
`;

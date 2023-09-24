import { useEffect, useState } from "react";
import styled from "styled-components";
import { Stacks, stacksCollection } from "./stacks";
import StackDescription from "./StackDescription";

interface Props {
  idx: number;
}

const StackContents = ({ idx }: Props) => {
  const initialTabContents = [{ stack: "", image: "", description: "" }];
  const [tabContents, setTabContents] = useState<Stacks[]>(initialTabContents);
  useEffect(() => {
    setTabContents(stacksCollection[idx]);
  }, [idx]);

  return (
    <StackContentsContainer>
      {tabContents.map((tabContent) => {
        return <StackDescription key={tabContent.stack} tabContent={tabContent} />;
      })}
    </StackContentsContainer>
  );
};

const StackContentsContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  background-color: var(--stackcard-color);
  width: 100%;
  height: 85%;
  padding: 2%;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default StackContents;

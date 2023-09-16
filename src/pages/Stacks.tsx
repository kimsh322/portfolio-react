import styled from "styled-components";
import StackHeader from "../components/stacks/StackHeader";
import { useState } from "react";
import StackContents from "../components/stacks/StackContents";

const Stacks = () => {
  const initialTabState = [true, false, false, false];
  const [tabState, setTabState] = useState(initialTabState);
  return (
    <StacksContainer>
      <div className="tab-box">
        <StackHeader tabState={tabState} setTabState={setTabState} />
        <StackContents idx={tabState.indexOf(true)} />
      </div>
    </StacksContainer>
  );
};

export default Stacks;

const StacksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 2%;
  margin-top: 3%;
  background-color: var(--background-color2);
  transition: background-color 0.3s;
  .tab-box {
    display: flex;
    flex-direction: column;
    background-color: skyblue;
    width: 70%;
    height: 80%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  }
`;

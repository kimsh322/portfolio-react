import styled from "styled-components";
import StackHeader from "../components/stacks/StackHeader";
import { useState } from "react";
import StackContents from "../components/stacks/StackContents";

const Stacks = () => {
  const initialTabState = [true, false, false, false];
  const [tabState, setTabState] = useState(initialTabState);
  return (
    <StacksContainer>
      <h2>Stacks</h2>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 750px;
  padding: 1%;
  margin-top: 3%;
  background-image: linear-gradient(
    to top,
    var(--background-color2) 0%,
    var(--background-color) 100%
  );

  .tab-box {
    display: flex;
    flex-direction: column;
    background-color: skyblue;
    width: 70%;
    min-width: 900px;
    height: 80%;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 3%;
    box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  }

  @media (max-width: 1024px) {
    .tab-box {
      width: 100%;
      min-width: 0px;
    }
  }
`;

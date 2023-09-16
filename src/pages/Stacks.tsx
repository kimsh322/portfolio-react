import styled from "styled-components";
import StackHeader from "../components/stacks/StackHeader";
import { useState } from "react";

const Stacks = () => {
  const initialTabState = [true, false, false, false];
  const [tabState, setTabState] = useState(initialTabState);
  return (
    <StacksContainer>
      <div className="tab-box">
        <StackHeader tabState={tabState} setTabState={setTabState} />
      </div>
    </StacksContainer>
  );
};

export default Stacks;

const StacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2%;
  margin-top: 3%;
  .tab-box {
    display: flex;
    background-color: skyblue;
    width: 70%;
    height: 80%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  }
`;

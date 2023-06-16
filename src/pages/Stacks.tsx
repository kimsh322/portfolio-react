import styled from "styled-components";
import StackCard from "../components/stacks/StackCard";
import { stacksCollection } from "../components/stacks/stacks";

const Stacks = () => {
  return (
    <StacksContainer>
      <h1 className="header">My Stacks</h1>
      <div className="card-container">
        {stacksCollection.map((stacksArr) => {
          return <StackCard key={stacksArr[0]} title={stacksArr[0]} stacks={stacksArr[1]} />;
        })}
      </div>
    </StacksContainer>
  );
};

export default Stacks;

const StacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 100%;
  padding: 2%;
  .header {
    width: 100%;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    height: 90%;
  }
`;

import styled from "styled-components";
import StackCard from "../components/stacks/StackCard";

const Stacks = () => {
  return (
    <StacksContainer>
      <h1 className="header">My Stacks</h1>
      <div className="card-container">
        <StackCard />
        <StackCard />
        <StackCard />
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
    width: 90%;
    height: 80%;
    margin-top: 1%;
  }
`;

import styled from "styled-components";
import { Stacks } from "./stacks";

interface Props {
  tabContent: Stacks;
}

const StackDescription = ({ tabContent }: Props) => {
  return (
    <StackDescriptionContainer>
      <div className="image-box">
        <img src={tabContent.image} alt={tabContent.stack} />
      </div>
      <div className="description-box">
        <span className="stack">{tabContent.stack}</span>
        <p className="description">{tabContent.description}</p>
      </div>
    </StackDescriptionContainer>
  );
};

const StackDescriptionContainer = styled.div`
  display: flex;
  .image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    img {
      width: 100px;
    }
  }
  .description-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    .stack {
      font-family: "GmarketSansBold";
      font-size: 1em;
      margin-bottom: 4%;
    }
    .description {
      font-size: 0.7em;
    }
  }
  @media (max-width: 650px) {
    margin-bottom: 20px;
  }
  @media (max-width: 450px) {
    .description-box {
      .stack {
        font-size: 0.8em;
      }
      .description {
        font-size: 0.6em;
      }
    }
  }
`;

export default StackDescription;

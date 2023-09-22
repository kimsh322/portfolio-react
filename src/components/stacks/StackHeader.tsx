import styled from "styled-components";

interface Props {
  tabState: boolean[];
  setTabState: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const StackHeader = ({ tabState, setTabState }: Props) => {
  const tabNames = ["프로그래밍 언어", "라이브러리 및 프레임워크", "도구", "지금 관심있는 것들"];

  const handleTab = (index: number) => {
    const newState = [false, false, false, false];
    newState[index] = true;
    setTabState(newState);
  };

  return (
    <StackHeaderContainer>
      {tabNames.map((tabName, index) => {
        return (
          <button
            key={tabName}
            className={`tab-button ${tabState[index] ? "active" : ""}`}
            onClick={() => handleTab(index)}
          >
            <span>{tabName}</span>
          </button>
        );
      })}
    </StackHeaderContainer>
  );
};

const StackHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  .tab-button {
    width: 25%;
    font-size: 0.8em;
    color: var(--font-color1);
    border: none;
    border-bottom: 1px solid black;
    background-color: var(--stack-header-color);
    cursor: pointer;
    &:hover {
      background-color: var(--font-hover-color);
      transition: 0.3s;
    }
  }
  .active {
    background-color: var(--font-hover-color);
  }
`;

export default StackHeader;

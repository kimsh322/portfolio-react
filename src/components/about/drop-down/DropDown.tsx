import styled from "styled-components";
import { IoIosArrowDropdown } from "react-icons/io";

interface Props {
  title: string;
  contents: string[];
  index: number;
  isActive: boolean[];
  setIsActive: React.Dispatch<React.SetStateAction<boolean[]>>;
}
interface StyleProps {
  isActive: boolean;
}

const DropDown = ({ title, contents, index, isActive, setIsActive }: Props) => {
  const handleClick = () => {
    const newIsActive = isActive.map((el, idx) => {
      if (index === idx) return !el;
      return false;
    });
    setIsActive(newIsActive);
  };

  return (
    <DropDownContainer isActive={isActive[index]}>
      <div className="title-box" onClick={handleClick}>
        <p className="title">{title}</p>
        <div className={`icon ${isActive[index] ? "reverse" : ""}`}>
          <IoIosArrowDropdown />
        </div>
      </div>
      <div className="contents">
        {contents.map((content) => {
          return (
            <p className="content" key={content}>
              {content}
            </p>
          );
        })}
      </div>
    </DropDownContainer>
  );
};

export default DropDown;

const DropDownContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--header-color);
  width: 100%;
  padding: 1.5vh 1vh 0.25vh;
  border: 0.2vh solid var(--background-color);
  border-bottom: 0.3vh solid black;
  z-index: 1;
  .title-box {
    display: flex;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 5.5vh;
  }
  .title {
    display: flex;
    align-items: center;
    width: 92%;
    font-family: "GmarketSansBold";
    font-size: 0.9em;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    position: absolute;
    right: 2px;
    top: 2px;
  }
  .reverse {
    transform: rotateX(180deg);
  }
  .contents {
    width: 100%;
    background-color: var(--background-color);
    height: ${({ isActive }) => (isActive ? "31.45vh" : "0px")};
    overflow: hidden;
    transition: height 0.5s;
  }
  .content {
    padding: 2% 2% 0.5% 2%;
    font-size: 0.8em;
    background-color: var(--background-color);
  }
  @media (max-width: 1150px) and (min-width: 1025px) {
    .content {
      font-size: 0.75em;
    }
  }
  @media (max-width: 560px) {
    .title {
      font-size: 0.65em;
    }
    .content {
      font-size: 0.6em;
    }
  }
`;

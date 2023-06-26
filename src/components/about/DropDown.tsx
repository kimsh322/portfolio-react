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
  background-color: skyblue;
  width: 100%;
  padding: 5px;
  border: 1px solid black;
  .title-box {
    display: flex;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 50px;
  }
  .icon,
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    font-size: 1.5em;
    position: absolute;
    right: 5px;
    top: 5px;
    transition: 0.3s;
  }
  .reverse {
    transform: rotateX(180deg);
  }
  .contents {
    width: 100%;
    background-color: #fff;
    height: ${({ isActive }) => (isActive ? "300px" : "0px")};
    overflow: hidden;
    transition: 0.5s;
  }
  .content {
    padding: 2%;
    font-size: 0.9em;
  }
`;

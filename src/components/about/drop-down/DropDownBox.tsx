import styled from "styled-components";
import DropDown from "./DropDown";
import dropDownContents from "./dropDownContents";
import { useEffect, useState } from "react";
import catImg from "../../../assets/cat-image.png";

const DropDownBox = () => {
  const initialIsActive = [false, false, false, false, false];
  const [isActive, setIsActive] = useState(initialIsActive);

  useEffect(() => {
    const renderIsActive = [true, false, false, false, false];
    setTimeout(() => {
      setIsActive(renderIsActive);
    }, 100);
  }, []);

  return (
    <DropDownBoxContainer>
      {dropDownContents.map((contentArr, idx) => {
        return (
          <DropDown
            key={contentArr[0]}
            title={contentArr[0]}
            contents={contentArr[1]}
            index={idx}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
      <img src={catImg} alt="cat-image" className="cat-image" />
    </DropDownBoxContainer>
  );
};

export default DropDownBox;

const DropDownBoxContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  height: calc(70vh + 7px);
  border-radius: 10px;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  overflow: auto;
  .cat-image {
    position: absolute;
    width: 200px;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

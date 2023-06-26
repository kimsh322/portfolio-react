import styled from "styled-components";
import DropDown from "./Dropdown";
import dropDownContents from "./dropdownContents";
import { useState } from "react";

const DropDownBox = () => {
  const initialIsActive = [true, false, false, false, false];
  const [isActive, setIsActive] = useState(initialIsActive);
  return (
    <DropDownBoxContainer>
      {dropDownContents.map((content, idx) => {
        return (
          <DropDown
            key={content[0]}
            title={content[0]}
            contents={content[1]}
            index={idx}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </DropDownBoxContainer>
  );
};

export default DropDownBox;

const DropDownBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 500px;
  margin-top: 3%;
  background-color: gray;
`;

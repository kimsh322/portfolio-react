import styled from "styled-components";
import DropDown from "./DropDown";
import dropDownContents from "./dropDownContents";
import { useEffect, useState } from "react";

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
    </DropDownBoxContainer>
  );
};

export default DropDownBox;

const DropDownBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 70vh;
  margin-left: 5%;
`;

import styled from "styled-components";
import { InfoContent } from "./infoContents";
import React from "react";

const InfoLine = ({ icon, title, content }: InfoContent) => {
  return (
    <InfoLineContainer>
      <div className="icon-box">{icon}</div>
      <div>
        <p className="tag">{title}</p>
        <p>{content}</p>
      </div>
    </InfoLineContainer>
  );
};

const InfoLineContainer = styled(React.Fragment)`
  display: flex;
  flex-direction: column;
  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
  }
`;
export default InfoLine;

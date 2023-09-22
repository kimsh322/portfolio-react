import styled from "styled-components";
import { InfoContent } from "./infoContents";

const InfoLine = ({ icon, title, content }: InfoContent) => {
  return (
    <>
      <IconBox className="icon-box">{icon}</IconBox>
      <ContentBox>
        <p className="tag">{title}</p>
        <p>{content}</p>
      </ContentBox>
    </>
  );
};

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8em;
`;

const ContentBox = styled.div`
  width: 80%;
  font-size: 0.9em;
  .tag {
    font-family: "GmarketSansBold";
    font-size: 1em;
  }
`;

export default InfoLine;

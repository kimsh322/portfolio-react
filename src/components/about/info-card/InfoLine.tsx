import styled from "styled-components";
import { InfoContent } from "./infoContents";

const InfoLine = ({ icon, title, content }: InfoContent) => {
  return (
    <>
      <IconBox>{icon}</IconBox>
      <ContentBox>
        <p className="tag">{title}</p>
        <p className="content">{content}</p>
      </ContentBox>
    </>
  );
};

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  font-size: 1.8em;
`;

const ContentBox = styled.div`
  width: 100%;
  font-size: 0.9em;
  .tag {
    font-family: "GmarketSansBold";
    font-size: 1em;
  }
  .content {
    font-size: 0.8em;
  }
  @media (max-width: 1150px) and (min-width: 1025px) {
    .content {
      font-size: 0.68em;
    }
  }
`;

export default InfoLine;

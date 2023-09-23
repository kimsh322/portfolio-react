import { useEffect, useState } from "react";
import styled from "styled-components";
import archiveArr, { ArchiveArr } from "./archive";

interface Props {
  identifier: "github" | "blog";
}

const ArchiveCard = ({ identifier }: Props) => {
  const [parsingArr, setParsingArr] = useState<ArchiveArr>(["", [""]]);
  useEffect(() => {
    if (identifier === "github") setParsingArr(archiveArr[0]);
    if (identifier === "blog") setParsingArr(archiveArr[1]);
  }, []);

  return (
    <ArchiveCardContainer>
      <h4 className="title">{parsingArr[0]}</h4>
      <ul className="list-container">
        {parsingArr[1].map((content) => {
          return (
            <li className="content-list" key={content}>
              {content}
            </li>
          );
        })}
      </ul>
    </ArchiveCardContainer>
  );
};

export default ArchiveCard;

const ArchiveCardContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 98%;
  height: 62%;
  background-color: var(--stackcard-color);
  margin: 1% 1%;
  padding: 4% 2% 2%;
  border-radius: 10px;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  transition: transform 0.3s;
  font-size: 0.7em;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s;
  }
  .title {
    margin: 1%;
  }
  .link {
    width: 70%;
    padding-left: 2%;
    margin-top: 2%;
    color: var(--font-color2);
    text-decoration: none;
  }
  .list-container {
    list-style-type: square;
  }
  .content-list {
    margin-top: 2.5%;
  }
  .content-list::marker {
    color: var(--marker-color);
  }
  @media (max-width: 1200px) and (min-width: 800px) {
    .content-list {
      font-size: 0.9em;
    }
  }
  @media (max-width: 800px) {
    .title {
      margin: 0;
    }
  }
  @media (max-width: 500px) {
    .content-list {
      font-size: 0.7em;
    }
  }
`;

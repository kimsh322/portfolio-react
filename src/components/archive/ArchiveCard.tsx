import styled from "styled-components";

interface Props {
  title: string;
  url: string;
  contents: string[];
}

const ArchiveCard = ({ title, url, contents }: Props) => {
  return (
    <ArchiveCardContainer>
      <h2 className="title">{title}</h2>
      <a className="link" href={url}>
        {url}
      </a>
      <ul>
        {contents.map((content) => {
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
  width: 45%;
  height: 90%;
  background-color: var(--stackcard-color);
  margin: 1% 1%;
  padding: 4% 2% 2%;
  border-radius: 10px;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  .title {
    margin: 1%;
  }
  .link {
    padding-left: 2%;
    margin-top: 2%;
  }
  .content-list {
    margin-top: 2.5%;
  }
`;

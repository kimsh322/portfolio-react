import styled from "styled-components";

interface Props {
  title: string;
  url: string;
  contents: string[];
}

const ArchiveCard = ({ title, url, contents }: Props) => {
  return (
    <ArchiveCardContainer>
      <h4 className="title">{title}</h4>
      <a className="link" href={url} target="_blank">
        {url}
      </a>
      <ul className="list-container">
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
  width: 50%;
  height: 300px;
  background-color: var(--stackcard-color);
  margin: 1% 1%;
  padding: 4% 2% 2%;
  border-radius: 10px;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  transition: transform 0.3s;
  font-size: 0.7em;
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
`;

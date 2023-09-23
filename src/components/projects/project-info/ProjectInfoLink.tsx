import styled from "styled-components";

interface Link {
  [key: string]: string;
}

interface Props {
  links: Link;
}

const ProjectInfoLink = ({ links }: Props) => {
  const titleArr = ["배포 링크", "Github", "회고 블로그"];

  return (
    <ProjectInfoLinkContainer>
      <div className="list-title">관련 링크</div>
      <div className="link-box">
        {Object.keys(links).map((link, idx) => {
          return (
            <a href={links[link]} className="link" target="_blank">
              {titleArr[idx]}
            </a>
          );
        })}
      </div>
    </ProjectInfoLinkContainer>
  );
};

const ProjectInfoLinkContainer = styled.li`
  display: flex;
  width: 100%;
  height: 15%;
  list-style: none;
  .list-title {
    margin-right: 5%;
    width: 20%;
    font-family: "GmarketSansBold";
  }
  .link-box {
    width: 80%;
    .link {
      text-decoration: none;
      margin-right: 1em;
      color: var(--font-color2);
    }
  }
`;

export default ProjectInfoLink;

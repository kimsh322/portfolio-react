import styled from "styled-components";

interface Link {
  [key: string]: string;
}

interface Props {
  link: Link;
}

const ProjectInfoLink = ({ link }: Props) => {
  return (
    <ProjectInfoLinkContainer>
      <div className="list-title">관련 링크</div>
      <div className="link-box">
        <a href={link.deploy} className="link" target="_blank">
          배포 링크
        </a>
        <a href={link.github} className="link" target="_blank">
          Github
        </a>
        <a href={link.blog} className="link" target="_blank">
          회고 블로그
        </a>
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

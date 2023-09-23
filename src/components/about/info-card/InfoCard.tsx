import styled from "styled-components";
import githubIcon from "../../../assets/img/stacks/github.svg";
import tistoryIcon from "../../../assets/img/tistory.png";
import { useState } from "react";
import ArchiveCard from "../archive/ArchiveCard";
import infoContents from "./infoContents";
import InfoLine from "./InfoLine";

const InfoCard = () => {
  const [isGithubOpen, setIsGithubOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <InfoCardContainer>
      <div className="info-box">
        {infoContents.map((infoContent) => {
          return (
            <InfoLine
              key={infoContent.title}
              icon={infoContent.icon}
              title={infoContent.title}
              content={infoContent.content}
            />
          );
        })}
      </div>
      <div className="archive-box">
        <div
          className="image-box"
          onMouseEnter={() => setIsGithubOpen(true)}
          onMouseLeave={() => setIsGithubOpen(false)}
        >
          <a href="https://github.com/kimsh322" className="link">
            <span className="tag">GITHUB</span>
            <img src={githubIcon} alt="github-icon" className="github-icon" />
            <span className="hover-text">hover!</span>
          </a>
        </div>
        <div
          className="image-box"
          onMouseEnter={() => setIsBlogOpen(true)}
          onMouseLeave={() => setIsBlogOpen(false)}
        >
          <a href="https://riverpigeon.tistory.com/" className="link">
            <span className="tag">BLOG</span>
            <img src={tistoryIcon} alt="tistory-icon" className="tistory-icon" />
            <span className="hover-text">hover!</span>
          </a>
        </div>
      </div>
      {isGithubOpen && <ArchiveCard identifier="github" />}
      {isBlogOpen && <ArchiveCard identifier="blog" />}
    </InfoCardContainer>
  );
};

const InfoCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70vh;
  border-radius: 10px;
  background-color: var(--header-color);
  margin-right: 5%;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  .tag {
    font-family: "GmarketSansBold";
  }
  .info-box {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    height: 50%;
    row-gap: 3%;
    margin: 2% 0;
  }
  .archive-box {
    display: flex;
    width: 100%;
    height: 30%;
    justify-content: space-around;
    align-items: center;
    .image-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100px;
      .link {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: center;
        color: var(--font-color1);
      }
      .github-icon {
        width: 100px;
      }
      .tistory-icon {
        width: 180px;
      }
      .hover-text {
        font-size: 0.5em;
        margin-top: 4px;
      }
    }
  }
  @media (max-width: 1024px) and (min-width: 800px) {
    width: 70%;
    font-size: 1.3em;
    margin: 1% 0 1% 0;
  }
  @media (max-width: 800px) {
    width: 99%;
    font-size: 1.2em;
    margin: 1% 0 5% 0;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

export default InfoCard;

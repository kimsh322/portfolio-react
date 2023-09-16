import styled from "styled-components";
import githubIcon from "../../assets/github.svg";
import tistoryIcon from "../../assets/tistory.png";
import { PiFinnTheHumanBold } from "react-icons/pi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";
import ArchiveCard from "../archive/ArchiveCard";

const InfoCard = () => {
  const [isGithubOpen, setIsGithubOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <InfoCardContainer>
      <h2>About Me</h2>
      <div className="info-box">
        <div className="icon-box">
          <PiFinnTheHumanBold />
        </div>
        <div>
          <p className="tag">이름</p>
          <p>김수현</p>
        </div>
        <div className="icon-box">
          <AiOutlineMail />
        </div>
        <div>
          <p className="tag">이메일</p>
          <p>sleepygeon@gmail.com</p>
        </div>
        <div className="icon-box">
          <AiOutlinePhone />
        </div>
        <div>
          <p className="tag">전화번호</p>
          <p>010-9063-2429</p>
        </div>
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
  padding: 0 2%;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  .tag {
    font-family: "GmarketSansBold";
  }
  .info-box {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 50%;
    row-gap: 3%;
    margin: 2% 0;
    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
    }
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
    }
  }
`;

export default InfoCard;

import styled from "styled-components";
import githubIcon from "../../assets/github.svg";
import tistoryIcon from "../../assets/tistory.png";

const InfoCard = () => {
  return (
    <InfoCardContainer>
      <h2>About Me</h2>
      <div className="info-box">
        <div>이름</div>
        <div>김수현</div>
        <div>E-mail</div>
        <div>sleepygeon@gmail.com</div>
        <div>Phone</div>
        <div>010-9063-2429</div>
      </div>
      <div className="archive-box">
        <div className="image-box">
          <span>Github</span>
          <a href="https://github.com/kimsh322">
            <img src={githubIcon} alt="github-icon" className="github-icon" />
          </a>
        </div>
        <div className="image-box">
          <span>Blog</span>
          <a href="https://riverpigeon.tistory.com/">
            <img src={tistoryIcon} alt="tistory-icon" className="tistory-icon" />
          </a>
        </div>
      </div>
    </InfoCardContainer>
  );
};

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 500px;
  border-radius: 10px;
  background-color: var(--header-color);
  padding: 1% 2%;
  .info-box {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
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

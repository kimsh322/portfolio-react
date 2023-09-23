import styled from "styled-components";
import spaceImg from "../assets/img/space.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";

const Intro = () => {
  return (
    <IntroContainer>
      <h1 className="title">김수현</h1>
      <h2 className="sub-title">프론트엔드 개발자</h2>
      <p className="description">문제 해결이 곧 성장으로 이어진다고 생각합니다.</p>
      <p className="description">기반을 다지면서 차근차근 나아가려고 노력하고 있습니다.</p>
      <div className="arrow-icon">
        <AiOutlineArrowDown />
      </div>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url(${spaceImg});
  background-size: cover;
  background-position: 0 -100px;
  color: white;
  .title {
    font-size: 72px;
    z-index: 1;
  }
  .sub-title {
    z-index: 1;
    margin-bottom: 10px;
  }
  .description {
    z-index: 1;
    margin-bottom: 5px;
  }
  .arrow-icon {
    position: absolute;
    font-size: 48px;
    bottom: 5%;
    animation: Arrowscroll ease-in-out infinite 2s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  @keyframes Arrowscroll {
    50% {
      transform: translateY(10px);
      opacity: 1;
    }
  }
`;

export default Intro;

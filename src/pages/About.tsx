import styled from "styled-components";
import myImage from "../assets/my-image.jpeg";

const About = () => {
  return (
    <AboutContainer>
      <div className="image-box">
        <img src={myImage} alt="my-image" className="my-image" />
      </div>
      <h1>안녕하세요!</h1>
      <h2>기반을 다지면서 나아가는 </h2>
      <h2>프론트엔드 개발자 김수현입니다.</h2>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 1000px;
  padding: 2%;
  .image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5%;
    right: 5%;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    overflow: hidden;
  }
  .my-image {
    width: 40vw;
  }
`;

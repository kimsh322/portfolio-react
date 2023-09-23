import styled from "styled-components";
import DropDownBox from "../components/about/drop-down/DropDownBox";
import InfoCard from "../components/about/info-card/InfoCard";

const About = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <div className="about-box">
        <InfoCard />
        <DropDownBox />
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-right: 1%;
  justify-content: center;
  align-items: center;
  padding-top: 7%;
  .about-box {
    display: flex;
    justify-content: center;
    margin-top: 3%;
  }
  @media (max-width: 1024px) {
    .about-box {
      flex-direction: column;
      align-items: center;
    }
  }
`;

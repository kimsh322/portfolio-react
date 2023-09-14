import styled from "styled-components";
import DropDownBox from "../components/about/DropDownBox";
import InfoCard from "../components/about/InfoCard";

const About = () => {
  return (
    <AboutContainer>
      <InfoCard />
      <DropDownBox />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 90vh;
  padding: 2%;
  justify-content: center;
  align-items: center;
`;

import styled from "styled-components";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <AiFillCopyrightCircle />
      <span className="text">Copyright 2023. SuHyeon Kim. All rights reserved.</span>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  background-color: var(--background-color2);
  .text {
    font-size: 0.8em;
    margin-left: 0.5%;
  }
`;

export default Footer;

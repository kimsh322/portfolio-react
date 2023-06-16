import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link className="contents" to="/">
        About
      </Link>
      <Link className="contents" to="/stacks">
        Stacks
      </Link>
      <Link className="contents" to="/archive">
        Archive
      </Link>
      <Link className="contents" to="projects">
        Projects
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15%;
  height: 100vh;
  background-color: skyblue;
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    background-color: gray;
    font-size: 2.5em;
    text-decoration: none;
    color: black;
  }
  .contents:hover {
    background-color: aliceblue;
  }
`;

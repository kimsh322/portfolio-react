import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [mode, setMode] = useState<"dark" | "light">("light");
  // 로컬스토리지에 있는 모드 불러오기
  useEffect(() => {
    const localMode = localStorage.getItem("mode") as "dark" | "light" | null;
    if (localMode) setMode(localMode);
    if (localMode === "dark") {
      document.getElementsByTagName("html")[0].classList.add("dark-mode");
    }
  }, []);

  // 다크/라이트 모드 변경
  // html에 class를 추가해서 변경
  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.getElementsByTagName("html")[0].classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    } else {
      setMode("dark");
      document.getElementsByTagName("html")[0].classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    }
  };

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
      <button onClick={handleMode} className="mode">
        {mode}
      </button>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: skyblue;
  z-index: 10;
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: var(--stackcard-color);
    font-size: 2.5em;
    text-decoration: none;
    color: var(--font-color1);
    transition: 0.3s;
  }
  .contents:hover {
    background-color: aliceblue;
  }
  .mode {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 5;
  }
`;

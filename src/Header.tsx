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
      <span className="nickname">프론트엔드 김수현</span>
      <div className="link-container">
        <div className="contents">About</div>
        <div className="contents">Stacks</div>
        <div className="contents">Projects</div>
      </div>
      <button onClick={handleMode} className="mode">
        {mode}
      </button>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--header-color);
  z-index: 10;
  border-bottom: 1px solid gray;
  font-family: "GmarketSansBold";
  .nickname {
    position: absolute;
    left: 3%;
    color: var(--font-color1);
  }
  .link-container {
    display: flex;
    justify-content: right;
    width: 40%;
  }
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2%;
    height: 100%;
    text-decoration: none;
    color: var(--font-color1);
  }
  .active {
    color: var(--font-hover-color);
  }
  .contents:hover {
    color: var(--font-hover-color);
  }
  .mode {
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 5;
    margin-right: 5px;
  }
`;

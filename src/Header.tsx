import styled from "styled-components";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface Props {
  isHeaderColor: boolean;
  handleScrollView: any;
}
interface StyleProps {
  isHeaderColor: boolean;
}

const NavBar = ({ isHeaderColor, handleScrollView }: Props) => {
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
    <NavBarContainer isHeaderColor={isHeaderColor}>
      <span className="nickname">김수현 포트폴리오</span>
      <div className="link-container" onClick={handleScrollView}>
        <button className="contents">About</button>
        <button className="contents">Stacks</button>
        <button className="contents">Projects</button>
      </div>
      <button onClick={handleMode} className="mode">
        {mode === "light" ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.header<StyleProps>`
  display: flex;
  justify-content: right;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ isHeaderColor }) =>
    isHeaderColor ? "var(--header-color)" : "transparent"};
  z-index: 10;
  font-family: "GmarketSansBold";
  .nickname {
    position: absolute;
    left: 3%;
    color: ${({ isHeaderColor }) => (isHeaderColor ? "var(--font-color1)" : "white")};
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
    background-color: ${({ isHeaderColor }) =>
      isHeaderColor ? "var(--header-color)" : "transparent"};
    border: none;
    font-size: 1em;
    text-decoration: none;
    color: ${({ isHeaderColor }) => (isHeaderColor ? "var(--font-color1)" : "white")};
    cursor: pointer;
    &:hover {
      color: var(--font-hover-color);
    }
  }
  .active {
    color: var(--font-hover-color);
  }
  .mode {
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 5;
    padding: 0;
    margin-right: 10px;
    border: none;
    font-size: 40px;
    background-color: ${({ isHeaderColor }) =>
      isHeaderColor ? "var(--header-color)" : "transparent"};
    color: yellow;
  }
  @media (max-width: 700px) {
    .link-container {
      width: 100%;
      justify-content: space-around;
    }
    .nickname {
      display: none;
    }
  }
  @media (max-width: 500px) {
    .contents {
      font-size: 0.7em;
    }
    .mode {
      font-size: 1.25em;
    }
  }
`;

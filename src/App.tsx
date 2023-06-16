import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Stacks from "./pages/Stacks";
import Archive from "./pages/Archive";
import Projects from "./pages/Projects";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
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
    <AppContainer>
      <GlobalStyle />
      <button onClick={handleMode} className="mode">
        {mode}
      </button>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--font-color1);
  transition: color 0.3s, background-color 0.3s;
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

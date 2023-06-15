import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./Navbar";
import { useState } from "react";
import Stacks from "./pages/Stacks";
import Archive from "./pages/Archive";
import Projects from "./pages/Projects";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [mode, setMode] = useState(true);
  const handleMode = () => {
    setMode(!mode);
    console.log("aa");
  };
  return (
    <AppContainer>
      <GlobalStyle />
      <button onClick={handleMode} className="mode">
        {mode ? "white" : "black"}
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

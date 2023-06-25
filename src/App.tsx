import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Header from "./Header";
import Stacks from "./pages/Stacks";
import Archive from "./pages/Archive";
import Projects from "./pages/Projects";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
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
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: var(--background-color);
  margin-top: 50px;
  color: var(--font-color1);
  transition: color 0.3s, background-color 0.3s;
`;

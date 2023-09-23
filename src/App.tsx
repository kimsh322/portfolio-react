import About from "./pages/About";
import Header from "./Header";
import Stacks from "./pages/Stacks";
import Projects from "./pages/Projects";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./Footer";
import Intro from "./pages/Intro";
import { useEffect, useState } from "react";
import { handleHeaderColor } from "./util/handleHeaderColor";

function App() {
  const [isHeaderColor, setIsHeaderColor] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => handleHeaderColor(setIsHeaderColor));
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header isHeaderColor={isHeaderColor} />
      <Intro />
      <About />
      <Stacks />
      <Projects />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: var(--background-color);
  color: var(--font-color1);
`;

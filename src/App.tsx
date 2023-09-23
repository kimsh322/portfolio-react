import About from "./pages/About";
import Header from "./Header";
import Stacks from "./pages/Stacks";
import Projects from "./pages/Projects";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./Footer";
import Intro from "./pages/Intro";
import { useEffect, useRef, useState } from "react";
import { handleHeaderColor } from "./util/handleHeaderColor";

interface Category {
  [key: string]: number;
}

function App() {
  // 스크롤시 헤더 색 변경
  const [isHeaderColor, setIsHeaderColor] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => handleHeaderColor(setIsHeaderColor));
  }, []);

  const scrollRef = useRef<any>([]);

  const handleScrollView = (event: React.MouseEvent<HTMLDivElement>) => {
    const name = event.target as HTMLButtonElement;
    const category: Category = {
      About: 0,
      Stacks: 1,
      Projects: 2,
    };
    scrollRef.current[category[name.innerText]].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Header isHeaderColor={isHeaderColor} handleScrollView={handleScrollView} />
      <Intro />
      <div ref={(el) => (scrollRef.current[0] = el)}>
        <About />
      </div>
      <div ref={(el) => (scrollRef.current[1] = el)}>
        <Stacks />
      </div>
      <div ref={(el) => (scrollRef.current[2] = el)}>
        <Projects />
      </div>
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

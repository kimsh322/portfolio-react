import About from "./pages/About";
import Header from "./Header";
import Stacks from "./pages/Stacks";
import Projects from "./pages/Projects";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <About />
      <Stacks />
      <Projects />
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
  margin-top: 50px;
  color: var(--font-color1);
`;

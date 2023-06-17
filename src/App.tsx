import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import bgMLight from "./assets/bg-mobile-light.jpg";
import bgMDark from "./assets/bg-mobile-dark.jpg";
import bgDLight from "./assets/bg-desktop-light.jpg";
import bgDDark from "./assets/bg-desktop-dark.jpg";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Active from "./components/Active";
import Completed from "./components/Completed";
import { Mode } from "./store/redux";
function App() {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);

  return (
    <MainContainer darkMode={darkMode}>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/Active" element={<Active />} />
          <Route path="/Completed" element={<Completed />} />
        </Routes>
      </Router>
    </MainContainer>
  );
}

const MainContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url(${(props) => (props.darkMode ? bgMDark : bgMLight)});
  padding: 0 24px;
  background-repeat: no-repeat;
  background-size: 100% 200px;
  background-color: ${(props) => (props.darkMode ? "#171823" : "#FAFAFA")};
  @media (min-width: 1024px) {
    background-image: url(${(props) => (props.darkMode ? bgDDark : bgDLight)});
    background-size: 100% 300px;
    padding: 0;
  }
`;

export default App;

import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import bgLight from "./assets/bg-mobile-light.jpg";
import bgDark from "./assets/bg-mobile-dark.jpg";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { useSelector } from "react-redux";
import { Mode } from "./store/redux";
function App() {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);

  return (
    <MainContainer darkMode={darkMode}>
      <GlobalStyles />
      <Header />
      <Todo />
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
  background-image: url(${(props) => (props.darkMode ? bgDark : bgLight)});
  padding: 0 24px;
  background-repeat: no-repeat;
  background-size: 100% 200px;
  background-color: ${(props) => (props.darkMode ? "#171823" : "#FAFAFA")};
`;

export default App;

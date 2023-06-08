import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import BgMobileLight from "../src/assets/bg-mobile-light.jpg";
import Header from "./components/Header";
function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Header />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-image: url(${BgMobileLight});
  padding: 0 24px;
  background-repeat: no-repeat;
  background-size: 100% 200px;
  background-color: #fafafa;
`;

export default App;

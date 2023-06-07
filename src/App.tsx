import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import BgMobileLight from "../src/assets/bg-mobile-light.jpg";

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${BgMobileLight});
  background-repeat: no-repeat;
  background-size: 100% 200px;
`;

export default App;

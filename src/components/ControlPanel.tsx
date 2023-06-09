import styled from "styled-components";
import { useSelector } from "react-redux";
import { Mode } from "../store/redux";

const ControlPanel = (): JSX.Element => {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  return (
    <MainControl darkMode={darkMode}>
      <h2> All</h2>
      <h2>Active</h2>
      <h2>Completed</h2>
    </MainControl>
  );
};

const MainControl = styled.div<{ darkMode: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => (props.darkMode ? "#25273D" : "#ffffff")};
  padding: 15px 0 19px 0;
  border-radius: 5px;
  width: 327px;
  margin-bottom: 24px;
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  gap: 18px;

  h2 {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.1944444477558136px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "#5B5E7E" : "#9495a5")};
  }
`;
export default ControlPanel;

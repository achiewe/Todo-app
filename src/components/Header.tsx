import styled from "styled-components";
import TodoSvg from "../assets/TODO.svg";
import { useDispatch, useSelector } from "react-redux";
import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";
import { Mode } from "../store/redux";
import { dark } from "../store/ModeSlice";

const Header = (): JSX.Element => {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  const dispatch = useDispatch();
  const clickOnMode = (): void => {
    dispatch(dark(!darkMode));
  };
  return (
    <HeaderMain>
      <img src={TodoSvg} alt="todo svg" />
      <img onClick={clickOnMode} src={darkMode ? iconSun : iconMoon} />
    </HeaderMain>
  );
};

const HeaderMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 40px;
`;

export default Header;

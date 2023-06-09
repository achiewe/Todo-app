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
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <HeaderMain>
      <img
        onClick={handleClick}
        className="TodoSvg"
        src={TodoSvg}
        alt="todo svg"
      />
      <img
        className="IconSunMon"
        onClick={clickOnMode}
        src={darkMode ? iconSun : iconMoon}
      />
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

  @media (min-width: 1024px) {
    margin-top: 70px;
    max-width: 541px;
  }

  .TodoSvg {
    @media (min-width: 1024px) {
      width: 167px;
      height: 40px;
      cursor: pointer;
    }
  }

  .IconSunMon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    @media (min-width: 1024px) {
      width: 26px;
      height: 26px;
    }
  }
`;

export default Header;

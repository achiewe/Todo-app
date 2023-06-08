import styled from "styled-components";
import TodoSvg from "../assets/TODO.svg";

const Header = (): JSX.Element => {
  return (
    <HeaderMain>
      <img src={TodoSvg} alt="todo svg" />
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

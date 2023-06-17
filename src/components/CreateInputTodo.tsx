import styled from "styled-components";
import { makeTodo } from "../store/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Mode } from "../store/redux";

const CreateInputTodo = (): JSX.Element => {
  const [takeText, setTakeText] = useState<string>("");
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  const dispatch = useDispatch();
  const ClickOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (takeText.trim() !== "") {
      dispatch(makeTodo(takeText));
    }
  };
  return (
    <Form onSubmit={ClickOnSubmit} darkMode={darkMode}>
      <button type="submit"></button>
      <input
        onChange={(e) => {
          setTakeText(e.target.value);
        }}
        placeholder="Create a new todo…"
      />
    </Form>
  );
};

const Form = styled.form<{ darkMode: boolean }>`
  width: 327px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 14px 0 14px 20px;
  border-radius: 5px;
  background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px #c2c3d680"};

  @media (min-width: 1024px) {
    width: 540px;
    padding: 20px 0 20px 24px;
    gap: 24px;
    height: 64px;
  }

  button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${(props) =>
      props.darkMode ? "1px solid #393A4B " : "1px solid #e3e4f1"};
    background: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    @media (min-width: 1024px) {
      width: 24px;
      height: 24px;
    }
  }

  input {
    width: 100%;
    height: 20px;
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.1666666716337204px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "#FFFFFF" : "black")};
    background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    outline: none;
    @media (min-width: 1024px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.25px;
      text-align: left;
    }
  }

  input::placeholder {
    color: #9495a5;
  }
`;

export default CreateInputTodo;

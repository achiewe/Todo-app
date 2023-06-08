import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TodoRoot } from "../store/redux";
import { makeTodo } from "../store/TodoSlice";

const Todo = (): JSX.Element => {
  const tasks = useSelector((redux: TodoRoot) => redux.createTodo);
  console.log(tasks);
  const [takeText, setTakeText] = useState<string>("");
  const dispatch = useDispatch();
  const ClickOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (takeText.trim() !== "") {
      dispatch(makeTodo(takeText));
    }
  };

  console.log(takeText);
  return (
    <TodoMain>
      <form onSubmit={ClickOnSubmit}>
        <button type="submit"></button>
        <input
          //   onChange={(e) => {
          //     setTakeText(e.target.value);
          //   }}
          placeholder="Create a new todo…"
        />
      </form>
    </TodoMain>
  );
};

const TodoMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  form {
    width: 327px;
    height: 48px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    padding: 14px 0 14px 20px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 35px 50px -15px #c2c3d680;

    button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #e3e4f1;
      background: #ffffff;
    }

    input {
      width: 100%;
      border: none;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.1666666716337204px;
      text-align: left;
      color: black;
      outline: none;
    }

    input::placeholder {
      color: #9495a5;
    }
  }
`;
export default Todo;

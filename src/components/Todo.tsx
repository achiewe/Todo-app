import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TodoRoot, Mode } from "../store/redux";
import { makeTodo, toggleReceive } from "../store/TodoSlice";
import crossSvg from "../assets/icon-cross.svg";
import React from "react";

const Todo = (): JSX.Element => {
  const todoItems = useSelector(
    (redux: TodoRoot) => redux.createTodo.myTodoArray
  );
  const [takeText, setTakeText] = useState<string>("");
  const dispatch = useDispatch();
  const ClickOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (takeText.trim() !== "") {
      dispatch(makeTodo(takeText));
    }
  };

  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);

  return (
    <TodoMain darkMode={darkMode}>
      <form onSubmit={ClickOnSubmit}>
        <button type="submit"></button>
        <input
          onChange={(e) => {
            setTakeText(e.target.value);
          }}
          placeholder="Create a new todo…"
        />
      </form>
      <ul className="itemsUl">
        {todoItems.map((todo, index) => (
          <React.Fragment key={index}>
            <li className="textLi">
              <div className="circleText">
                <button
                  onClick={() => {
                    dispatch(toggleReceive(todo.id));
                  }}
                  className="circle"
                ></button>
                <h3>{todo.wording}</h3>
              </div>
              <img className="cross-svg" src={crossSvg} alt="cross svg" />
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </TodoMain>
  );
};

const TodoMain = styled.div<{ darkMode: boolean }>`
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
    background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0px 35px 50px -15px #c2c3d680"};

    button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: ${(props) =>
        props.darkMode ? "1px solid #393A4B " : "1px solid #e3e4f1"};
      background: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    }

    input {
      width: 100%;
      border: none;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.1666666716337204px;
      text-align: left;
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "black")};
      background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
      outline: none;
    }

    input::placeholder {
      color: #9495a5;
    }
  }

  .itemsUl {
    width: 327px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
    padding: 16px 0 22px 0;
    gap: 16px;

    .textLi {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 0 20px;
      align-items: center;
      justify-content: space-between;

      .circleText {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        .circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: none;
          border: ${(props) =>
            props.darkMode ? "1px solid #393A4B" : "1px solid #e3e4f1"};
          background: ${(props) => (props.darkMode ? "#25273D" : "#ffffff")};
        }

        h3 {
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: -0.1666666716337204px;
          text-align: left;
          color: ${(props) => (props.darkMode ? "#C8CBE7" : "#494c6b")};
        }
      }

      .cross-svg {
        width: 11.79px;
        height: 11.79px;
      }
    }

    hr {
      width: 100%;
      background-color: ${(props) => (props.darkMode ? "#393A4B" : "#e3e4f1")};
      border: none;
      height: 1px;
    }
  }
`;
export default Todo;

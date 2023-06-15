import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TodoRoot, Mode } from "../store/redux";
import { deleteText, toggleReceive, clearCompleted } from "../store/TodoSlice";
import crossSvg from "../assets/icon-cross.svg";
import ControlPanel from "./ControlPanel";
import iconcont from "../assets/icon-check.svg";
import CreateInputTodo from "./CreateInputTodo";
import React from "react";

const Todo = (): JSX.Element => {
  const todoItems = useSelector(
    (redux: TodoRoot) => redux.createTodo.myTodoArray
  );

  const dispatch = useDispatch();

  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);

  return (
    <TodoMain darkMode={darkMode} todoItems={todoItems}>
      <CreateInputTodo />
      <ul className="itemsUl">
        {todoItems.map((todo, index) => (
          <React.Fragment key={index}>
            <TextLi
              succed={todo.recieve}
              darkMode={darkMode}
              // toggleReceive={toggleReceive}
            >
              <div className="circleText">
                <button
                  onClick={() => {
                    dispatch(toggleReceive(todo.id));
                  }}
                  className="circle"
                ></button>
                <h3>{todo.wording}</h3>
              </div>
              <img
                onClick={() => {
                  dispatch(deleteText(todo.id));
                }}
                className="cross-svg"
                src={crossSvg}
                alt="cross svg"
              />
            </TextLi>
            <hr />
          </React.Fragment>
        ))}
        <div className="itemsClear">
          <h2> 5 items left</h2>
          <button
            onClick={() => {
              dispatch(clearCompleted());
            }}
            className="clear"
          >
            Clear Completed
          </button>
        </div>
      </ul>
      {todoItems.length === 0 ? "" : <ControlPanel />}
    </TodoMain>
  );
};

const TodoMain = styled.div<{
  darkMode: boolean;
  todoItems: { wording: string; id: number; recieve: boolean }[];
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  .itemsUl {
    width: 327px;
    display: ${(props) => (props.todoItems.length === 0 ? "none" : "flex")};
    flex-direction: column;
    background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};

    border-radius: 5px;
    padding: 16px 0 22px 0;
    gap: 16px;

    hr {
      width: 100%;
      background-color: ${(props) => (props.darkMode ? "#393A4B" : "#e3e4f1")};
      border: none;
      height: 1px;
    }

    .itemsClear {
      width: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.1666666716337204px;
        text-align: left;
        color: #9495a5;
      }

      .clear {
        border: none;
        background: none;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.1666666716337204px;
        text-align: left;
        color: #9495a5;
      }
    }
  }
`;

const TextLi = styled.li<{
  darkMode: boolean;
  succed: boolean;
}>`
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
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
      border: ${(props) =>
        props.darkMode ? "1px solid #393A4B" : "1px solid #e3e4f1"};
      background: none;
      background-image: url(${(props) => (props.succed ? iconcont : iconcont)});
      background-repeat: no-repeat;
      background-position: top 0 left 0 right 0 bottom 0;
      background: ${(props) =>
        props.succed
          ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
          : ""};
    }

    h3 {
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.1666666716337204px;
      text-align: left;
      color: ${(props) => (props.darkMode ? "#C8CBE7" : "#494c6b")};
      text-decoration: ${(props) => (props.succed ? "line-through" : "")};
    }
  }

  .cross-svg {
    width: 11.79px;
    height: 11.79px;
  }
`;
export default Todo;

import React from "react";
import { TodoItem } from "./TodoItem";
// import "./todos.css"; // Importing a stylesheet

export const Todos = (props) => {
  let containerStyle = {
    minHeight: "70vh",

    // This is also a way of writing css in react
  };
  return (
    <div className="container" style={containerStyle}>
      <h3>Todos List</h3>
      {props.todos.length === 0
        ? "No TODOs to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

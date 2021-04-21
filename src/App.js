import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // Deleting this way in React does not worker.
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  // setTodos is just a callback function that you can use to define the callback.
  // todos is the name of the array
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      {/* The commented down code below is to show the topic of Proptypes */}
      {/* <Header title={45} searchBar={false} />  */}
      <Router>
        <Header title="TODOs List" searchBar={false} />
        <Switch>
          {/* If you do not write exact keyword as down below then react will not go to the about page even after you write /about in the field of path because of the matching / in both of them */}
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/about"
            render={() => {
              return <About />;
            }}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

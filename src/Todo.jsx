import React from "react";
import "antd/dist/antd.css";
import { Button, List } from "antd";
import { Input } from "antd";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  function todoHandler(e) {
    setTodo(e.target.value);
  }
  const todosHandler = () => {
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  function enterFeature(e) {
    e.key === "Enter" && todosHandler();
  }
  return (
    <div className="flex flex-col items-center space-y-3">

      <div className="add_input flex flex-row w-9/12 gap-2 ml-2 mt-4  ">
        <Input
          placeholder="Görev Ekle..."
          onChange={todoHandler}
          onKeyUp={enterFeature}
          value={todo}
          
        />
        <Button type="primary" danger className="" onClick={todosHandler}>
          Görev Ekle
        </Button>
      </div>
      <TodoList  todos = {todos} />
    
    </div>
  );
};

export default Todo;

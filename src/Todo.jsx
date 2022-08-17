import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Input } from "antd";
import { useState, useEffect } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todosHandler = () => {
    setTodos((prev) => [...prev, todo]);
  };
  const todoHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="flex justify-center">
      <div className="add_input flex flex-row w-9/12 gap-2 ml-2 mt-2 ">
        <Input placeholder="Görev Ekle..." onChange={todoHandler} />
        <Button type="primary" danger className="" onClick={todosHandler}>
          Görev Ekle
        </Button>
      </div>
    </div>
  );
};

export default Todo;

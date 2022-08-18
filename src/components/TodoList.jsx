import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";
import { useState } from "react";

const List = ({ todos, setTodos}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newText, setNewText] = useState()

  const showModal = () => {
  
    setIsModalVisible(true);
  };

  const handleOk = (id) => {
    setIsModalVisible(false);
    const text = newText;
   const updatedTodos =  todos.map((todo)=>todo.id === id ? todo.text = text : todo )
   console.log(updatedTodosn);
  
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteItem = (index) => () =>
    setTodos((todos) => todos.filter((_, i) => i !== index));

  return (
    <div className="space-y-3 ">
      {todos.map((item, index) => (
        <Card
          key={index}
          className="w-auto h-14 flex flex-row  items-center shadow-lg ring-1 justify-between"
        >
          <div className="text flex flex-row justify-between  items-center w-80">
            <p className=" w-auto text-center m-0 text-lg italic text-blue-800 ">
              {item.text}
            </p>
            <div className="buttons flex gap-2">
              <Button onClick={showModal} >
                <EditFilled className="text-sm " />
              </Button>
              <Modal
                title="Görevi Düzenle"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
              <Input placeholder="Düzenle" onChange={(e)=>setNewText(e.target.value) } value={newText}/> 
              </Modal>

              <button className="delete" onClick={deleteItem(index)}>
                <DeleteFilled className="text-sm " />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default List;

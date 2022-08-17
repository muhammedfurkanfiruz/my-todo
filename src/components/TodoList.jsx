import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

const List = ({ todos }) => {
  return (
    <div className="space-y-3 ">
      {todos.map((item) => (
        <Card className="w-auto h-14 flex flex-row  items-center shadow-lg ring-1 justify-between">
          <div className="text flex flex-row justify-between  items-center w-80">
            <p className=" w-auto text-center m-0 text-lg italic text-blue-800 ">
              
              {item}
             
            </p>
            <div className="buttons flex gap-2">
                <EditFilled className="text-sm " />
                <DeleteFilled />
              </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default List;

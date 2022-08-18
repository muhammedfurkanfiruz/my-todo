import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Modal, Input } from "antd";



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       
       <Input placeholder="Basic usage" />


      </Modal>
    </>
  );
};

export default EditModal;

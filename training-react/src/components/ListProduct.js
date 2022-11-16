import React, { useState } from "react";

import Products from "./Products";
import { currentData } from "./data";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../App.css";

const ListProduct = () =>{
 const [data, setData] = useState(currentData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
 const [idLength, setIdLength] = useState(currentData.length + 1);
  const handleSave = (id) => {
  setIdLength(count => count + 1)
    const newData = { id: idLength, title: title, price: price, stock: stock, brand: brand };
      setData([...data, newData]);
      setShow(false);
  };
 
  const handleRemove = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="App">
      <h1 style={{ color: "orange" }}>Product Management</h1>
      {/* <ButtonCRUD></ButtonCRUD> */}

      <Button
        style={{ marginLeft: 1236 }}
        text="Add"
        variant="primary"
        onClick={handleShow}
      >
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="w-25 ">Title: </label>
            <input
              type="text"
              className="py-1 w-100 "
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="w-25">Price: </label>
            <input
              type="text"
              className="py-1 w-100"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="w-25">Stock: </label>
            <input
              type="text"
              className="py-1 w-100"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div>
            <label className="w-25">Brand: </label>
            <input
              type="text"
              className="py-1 w-100"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Products data={data} setData={setData} removeItem={handleRemove} />
    </div>
  );
}

export default ListProduct
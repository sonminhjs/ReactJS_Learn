import React, { useState, useEffect } from "react";

import Products from "./Products";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../App.css";

const ListProduct = () => {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");


  // useEffect(() => {
  //     const getData = async () => {
  //       const new_data = await fetchData();
  //       setData(new_data);
  //     };
  //     getData();
  // }, []);

  // const fetchData = async () => {
  // const res = await fetch("http://localhost:5000/currentData");
  // const dataJSON = await res.json();
  //  return dataJSON;

  //  };


  useEffect(() => {
    const getData = async function () {
      const baseURL = "http://localhost:5000/currentData";
      const response = await axios.get(baseURL);
      const new_data = response.data;
      setData(new_data);
      // console.log(new_data);
    }
    getData();
  }, [data])


  const handleSave = async (id) => {
    if (title !== "" && price !== "" && stock !== "" && brand !== "") {
      const newData = { title: title, price: price, stock: stock, brand: brand };
      await fetch(`http://localhost:5000/currentData/`, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setShow(false);
    }
    setTitle("");
    setPrice("");
    setStock("");
    setBrand("");
  };

  // const handleRemove = (id) => {
  //   const newData = data.filter((item) => item.id !== id);
  //   setData(newData);
  // };

  const handleRemove = async (id) => {
    await fetch(`http://localhost:5000/currentData/${id}`, {
      method: "DELETE",
    });
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
          <Button variant="danger" onClick={handleClose}>
            Cancel
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
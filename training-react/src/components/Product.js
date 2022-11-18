import React, { useState } from "react";
import ButtonCRUD from "./ButtonCRUD";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Product({ product, removeItem, item, setData, data,index }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setTitle(product.title);
    setPrice(product.price);
    setStock(product.stock);
    setBrand(product.brand);
  };

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");

  const handleSave = (id) => {
    const newData = {
      id: id,
      title: title,
      price: price,
      stock: stock,
      brand: brand,
    };
    const editedTaskList = data.map((task) => {
      if (id === task.id) {
        return newData;
      }
      return task;
    });
    setData(editedTaskList);
    setShow(false);
  };

  const removeItemComponent = () => {
    removeItem(item.id);
  }

  return (
    <tr>
     {/* <td><img src={product.thumbnail} /></td> */}
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.brand}</td>

      <td>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="w-25">Title: </label>
              <input
                type="text"
                className="py-1 w-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="w-25">Price: </label>
              <input
                type="text"
                className="py-1 w-100"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="w-25">Stock: </label>
              <input
                type="text"
                className="py-1 w-100"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <label className="w-25">Brand: </label>
              <input
                type="text"
                className="py-1 w-100"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleSave(product.id)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <ButtonCRUD
          text="Edit"
          color="green"
          icon="edit"
          onClick={() => handleShow(product.id)}
        ></ButtonCRUD>{" "}
        <ButtonCRUD
          onClick={() => {
            if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không ?"))
              removeItemComponent();
          }}
          // onClick={removeItemComponent}
          text="Delete"
          color="red"
          icon="delete"
        ></ButtonCRUD>
      </td>
    </tr>
  );
}

export default Product;

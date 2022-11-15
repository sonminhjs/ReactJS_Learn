import React from "react";
import ButtonCRUD from "./ButtonCRUD";

function Product({ product, onClick, removeItem, item }) {
  function removeItemComponent() {
    removeItem(item.id);
  }

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.brand}</td>

      <td>
        <ButtonCRUD
          text="Edit"
          color="green"
          icon="edit"
          onClick={onClick}
        ></ButtonCRUD>{" "}
        <ButtonCRUD
          onClick={() => removeItemComponent(item.id)}
          text="Delete"
          color="red"
          icon="delete"
        ></ButtonCRUD>
      </td>
    </tr>
  );
}

export default Product;

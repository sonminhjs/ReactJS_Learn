import React, { useState } from "react";
import Products from "./components/Products";
import { currentData } from "./components/data";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ButtonCRUD from "./components/ButtonCRUD";
import "./App.css";
import ListProduct from "./components/ListProduct";

const App = () => {
 return (
   <ListProduct />
  );
};

export default App;

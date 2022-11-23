import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ShowProduct from "./components/ShowProduct";
import "./App.css";
// import ListProduct from "./components/ListProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<ShowProduct />} />
        </Route>
      </Routes>
    </Router>
  );
  // <ListProduct/>
};

export default App;
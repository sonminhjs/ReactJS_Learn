// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ShowProduct from "./components/ShowProduct";
// import "./App.css";
// // import ListProduct from "./components/ListProduct";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="product/:id" element={<ShowProduct />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
//   // <ListProduct/>
// };

// export default App;

import React, { useState } from "react";
import './style.css'
import CalTitle from "./components/CalTitle";

function App() {
  const [exp, setExp] = useState("");
  const [answer, setAnswer] = useState(exp);

  function display(symbol) {
    setExp((prevValue) => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }

        setExp(newValue);
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
            symbol = "";
          }
        }

        setExp(
          (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
        );
      }
    });

    setAnswer((prevValue) =>
      (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
    );
  }

  function calculate() {
    setAnswer(eval(exp));
    setExp(eval(exp));
  }
  function allClear() {
    setExp("");
    setAnswer(0);
  }
  function clear() {
    setExp((prev) => {
      setAnswer(0);
      prev = prev + "";
      return prev
        .split("")
        .slice(0, prev.length - 1)
        .join("");
    });
  }
  return (
    <div className="container">
      <div className="grid">
        <div className="display">
          <CalTitle />
          <input
            class="exp"
            disabled
            placeholder="0"
            value={exp}
          ></input>
          <input
            id="display"
            className="answer"
            disabled
            value={answer}
          ></input>
        </div>
        <div onClick={allClear} className="padButton clear red" id="clear">
          Clear
        </div>
        <div onClick={clear} className="padButton c red" id="c">
          Delete
        </div>
        <div
          onClick={() => display("/")}
          className="padButton divide"
          id="divide"
        >
          /
        </div>
        <div
          onClick={() => display("*")}
          className="padButton multiply"
          id="multiply"
        >
          *
        </div>
        <div
          onClick={() => display("7")}
          className="padButton seven dark-grey"
          id="seven"
        >
          7
        </div>
        <div
          onClick={() => display("8")}
          className="padButton eight dark-grey"
          id="eight"
        >
          8
        </div>
        <div
          onClick={() => display("9")}
          className="padButton nine dark-grey"
          id="nine"
        >
          9
        </div>
        <div
          onClick={() => display("-")}
          className="padButton subtract"
          id="subtract"
        >
          -
        </div>
        <div
          onClick={() => display("4")}
          className="padButton four dark-grey"
          id="four"
        >
          4
        </div>
        <div
          onClick={() => display("5")}
          className="padButton five dark-grey"
          id="five"
        >
          5
        </div>
        <div
          onClick={() => display("6")}
          className="padButton six dark-grey"
          id="six"
        >
          6
        </div>
        <div onClick={() => display("+")} className="padButton add" id="add">
          +
        </div>
        <div
          onClick={() => display("1")}
          className="padButton one dark-grey"
          id="one"
        >
          1
        </div>
        <div
          onClick={() => display("2")}
          className="padButton two dark-grey"
          id="two"
        >
          2
        </div>
        <div
          onClick={() => display("3")}
          className="padButton three dark-grey"
          id="three"
        >
          3
        </div>
        <div onClick={calculate} className="padButton equals" id="equals">
          =
        </div>
        <div
          onClick={() => display("0")}
          className="padButton zero dark-grey"
          id="zero"
        >
          0
        </div>
        <div
          onClick={() => display(".")}
          className="padButton decimal dark-grey"
          id="decimal"
        >
          .
        </div>
      </div>
    </div>
  );
}

export default App;

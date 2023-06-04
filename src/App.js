import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Detail";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/item/:id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

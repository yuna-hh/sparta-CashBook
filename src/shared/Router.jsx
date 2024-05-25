import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import { useState } from "react";
import { ContextProvider } from "../context/ContextProvider";

const Router = () => {
  const [cashArray, setCashArray] = useState([]);
  const [clickMonth, setClickMonth] = useState(1);
  return (
    <ContextProvider.Provider
      value={{ cashArray, setCashArray, clickMonth, setClickMonth }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail/:detailId" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider.Provider>
  );
};

export default Router;

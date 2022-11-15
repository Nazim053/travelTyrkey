import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from './Cart/Cart'



const root = ReactDOM.createRoot(document.getElementById("root"));
export const CountCartContext = React.createContext();
root.render(
  <CountCartContext.Provider value="Это говно сработало">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CountCartContext.Provider>
);

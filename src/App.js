import React from "react";
import A from './App.module.css'
import ContainerTour from "./ContainerTour/ContainerTour";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <div className="app_container">
      <Header/>
          <div className={A.container}>
          <ContainerTour />
          </div>
      </div>
    </div>
  );
}

export default App;

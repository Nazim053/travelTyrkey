import React from "react";
import A from './App.module.css'
import ContainerTour from "./ContainerTour/ContainerTour";
import LookingAdventure from "./ContainerTour/LookingAdventure/LookingAdventure";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <div className={A.App}>
      <div className={A.app_container}>
          <Header/>
          <div className={A.container}>
          <ContainerTour />
          <LookingAdventure />
          </div>
          <Footer/>
      </div>
    </div>
  );
}

export default App;

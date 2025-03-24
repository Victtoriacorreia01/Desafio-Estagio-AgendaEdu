import React from "react";
import HomePage from "./pages/Home/HomePage";
import './styles/styles.css';  
import HeaderEdu from "./pages/Home/HeaderEdu";

function App() {
  return (
    <div className="App">
      <HeaderEdu/>
      <HomePage/>
    </div>
  );
}

export default App;


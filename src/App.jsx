import React from "react";
import HomePage from "./pages/HomePage";
import './styles.css';  
import HeaderEdu from "./pages/HeaderEdu";

function App() {
  return (
    <div className="App">
      <HeaderEdu/>
      <HomePage/>
    </div>
  );
}

export default App;


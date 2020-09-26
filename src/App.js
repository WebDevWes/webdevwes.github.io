import React from "react";
import "./style.css"
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App Background" style={{ backgroundColor: "#66a", minHeight:"100vh", height: "100%" }}>
      <Navbar />
      Content
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="app">
      <Navbar />
      {
          data.map((entryData)=> <Card data={entryData}/>)
      }
    </div>
  );
}

export default App;

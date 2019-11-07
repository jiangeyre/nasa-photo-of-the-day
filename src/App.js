import React from "react";
import MyApp from "./Components/DatePicker";
import CardData from './Components/CardData';
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
        <MyApp/>
        <CardData />
      </p>
    </div>
  );
}

export default App;
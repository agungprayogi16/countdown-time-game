/** @format */

// src/App.tsx
import React from "react";
import Countdown from "./components/Countdown";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Countdown Time Game</h1>
      <Countdown />
    </div>
  );
};

export default App;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// components
import CoinsList from "./components/CoinsList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoinsList />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;

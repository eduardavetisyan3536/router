import React, {  } from "react";
import { Route, Routes } from "react-router";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Wearbetter from "./Components/Wearbetter";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/" element={<Wearbetter />} />
        <Route path="collections" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Textarea from "./ui/InputTextarea/InputTextarea";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

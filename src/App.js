import { Outlet } from "react-router-dom";
import InputTextarea from "./ui/InputTextarea/InputTextarea";

function App() {
  return (
    <>
      <Outlet />
      <InputTextarea />
    </>
  );
}

export default App;

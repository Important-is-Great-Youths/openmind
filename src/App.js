import { Outlet } from "react-router-dom";
import InputTextarea from "./components/ui/InputTextarea/InputTextarea";
import "./styles/global.css";

function App() {
  return (
    <>
      <Outlet />
      <InputTextarea />
    </>
  );
}

export default App;

import styled from "styled-components";
import stylesheet from "InputTextarea.module.css";

function Textarea() {
  const [input, setInput] = useState("");

  const handleInputText = (e) => {
    setInput(e.target.value);
  };
}

export default Textarea;

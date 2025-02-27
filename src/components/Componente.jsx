import { useState } from "react";
export default function Componente() {
  const [state, setState] = useState(0);
  const handlebutton = () => {
    setState(state + 1);
  };

  return (
    <>
      <h3>Componente ne react {state} </h3>
      <button onClick={handlebutton}>Clickme</button>
    </>
  );
}

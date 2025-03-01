import "./copy.css";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";

export function Copy() {
  const [copy, setCopy] = useState("copy");
  const handleCopy = () => {
    navigator.clipboard.writeText("pip install pynasa");
    setCopy("copied");
    setTimeout(() => {
      setCopy("");
    }, 2000);
  };
  return (
    <div className="container">
      <p>pip install pynasa</p>
      <FaCopy className={`icon ${copy}`} onClick={handleCopy} />
    </div>
  );
}

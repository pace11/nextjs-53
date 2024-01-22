import { useState } from "react";
import stylesFooter from "./Footer.module.css";

export default function Footer() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button size="sm" onClick={() => setNumber((prevState) => prevState + 1)}>
        Button Number
      </button>
      <p className={stylesFooter["footer-red"]}>Component Footer {number}</p>
    </div>
  );
}

import React, { useState } from "react";
import "./Clicker.css";

const Clicker = () => {
  const [value, setValue] = useState(0);

  const handleAcions = (action) => {
    switch (action) {
      case "add":
        setValue((value) => value + 1);
        break;
      case "sub":
        setValue((value) => value - 1);
        break;
      case "reset":
        setValue(0);
        break;
      default:
        break;
    }
  };
  return (
    <div className="clicker">
      <div className="clicker-value-ctn">
        <span>{value}</span>
      </div>
      <div className="clicker-methods-ctn">
        <div className="clicker-methods-btn-add">
          <button onClick={() => handleAcions("add")}>➕</button>
        </div>
        <div className="clicker-methods-btn-reset">
          <button onClick={() => handleAcions("reset")}>🔄</button>
        </div>
        <div className="clicker-methods-btn-sub">
          <button onClick={() => handleAcions("sub")}>➖</button>
        </div>
      </div>
    </div>
  );
};

export default Clicker;

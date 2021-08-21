import React from "react";
import "./Button.css";

function Button(props) {
  const label = props.label;
  return (
    <div>
      <button className="button-container">{label}</button>
    </div>
  );
}

export default Button;

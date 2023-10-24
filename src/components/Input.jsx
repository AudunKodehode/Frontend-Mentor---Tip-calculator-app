import React from "react";
import "./Input.css";
export default function Input(props) {
  const handleInputChange = (event) => {
    props.onChange(event.target.value);

  };

  return (
    <div className="inputComponent" id={props.size}>
      <img src={props.svg} alt="" />
      <input
        value={props.value}
        id={props.size}
        type="number"
        placeholder={props.placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}

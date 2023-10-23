import { useState } from "react";
import dollar from "/public/images/icon-dollar.svg";
import "./Sum.css";

export default function Sum(props) {
  const [sum, setSum] = useState(0);
  return (
    <>
      <div className="split">
        <div className="sums">
          <h3>{props.text1}</h3>
          <p>{props.text2}</p>
        </div>
        <div className="dollarSum">
        <img src={dollar} alt="" />
        <h1>{props.sum}</h1>
        </div>
      </div>
    </>
  );
}

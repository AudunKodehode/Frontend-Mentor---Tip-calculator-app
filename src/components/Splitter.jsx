import Button from "./Button";
import Input from "./Input";
import person from "/public/images/icon-person.svg";
import dollar from "/public/images/icon-dollar.svg";
import "./Splitter.css";

export default function Splitter() {
  return (
    <div className="splitter">
      <div className="mainContainer">
        <div className="main">
          <div className="bill">
            <label>Bill</label>
            <Input svg={dollar} />
          </div>

          <label>Select Tip %</label>
          <div className="buttons">
            <Button buttonType="small dark" buttonText="5%" />
            <Button buttonType="small dark" buttonText="10%" />
            <Button buttonType="small dark" buttonText="15%" />
            <Button buttonType="small dark" buttonText="25%" />
            <Button buttonType="small dark" buttonText="50%" />
            <Button buttonType="small light" buttonText="Custom" />
          </div>

          <div className="people">
            <label>Number of People</label>
            <Input svg={person} />
          </div>
        </div>
      </div>

      <div className="resultContainer">
        <div className="result">
          <div className="innerresult">

            <div className="tipAmount">
                <h4>Tip Amount</h4>
                <p>/ person</p>
            </div>
            <div className="Total">
                <h4>Total</h4>
                <p>/ person</p>
            </div>
          </div>
          <Button buttonType="wide medium" buttonText="RESET" />
        </div>
      </div>
    </div>
  );
}

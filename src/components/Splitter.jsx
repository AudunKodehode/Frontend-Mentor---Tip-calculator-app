import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import person from "/public/images/icon-person.svg";
import dollar from "/public/images/icon-dollar.svg";
import Sum from "./Sum";
import "./Splitter.css";

export default function Splitter() {
  let [billAmount, setBillAmount] = useState(0);
  let [tipPercent, setTipPercent] = useState(0);
  let [people, setPeople] = useState(1);
  let [tipValue, setTipValue] = useState(0);
  let [totalValue, setTotalValue] = useState(0);

  function setPercent(percent) {
    setTipPercent(percent);
switch(percent)
    {
      case 5:
        // setTipPercent(5);
        break;
      case 10:
        // setTipPercent(10);
        break;
      case 15:
        // setTipPercent(15);
        break;
      case 25:
        // setTipPercent(25);
        break;
      case 50:
        // setTipPercent(50);
        break;
    }
    calculateTip();
  }



///////////////////////////////////////// SANETIZE INPUT WITH ONLY NUMBERS, AND COMMAS, PUNCTUATION, AND DECIMALS








  function calculateTip() {
    const tipPerPerson = (billAmount * (tipPercent / 100)) / people;
    const totalPerPerson = (billAmount + tipPerPerson) / people;
    setTipValue(tipPerPerson.toFixed(2));
    setTotalValue(totalPerPerson.toFixed(2));
  }
  useEffect(() => {
    calculateTip();
  }, [tipPercent, billAmount, people]);

  function resetTip() {
    setBillAmount(0);
    setTipPercent(0);
    setPeople(1);
    setTipValue(0);
    setTotalValue(0);
  }

  function handleBillAmountChange(newValue) {
    setBillAmount(parseFloat(newValue));
    calculateTip();
  }

  function handlePeopleChange(newValue) {
    setPeople(parseInt(newValue, 10));
    calculateTip();
  }

  // Calculate tip and total values here (you'll need to implement this)

  return (
    <div className="splitter">
      <div className="mainContainer">
        <div className="main">
          <div className="bill">
            <label>Bill</label>
            <Input
              value={billAmount}
              size="large"
              svg={dollar}
              onChange={handleBillAmountChange}
            />
          </div>

          <div>
            <label>Select Tip %</label>
            <div className="buttons">
              <Button
                onClick={() => setPercent(5)}
                buttonType="small dark"
                buttonText="5%"
              />
              <Button
                onClick={() => setPercent(10)}
                buttonType="small dark"
                buttonText="10%"
              />
              <Button
                onClick={() => setPercent(15)}
                buttonType="small dark"
                buttonText="15%"
              />
              <Button
                onClick={() => setPercent(25)}
                buttonType="small dark"
                buttonText="25%"
              />
              <Button
                onClick={() => setPercent(50)}
                buttonType="small dark"
                buttonText="50%"
              />
              <Input size="small" placeholder="CUSTOM" />
            </div>
          </div>

          <div className="people">
            <label>Number of People</label>
            <Input
              value={people}
              size="large"
              svg={person}
              onChange={handlePeopleChange}
            />
          </div>
        </div>
      </div>

      <div className="resultContainer">
        <div className="result">
          <div className="innerresult">
            <Sum text1="Tip Amount" text2="/ person" sum={tipValue} />
            <Sum text1="Total" text2="/ person" sum={totalValue} />
          </div>
          <Button
            onClick={resetTip}
            buttonType="wide medium"
            buttonText="RESET"
          />
        </div>
      </div>
    </div>
  );
}

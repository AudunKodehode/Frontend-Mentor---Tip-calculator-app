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
    document.getElementById("5percent").classList.remove("active");
    document.getElementById("10percent").classList.remove("active");
    document.getElementById("15percent").classList.remove("active");
    document.getElementById("25percent").classList.remove("active");
    document.getElementById("50percent").classList.remove("active");
    if (
      percent != 5 ||
      percent != 10 ||
      percent != 15 ||
      percent != 25 ||
      percent != 50
    ) {
      document.getElementById("small").classList.add("active");
    }
    console.log(percent);
    switch (percent) {
      case 5:
        document.getElementById("5percent").classList.add("active");
        break;
      case 10:
        document.getElementById("10percent").classList.add("active");
        break;
      case 15:
        document.getElementById("15percent").classList.add("active");
        break;
      case 25:
        document.getElementById("25percent").classList.add("active");
        break;
      case 50:
        document.getElementById("50percent").classList.add("active");
        break;
    }
    calculateTip();
  }

  function calculateTip() {
    const tipPerPerson = (billAmount * (tipPercent / 100)) / people;
    const totalPerPerson = (billAmount + tipPerPerson) / people;
    setTipValue(tipPerPerson.toFixed(2));
    setTotalValue(totalPerPerson.toFixed(2));
    document.getElementById("resetButton").classList.remove("inactive");
    if (totalPerPerson == "NaN") {
      console.log("naaaan");
    }
  }
  useEffect(() => {
    calculateTip();
  }, [tipPercent, billAmount, people]);

  function resetTip() {
    document.getElementById("zeroSpan").style.opacity = "0";
    document.getElementById("resetButton").classList.add("inactive");
    setBillAmount(0);
    setTipPercent(0);
    setPeople(1);
    setTipValue(0.0);
    setTotalValue(0);
  }

  function handleBillAmountChange(newValue) {
    setBillAmount(parseFloat(newValue));
    calculateTip();
  }

  function handlePeopleChange(newValue) {
    if (newValue === "0") {
      document.getElementById("zeroSpan").style.opacity = "1";
    } else {
      document.getElementById("zeroSpan").style.opacity = "0";
    }
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
                id="5percent"
              />
              <Button
                onClick={() => setPercent(10)}
                buttonType="small dark"
                buttonText="10%"
                id="10percent"
              />
              <Button
                onClick={() => setPercent(15)}
                buttonType="small dark"
                buttonText="15%"
                id="15percent"
              />
              <Button
                onClick={() => setPercent(25)}
                buttonType="small dark"
                buttonText="25%"
                id="25percent"
              />
              <Button
                onClick={() => setPercent(50)}
                buttonType="small dark"
                buttonText="50%"
                id="50percent"
              />
              <Input
                onChange={setPercent}
                value={tipPercent}
                size="small"
                placeholder="CUSTOM"
              />
            </div>
          </div>

          <div className="people">
            <label>
              Number of People<span id="zeroSpan">Can&apos;t be zero</span>
            </label>
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
            id="resetButton"
          />
        </div>
      </div>
    </div>
  );
}

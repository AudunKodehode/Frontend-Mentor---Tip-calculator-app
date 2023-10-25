import "./App.css";

import SPLITTERLOGO from "../public/images/logo.svg";
import Splitter from "./components/splitter";
function App() {
  return (
    <>
      <div className="logoDiv">
        <img src={SPLITTERLOGO} alt="" />
      </div>
      <Splitter />
      <div className="fem">
    Challenge by <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX">Frontend Mentor.</a> Coded by <a href="https://github.com/AudunKodehode">AudunKodehode</a>. 
    </div>
    </>
  );
}

export default App;

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
    </>
  );
}

export default App;

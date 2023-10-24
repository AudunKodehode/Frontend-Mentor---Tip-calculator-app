import "./App.css";
import Splitter from "./components/splitter";
import SPLITTERLOGO from "../public/images/logo.svg";
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

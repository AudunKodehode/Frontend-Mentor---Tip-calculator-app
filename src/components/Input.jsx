import "./Input.css";

function onChange() {}

export default function Input(props) {
  return (
    <div className="inputComponent" id={props.size}>
      <img src={props.svg} alt=""  />
      <input value={props.value} id={props.size} type="number" placeholder={props.placeholder} onChange={onChange()} />
    </div>
  );
}

import './Button.css'

export default function Button(props){
    return (
        <button onClick={props.onClick} className={props.buttonType}>{props.buttonText}</button>
    )
}
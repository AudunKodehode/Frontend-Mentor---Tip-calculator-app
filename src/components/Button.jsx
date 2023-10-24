import './Button.css'

export default function Button(props){
    return (
        <button id={props.id} onClick={props.onClick} className={props.buttonType}>{props.buttonText}</button>
    )
}
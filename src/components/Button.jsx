import './Button.css'
import './RootColors.css'

export default function Button(props){
    return (
        <button className={props.buttonType}>{props.buttonText}</button>
    )
}
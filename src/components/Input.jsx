import './Input.css'

function onChange(){
    
}

export default function Input(props){
    return(
        <div className="inputComponent">
            <img src={props.svg} alt="" />
        <input type="number" onChange={onChange()} /> 
        </div>
    )
}
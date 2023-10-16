export type ButtonPropsType ={
    name:string
    callBack:()=>void
    className:string
}

const Button = (props:ButtonPropsType) =>{
    return <button onClick={props.callBack} className={props.className}>{props.name}</button>
}

export default Button
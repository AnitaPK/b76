import './Button.css'



function Button (props){
    console.log(props.data)
    return(
        <>
        <button className="customBTN">{props.data}</button>
        </>
    )
}






export default Button
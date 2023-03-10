import {useState} from "react"

function CustomForm(){
const submitHandler =(e)=>{
    e.preventDefault()
    console.log(name,email,password)
}

const [name,setName] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')


    return <>
    <br/>
    <br/>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" onChange={e => setName(e.target.value)} /><br/>
        <input type="text" placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/><br/>
        <input type="text" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/><br/> 
        <input type="submit" />

    </form>
    </>
}
export default CustomForm
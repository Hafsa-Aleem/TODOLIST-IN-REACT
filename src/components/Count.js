import {useState} from "react"
function Count(){
    let [count,setCount] = useState(0)
    console.log(count)
    const onClickHandler = () =>{
        // count = count+1
       // console.log("After Function call",count)
        let newCount = count+1
        setCount(newCount)
    }
     return <>
     <h1>{count}</h1>
     <button type="button" onClick={()=>onClickHandler()}>Increment</button>
     </>
  }

  export default Count
  
  //props==unchangeble
  //usestate==changeble
import hafsa from './todolist.png'
import './App.css'
import { useState} from "react"
// import Count from "./components/Count"
// import CustomForm from "./components/CustomForm"

function App(){

  const [todo,setTodo]= useState('')
  const [todoList,setTodoList] = useState([])

  const onAddTodo= ()=>{
  let newArr =[...todoList]
  let newItem = {
    id:Math.random(),
    value:todo
  }


  newArr.push(newItem)
  setTodoList(newArr)
  setTodo('')   
}


const onDeleteHandlebar=(myId)=>{
//  const newArr= todoList.filter(todoItem=> todoItem!==text)
//  setTodoList(newArr)     
// const newArr=todoList.filter((_,idx)=> idx!==text ) //using array index
 setTodoList(todoList.filter(item=> item.id!=myId))

}

return <div>
<img src={hafsa} width={300} height={100} className="logo"/>
<h1 className="app-title">REACT TODO LIST!</h1>
<div className="container">
<input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
<input type="button" value="Add" onClick={onAddTodo}/>

<div className="list">
<br/>
 
  <ul>
  {todoList.map((item,index) => <li key={index} onClick={()=>onDeleteHandlebar(item.id)}>{item.value}</li>)}
 <br/>
 <br/>
 <br/>
  </ul>
</div>

</div>
 </div>
 

}
export default App
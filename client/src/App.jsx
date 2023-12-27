import { useEffect, useState } from "react";
import ToDo from '../src/components/Todo'
import { addToDo, getAllToDo } from "./utils/HandleApi";

function App() {

  const [toDo,setToDo]=useState([])
  const [text,setText]=useState("")

  useEffect(()=>{
     getAllToDo(setToDo);
  },[])

  return (
    <>
      <div className="container">
        <h1>TO-DO-App</h1>

        <div className="top">
          <input type="text" placeholder="Add todos ..." value={text} onChange={(e)=>setText(e.target.value)}></input>
          <div className="add" onClick={()=>addToDo(text,setToDo,setText)}>Add</div>
         <div className="list">
          {
            toDo.map((item)=>
              <ToDo key={item._id } text={item.text}/>
            )
          }
         
         </div>
          
        </div>
      </div>
    </>
  );
}

export default App;

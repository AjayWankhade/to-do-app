import React from "react";


const Todo = (props) => {
  return (
    <div className="todo">
      <div className="text">{props.text}</div>
      <div className="icons">
      
      <div className="bi bi-file-plus-fill " onClick={props.updateMode}></div>
      
      <div className="bi bi-trash-fill " onClick={props.deleteToDo}></div>
      </div>
    </div>
  );
};

export default Todo;

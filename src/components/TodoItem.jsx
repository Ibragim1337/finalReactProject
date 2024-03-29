import React, { useRef } from "react";

const TodoItem = (props) => {
  const {item, updateTodo, removeTodo, completeTodo} = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus()
  }

  const update = (id, value, e) => {
    if(e.wich === 13){
      updateTodo({id, item: value});
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
            <textarea ref={inputRef}
             disabled={inputRef}
              defaultValue={item.item}
              onKeyDown={(e)=> update(item.id, inputRef.current.value, e)} />
            <div className="buttons">
            <button onClick={() => changeFocus()}>Edit</button>
            <button onClick={() => completeTodo(item.id)}>Complete</button>
            <button onClick={() => removeTodo(item.id)}>Delete</button>
            {item.completed && <span className="completed">done</span>}
            </div>
    </li>
  )
}

export default TodoItem;
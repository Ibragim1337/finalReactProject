import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodos, completeTodos, removeTodos, updateTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),

  }
}


const Todos = (props) => {
  const [todo, setTodo] = useState('');
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus()
  }

  const update = (id, value, e) => {
    if(e.wich === 13){
      props.updateTodo({id, item: value});
      inputRef.current.disabled = true;
    }
  }


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  console.log('props from store', props);

  return (
    <div className="addTodos">
      <input type="text"
       onChange={(e) => handleChange(e)}
       className="todo-input"
        />
      <button className="add-btn" 
      onClick={() => props.addTodo({
        id:'id' + Math.random().toString(16).slice(2),
        item: todo,
        description: '',
        completed: false
      })}
      >Add</button>
      <br/>

      <ul>
        {
          props.todos.map(item =>{
            return (
            <li key={item.id}>
            <textarea ref={inputRef}
             disabled={inputRef}
              defaultValue={item.item}
              onKeyDown={(e)=> update(item.id, inputRef.current.value, e)} />
            <button onClick={() => changeFocus()}>Edit</button>
            <button onClick={() => props.completeTodo(item.id)}>Complete</button>
            <button onClick={() => props.removeTodo(item.id)}>Delete</button>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

// connect связывает Counter с Redux Store, передавая состояние и действия в качестве свойств
export default connect(mapStateToProps,mapDispatchToProps)(Todos);
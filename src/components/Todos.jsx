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

  
  
  const handleChange = (e) => {
    setTodo(e.target.value)
  };

  return (
    <div className="addTodos">
      <input type="text"
       onChange={(e) => handleChange(e)}
       className="todo-input"
        />
      <button className="add-btn" 
        onClick={() => 

        props.addTodo({
        id:'id' + Math.random().toString(16).slice(2),
        item: todo,
        completed: false
      }) 
    }
      >Add</button>
      <br/>
    </div>
  )
}

// connect связывает с Redux Store, передавая состояние и действия в качестве свойств
export default connect(mapStateToProps,mapDispatchToProps)(Todos);
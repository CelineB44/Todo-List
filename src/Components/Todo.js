import React, { useContext } from 'react';
import CtxTodo from './CtxTodo';

import './Todo.css';

const Todo = (props) => {

  const [todos, setTodos ] = useContext(CtxTodo);

  const deleteTodo = () => {
    let newTodos =[...todos];
    newTodos.splice(props.index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="card mb-3 mt-2">
     <div className="card-body">
      <center><img className="images" src={`${process.env.PUBLIC_URL}/assets/images/mood-${props.mood}.jpg`} alt={props.mood}/></center>
        <h1 className="card-title"> {props.title}</h1>
        <p className="card-text">{props.describ}</p>
        <p className="card-text">{props.advance}</p>
        <button className="btn btn-danger" onClick={deleteTodo}>Delete</button>
      </div>  
   </div>
  )
};

export default Todo;

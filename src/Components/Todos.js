import React, { useContext } from 'react';
import Todo from './Todo';
import CtxTodo from './CtxTodo';

const Todos = () => {
 
  const [todos, setTodos ] = useContext(CtxTodo)

  return (
    <div>
      {todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} describ={todo.describ} mood={todo.mood} advance={todo.advance} index={index} />
      })}
    </div>
  )
};

export default Todos;

import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header';
import FormTodo from './Components/FormTodo';
import CtxTodo from './Components/CtxTodo';
import Todos from './Components/Todos';

function App() {

  const [todos, setTodos] = useState ([]);

  return (
    <div className="App">
      <header className="container p-3">
        <Header />
        <CtxTodo.Provider value={[todos, setTodos]}>
          <Todos />
          <FormTodo />
        </CtxTodo.Provider>
      </header>
    </div>
  );
}

export default App;

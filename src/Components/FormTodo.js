import React, { useState, useContext } from 'react';
import CtxTodo from './CtxTodo';

const FormTodo = () => {
  
  const Mood = ['magic', 'after', 'busy', 'sad', 'sporty', 'angry', 'challenge', 'choice', 'happy', 'idea','no_motivation', 'objectif' ];

  const Advance = ['in progress', 'is coming','finished', 'forget'];

  const [todos, setTodos ] = useContext(CtxTodo);

  const [form, setForm] = useState({
    title: '',
    describ: '',
    mood: 'magic',
    advance: 'in progress'
  });

  const addTodo = () => {
    setTodos([...todos, form])
    setForm ({
      title: '',
      describ: '',
      mood: 'magic',
      advance: 'in progress'
    })
  }
  return (
    <center><div className="card mb-3">
      <div className="card-body">
        <div class="form-group">
          <label htmlFor="Title" className="subtitle">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="Title" 
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})} />
      </div>
        <div className="form-group">
          <label htmlFor="Description" className="subtitle">Description</label>
          <input 
            type="text" 
            className="form-control" 
            id="Description" 
            value={form.describ} 
            onChange={(e) => setForm({...form, describ: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="Mood" className="subtitle">What is your mood?</label>
          <select className="form-control" 
          id="mood" 
          onChange={(e) => setForm({...form, mood: e.target.value})}>
            {Mood.map(mood => {
              return <option>{mood}</option>
            })};
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Advance" className="subtitle">What is your advance?</label>
          <select className="form-control" 
          id="advance" 
          onChange={(e) => setForm({...form, advance: e.target.value})}>
            {Advance.map(advance => {
              return <option>{advance}</option>
            })};
          </select>
        </div>
       <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>  
    </div></center>
  )
};

export default FormTodo;

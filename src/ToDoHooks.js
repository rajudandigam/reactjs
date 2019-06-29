import React, { useState } from 'react';

function List({items}) {
  return(
    <section>
      <ul className="list-items">
        {items.map((item, index) => (<li key={index} className="task-item">{item.text}</li>))}
      </ul>
    </section>
  );
}

function Form({onSubmit}) {
  const [text, setText] = useState('');
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };
  
  return(
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="task">Enter Task</label>
      <p>
      <input type="text" id="task" name="task" value={text} onInput={e => setText(e.target.value)}/>
      </p>
    </form>
  );
}

function ToDoHooks() {
  const [items, setItems] = useState([]);
  
  const onSubmit = (text) => setItems([...items, {text}])
  
  return(
    <article className="todo-container">
      <h2>Todo List App</h2>

      <Form onSubmit={onSubmit}/>
      <List items={items}/>
    </article>
  );
}

export default ToDoHooks;

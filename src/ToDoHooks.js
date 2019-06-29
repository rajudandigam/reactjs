function List({items}) {
  return(
    <section className="todolist">
      <ul>
        {items.map((item, index) => (<li key={index}>{item.text}</li>))}
      </ul>
    </section>
  );
}

function Form({onSubmit}) {
  const [text, setText] = React.useState('');
  
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
  const [items, setItems] = React.useState([]);
  
  const onSubmit = (text) => setItems([...items, {text}])
  
  return(
    <article>
      <h2>Todo List App</h2>

      <Form onSubmit={onSubmit}/>
      <List items={items}/>
    </article>
  );
}

export default ToDoHooks;

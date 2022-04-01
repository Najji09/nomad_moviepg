import { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    setTodoList((currentArray) => [todo, ...currentArray]);
    setTodo('');
    console.log(todoList);
  };
  return (
    <div>
      <h1>My to dos : {todoList.length}</h1>

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <ul>
        {todoList.map((value, index) => {
          return <li key={index.toString()}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;

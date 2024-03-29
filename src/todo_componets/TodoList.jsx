import { useEffect, useState } from 'react';
import '../apps/App.css';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList({filter}) {
  const initData = readFromLocalStorage();
  const [todos, setTodos] = useState(initData);

  const handleUpdate = updated => setTodos(todos.map(todo => (todo.id === updated.id) ? updated : todo));
  const handleDelete = deleted => setTodos(todos.filter(todo => todo.id !== deleted.id));
  const handleAdd = todo => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const filteredTodos = getFilterdTodos(todos, filter);
  return (
    <div>
      <ul>
        {
          filteredTodos.map(todo => (
            <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function readFromLocalStorage(){
  const todos = localStorage.getItem('todos');
  console.log(todos);
  return todos ? JSON.parse(todos) : [];
}

function getFilterdTodos(todos, filter) {
  if(filter === 'all'){
    return todos;
  }
  return todos.filter(todo => todo.status === filter);
}
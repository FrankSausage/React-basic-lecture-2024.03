import './App.css';
import TodoList from '../todo_componets/TodoList';
import Header from '../todo_componets/Header';
import { useState } from 'react';

function App() {
    const filters = ['all', 'active', 'completed'];
    const [filter, setFilter] = useState('all');
  return (
    <div className='card'> 
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter}/>
    </div>
  );
}

export default App;
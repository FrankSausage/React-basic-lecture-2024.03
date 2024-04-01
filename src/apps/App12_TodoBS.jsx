import { useState } from 'react';
import TodoList from '../todo_componets/TodoList';
import Header from '../todo_componets/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

function App() {
    const filters = ['all', 'active', 'completed'];
    const [filter, setFilter] = useState('all');
  // return (
  //   <Card>
  //     <Card.Header>
  //       <Card.Title>오늘 할 일</Card.Title>
  //       <Header filters={filters} filter={filter} onFilterChange={setFilter} />
  //     </Card.Header>
  //     <Card.Body>
  //       <TodoList filter={filter}/>
  //     </Card.Body>
  //   </Card>
  // );
}

export default App;
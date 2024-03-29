import { v4 as uuidv4 } from 'uuid';
import '../apps/App.css';
import { BsCheckSquare } from "react-icons/bs";
import { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0){
      return;
    }
    onAdd({id: uuidv4(), work:text, status:'active'});
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} style={{marginTop: 20}}>
      <input type='text' placeholder='할 일을 입력하세요.' value={text} onChange={handleChange} />
      <button><BsCheckSquare /> 추가</button>
    </form>
  );
}
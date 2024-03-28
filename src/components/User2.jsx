import { useState } from 'react';
import '../apps/App.css';

export default function User2(props) {
  const initUsers= [
    {id:1, name:'admin', email:'admin@naver.com'},
    {id:2, name:'james', email:'james@naver.com'}
  ]
  const [users, setUsers] = useState(initUsers);
  const [form, setForm] = useState({id:'', name:'', email:''});
  const handleSubmit = (e) => {
    e.preventDefault();
    let getUser = users.find(item => item.id == form.id);
    if(getUser){
      const getList = users.filter(item => item.id != form.id);
      getList.push(form);
      getList.sort((a, b) => a.id.localeCompare(b.id));
      setUsers(getList);
    } else {
      setUsers([...users, form]);
    }
  }
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }
  return (
    <div className="card">    
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr><th>ID</th><th>Name</th><th>Email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>아이디:</label>
        <input type='text' id='id' name='id' value={form.id} onChange={handleChange} />
        <br />
        <label htmlFor='name'>이름:</label>
        <input type='text' id='name' name='name' value={form.name} onChange={handleChange} />
        <br />
        <label htmlFor='email'>이메일:</label>
        <input type='text' id='email' name='email' value={form.email} onChange={handleChange} />
        <br />
        <button>제출</button>
      </form>
      <button onClick={()=>{
        const id = prompt('Id 값을 입력하세요');
        const newUser = users.filter(user => user.id != id);
        setUsers(newUser);
      }}>삭제</button>
    </div>
  );
}


import { useState } from 'react';
import '../apps/App.css';

export default function User(props) {
  const initUsers= [
    {id:1, name:'admin', email:'admin@naver.com'},
    {id:2, name:'james', email:'james@naver.com'}
  ]
  const [users, setUsers] = useState(initUsers);
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
      <button onClick={()=>{
        const id = prompt('Id 값을 입력하세요');
        const name = prompt('이름을 입력하세요');
        const email = prompt('이메일을 입력하세요');
        setUsers([...users, {id, name, email}]);
      }}>추가</button>
      <button onClick={()=>{
        const id = prompt('Id 값을 입력하세요');
        const newUser = users.filter(user => user.id != id);
        setUsers(newUser);
      }}>삭제</button>
    </div>
  );
}


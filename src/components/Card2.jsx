import '../apps/App.css';

export default function Card2(props) {  // props: properties
  return (
    <div className="card">   
      <h1 style={{backgroundColor:"skyblue"}}>{props.person.name}</h1>
      <hr />  
      <img src={`https://picsum.photos/200/200?q=${props.person.id}`} className="photo" />
      <br />
      <h3>{props.person.job}</h3>
    </div>
  );
}

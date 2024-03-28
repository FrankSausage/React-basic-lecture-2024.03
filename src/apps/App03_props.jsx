import './App.css';
import Card from '../components/Card2';

function App() {
  const james = {id:1, name:'James', job:'Back-end programmer'};
  const maria = {id:2, name:'Maria', job:'React JS programmer'};
  return (
    <>    
      <Card person={james} />
      <br />
      <Card person={maria} />
    </>
  );
}

export default App;

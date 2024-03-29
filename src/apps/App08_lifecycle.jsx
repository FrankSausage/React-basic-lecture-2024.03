import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleFile = () => {
    fetch('/data/products.json')
      .then(res => res.json())      // JSON parsing
      .then(data => {
        console.log('데이터를 네트워크에서 받아옴');
        console.log(data);
      });
  }
  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())      // JSON parsing
      .then(data => {
        console.log('데이터를 네트워크에서 받아옴');
        console.log(data);
        setProducts(data);
      });
    return () => {
      console.log('죽을 때 마지막으로 실행되어야 하는 코드');
    }
  }, [checked]);     // checked 값이 변화했을 때 실행
  // }, []); --> 최초 1회 실행

  return (
    <div className='card'>
      <ul>프로덕트 목록<br />
        {
          products.map((product, index) => (
            <li key={index}>{product.name} {product.price}</li>
          ))
        }
      </ul>

      <button onClick={handleFile}>파일 읽기</button>
    </div>
  );
}

export default App;
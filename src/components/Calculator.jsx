import { useState } from 'react';
import '../apps/App.css';

export default function Calculator(props) {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  const [result, setResult] = useState(0);
  const [op, setOp] = useState('');
  const [viewer, setViewer] = useState(0);
  
  function addNum(num) {
    if(val == 0){
      setVal(num);
      setViewer(num);
    } else {
      let totalVal_ = '' + val + num;
      console.log(totalVal_)
      setVal(parseInt(totalVal_));
      setViewer(parseInt(totalVal_));
    }
  }
  
  function calculating(e) {
      switch (e) {
        case '+':
          if(val2 == 0){
            setVal2(val);
            setOp('+');
            setVal(0);
            setViewer(0);
          } else {
            setResult(val2+val);
          }
          break;
        case '-':
          if(val2 == 0){
            setVal2(val);
            setOp('-');
            setVal(0);
            setViewer(0);
          } else {
            setResult((val2-val));
          }
          break;
        case '*':
          if(val2 == 0){
            setVal2(val);
            setOp('*');
            setVal(0);
            setViewer(0);
          } else {
            setResult((val2*val));
          }
          break;
        case '/':
          if(val2 == 0){
            setVal2(val);
            setOp('/');
            setVal(0);
            setViewer(0);
          } else {
            setResult((val2/val));
          }
          break;
      }
  }

  function reset(){
    setVal(0);
    setVal2(0); 
    setResult(0);
    setViewer(0);
  }

  function resulting() {
    let resultValue = result;
    if(val2 != 0) {
        console.log(`계산 들어옴! = ${op}`)
        calculating(op);
        resultValue = result;
        console.error(`val1 = ${val}, val2 = ${val2}, result = ${resultValue}`)
    }

  }

  return (
    <div className="card">    
      <h1>계산기</h1>
      <span>{val},</span><span>{val2},</span><span>{result},</span><span>{viewer}</span><span>{op}</span>
      <hr></hr>
      <input className="header" type='text' value={viewer} readOnly />
      <table border={1}>
        <tbody>
          <tr>
            <td onClick={()=>calculating('/')}>/</td>
            <td onClick={()=>calculating('*')}>X</td>
            <td onClick={()=>calculating('-')}>-</td>
            <td onClick={()=>calculating('+')}>+</td>
          </tr>
          <tr>
            <td onClick={()=>addNum(7)}>7</td>
            <td onClick={()=>addNum(8)}>8</td>
            <td onClick={()=>addNum(9)}>9</td>
            <td onClick={reset}>C</td>
          </tr>
          <tr>
            <td onClick={()=>addNum(4)}>4</td>
            <td onClick={()=>addNum(5)}>5</td>
            <td onClick={()=>addNum(6)}>6</td>
            <td rowSpan={3} onClick={resulting}>=</td>
          </tr>
          <tr>
            <td onClick={()=>addNum(1)}>1</td>
            <td onClick={()=>addNum(2)}>2</td>
            <td onClick={()=>addNum(3)}>3</td>
          </tr>
          <tr>
            <td colSpan={3} onClick={()=>addNum(0)}>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


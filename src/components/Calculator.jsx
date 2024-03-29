import { useState } from 'react';
import '../apps/calculator.css';

export default function Calculator() {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  const [result, setResult] = useState(0);
  const [opr, setOpr] = useState('');
  const [viewer, setViewer] = useState('');

  const addNum = num => {
    if (val === 0) {
      setViewer(num); setVal(num);
    } else {
      let numText = '' + val + num;
      setVal(parseInt(numText)); setViewer(numText);
    }
  }

  const calculate = (opr) => {
    let opResult = 0;
    switch (opr) {
      case '+':
        if(opr != '+'){
          calculate(opr);
          break;
        }
        if (result !== 0) {
          opResult = val + result;
          setVal(0); setVal2(opResult); setResult(opResult); setViewer(opResult);
        } else if (val2 === 0) {
          setVal2(val); setViewer(val); setVal(0);
        } else if (result === 0) {
          opResult = val + val2;
          setResult(opResult); setViewer(opResult); setVal(0); setVal2(0);
        } else {
          setVal(opResult); setResult(0);
        }
        setOpr('+');
        break;
      case '-':
        if (result !== 0) {
          opResult = result - val;
          setVal(0); setVal2(opResult); setResult(opResult); setViewer(opResult);
        } else if (val2 === 0) {
          setVal2(val); setViewer(val); setVal(0);
        } else if (result === 0) {
          opResult = val2 - val;
          setResult(opResult); setViewer(opResult); setVal(0); setVal2(0);
        } else {
          setVal(opResult); setResult(0);
        }
        setOpr('-');
        break;
      case '*':
        if(val === 0 && val2 === 0){
          return;
        }
        if (result !== 0) {
          opResult = val * result;
          setVal(0); setVal2(opResult); setResult(opResult); setViewer(opResult);
        } else if (val2 === 0) {
          setVal2(val); setViewer(val); setVal(0);
        } else if (result === 0) {
          opResult = val * val2;
          setResult(opResult); setViewer(opResult); setVal(0); setVal2(0);
        } else {
          setVal(opResult); setResult(0);
        }
        setOpr('*');
        break;
      case '/':
        if((val === 0 && val2 === 0)){
          return;
        }
        if (result !== 0) {
          opResult = val / result;
          setVal(0); setVal2(opResult); setResult(opResult); setViewer(opResult);
        } else if (val2 === 0) {
          setVal2(val); setViewer(val); setVal(0);
        } else if (result === 0) {
          opResult = val / val2;
          setResult(opResult); setViewer(opResult); setVal(0); setVal2(0);
        } else {
          setVal(opResult); setResult(0);
        }
        setOpr('/');
        break;
      case 'c':
        opResult = 0; setVal(0); setVal2(0); setResult(0); setViewer(0); setOpr('');
        break;
    }
  }
  const getResult = () => {
    if(val === 0 || val2 === 0){
      return;
    } else {
      calculate(opr);
    }
  }
  return (
    <div className="card">
      <h1>계산기</h1>
      <span>{val},</span><span>{val2},</span><span>{result},</span><span>{viewer}</span><span>{opr}</span>
      <hr></hr>
      <input className="header" type='text' value={viewer} readOnly />
      <table border={1}>
        <tbody>
          <tr>
            <td onClick={() => calculate('/')}>/</td>
            <td onClick={() => calculate('*')}>X</td>
            <td onClick={() => calculate('-')}>-</td>
            <td onClick={() => calculate('+')}>+</td>
          </tr>
          <tr>
            <td onClick={() => addNum(7)}>7</td>
            <td onClick={() => addNum(8)}>8</td>
            <td onClick={() => addNum(9)}>9</td>
            <td onClick={() => calculate('c')}>C</td>
          </tr>
          <tr>
            <td onClick={() => addNum(4)}>4</td>
            <td onClick={() => addNum(5)}>5</td>
            <td onClick={() => addNum(6)}>6</td>
            <td rowSpan={3} onClick={getResult}>=</td>
          </tr>
          <tr>
            <td onClick={() => addNum(1)}>1</td>
            <td onClick={() => addNum(2)}>2</td>
            <td onClick={() => addNum(3)}>3</td>
          </tr>
          <tr>
            <td colSpan={3} onClick={() => addNum(0)}>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


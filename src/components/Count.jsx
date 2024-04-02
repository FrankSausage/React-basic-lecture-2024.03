import { useState } from "react";

export default function Count() {
    const [num, setNum] = useState(1);
    return (
      <div>
        <div style={{textAlign: 'center'}}>
            <h1>{num}</h1>
                <div>
                    <button 
                        onClick={() => (num > 9) ? setNum(1) : setNum(num+1)}
                        style={{marginRight:30, fontSize: 20, fontWeight: 'bold',}}
                    >값 증가</button>
                    <button 
                        onClick={() => setNum(1)}
                        style={{fontSize: 20, fontWeight: 'bold',}}
                    >초기화</button>
                </div>
        </div>
      </div>
    );
  }
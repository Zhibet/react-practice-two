import React, { useState } from "react";
import './App.css'

function App(props) {
  const name = props.name;
  const [num, setNum] = useState(0)

  const handleAdd = ()=>{
    setNum(c => c + 1)
  };

  const handlesub = ()=>{
    setNum(c => c - 1)
  };

  const reset = ()=>{
    setNum(0)
  }

  return (
   <div>
    <h1 className="header">{name}</h1>
    <div className="counter-container">
      <h2>{num}</h2>
      <div className="btn-container">
        <button onClick={handleAdd}>add</button>
        <button onClick={reset}>reset</button>
        <button onClick={handlesub}>subtract</button>
      </div>
    </div>
   </div>
  );
}

export default App;
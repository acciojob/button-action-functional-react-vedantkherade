import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState(false);

  function handleClick(){
     setPara(true);
  }

  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={handleClick}>Click me</button>

      {para && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;

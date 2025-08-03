import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(1);

  // a. Increment handlers
  const increment = () => {
    setCount(count + 1);
    sayHello();
    staticMessage();
  };

  const sayHello = () => {
    console.log("Hello");
  };

  const staticMessage = () => {
    console.log("This is a static message after incrementing");
  };

  // b. Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // c. Welcome handler
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // d. Synthetic event handler
  const handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome to the event handler example!")}>
        Say welcome
      </button>
      <br /><br />
      <button onClick={handleClick}>Click on me</button>

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

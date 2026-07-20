import React, { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const [amount, setAmount] = useState("");

  const [currency, setCurrency] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Member1");
  }

  function incrementAndHello() {
    increment();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function onPress() {
    alert("I was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (currency.toLowerCase() === "euro") {
      alert(
        "Converting to Euro Amount is " + Number(amount) * 80
      );
    } else {
      alert("Please enter Currency as Euro");
    }
  }

  return (
    <div className="App">

      <h2>{count}</h2>

      <button onClick={incrementAndHello}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <button
        onClick={() => sayWelcome("Welcome")}
      >
        Say Welcome
      </button>

      <button onClick={onPress}>
        Click on Me
      </button>

      <br />
      <br />

      <h2>Currency Convertor!!!</h2>

      <form onSubmit={handleSubmit}>

        <label>Amount: </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <label>Currency: </label>

        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;
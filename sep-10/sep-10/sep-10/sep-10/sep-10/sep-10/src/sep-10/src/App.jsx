import { useState } from "react";
import "./App.css";

function App() {
  const [n, setN] = useState(3);
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [sum, setSum] = useState(6);

  const generateInputs = () => {
    const count = Number(n);

    if (count < 1) {
      setNumbers([]);
      setSum(0);
      return;
    }

    const newNumbers = [];

    for (let i = 1; i <= count; i++) {
      newNumbers.push(i);
    }

    setNumbers(newNumbers);
    setSum(0);
  };

  const calculateSum = () => {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
      total += Number(numbers[i]);
    }

    setSum(total);
  };

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  return (
    <div className="page">

      <div className="container">

        <h1>Sum of n Numbers</h1>
        <h2>Enter a number </h2>

        <div className="n-section">

          <label>Enter n:</label>

          <input
            type="number"
            value={n}
            min="1"
            onChange={(e) => setN(e.target.value)}
          />

          <button onClick={generateInputs}>
            Generate Inputs
          </button>

        </div>

        <div className="inputs">

          {numbers.map((number, index) => (
            <input
              key={index}
              type="number"
              value={number}
              onChange={(e) =>
                handleNumberChange(index, e.target.value)
              }
            />
          ))}

        </div>

        <button className="calculate" onClick={calculateSum}>
          Calculate Sum
        </button>

        <h2>Sum of the numbers = {sum}</h2>

      </div>

    </div>
  );
}

export default App;
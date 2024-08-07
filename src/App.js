import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="display">
            {input || '0'}
          </div>
          <div className="buttons">
            <button className="button" onClick={() => handleClick('1')}>1</button>
            <button className="button" onClick={() => handleClick('2')}>2</button>
            <button className="button" onClick={() => handleClick('3')}>3</button>
            <button className="button operator" onClick={() => handleClick('+')}>+</button>
            <button className="button" onClick={() => handleClick('4')}>4</button>
            <button className="button" onClick={() => handleClick('5')}>5</button>
            <button className="button" onClick={() => handleClick('6')}>6</button>
            <button className="button operator" onClick={() => handleClick('-')}>-</button>
            <button className="button" onClick={() => handleClick('7')}>7</button>
            <button className="button" onClick={() => handleClick('8')}>8</button>
            <button className="button" onClick={() => handleClick('9')}>9</button>
            <button className="button operator" onClick={() => handleClick('*')}>*</button>
            <button className="button" onClick={() => handleClick('.')}>.</button>
            <button className="button" onClick={() => handleClick('0')}>0</button>
            <button className="button operator" onClick={handleCalculate}>=</button>
            <button className="button operator" onClick={() => handleClick('/')}>/</button>
            <button className="button clear" onClick={handleClear}>C</button>
            <button className="button" onClick={handleBackspace}>←</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

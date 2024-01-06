import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // const handleClickMinus = () => {
  //   setCounter(counter - 1);
  // };

  const handleClick = (action) => {
    if (action === "minus") {
      setCounter(counter - 1);
    } else if (action === "plus") {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="App">
      <div className="buttons-container">
        {counter > 0 && (
          <button
            onClick={() => {
              handleClick("minus");
            }}
          >
            -
          </button>
        )}

        <p>{counter}</p>
        {counter < 10 && (
          <button
            onClick={() => {
              handleClick("plus");
            }}
          >
            +
          </button>
        )}
      </div>
      <div className="center-container">
        <button
          className="reset-button"
          onClick={() => {
            setCounter(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default App;

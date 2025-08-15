import {
  useState,
  useRef,
  useEffect,
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (resultRef?.current) {
        resultRef.current.textContent = result;
    }
    }, [result]);
  useEffect(() => {
    if (alertMessage !== '') {
        window.alert(alertMessage);
        setAlertMessage('');
    }
  }, [alertMessage]);

  function plus(e) {
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const { current : { value } } = inputRef;
    const numberValue = Number.parseFloat(value);
    if (!isNaN(numberValue)) {
        if (numberValue !== 0) {
            setResult((result) => result / numberValue);
        } else {
            setAlertMessage('Cannot divide by zero.');
        }
    }
  };
 
  function resetInput(e) { 
    if (inputRef?.current) {
        inputRef.current.value = '';
    }
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        {/* Add the subtract button */} 
        <button onClick={minus}>minus</button>
        {/* Add the multiply button */} 
        <button onClick={times}>times</button>
        {/* Add the divide button */} 
        <button onClick={divide}>divided</button>
        {/* Add the resetInput button */} 
        <button onClick={resetInput}>reset input</button>
        {/* Add the resetResult button */} 
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 

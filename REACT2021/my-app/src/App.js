import React, {useState} from 'react';
import './App.css';


//functional component
function App() {
 const [count, setCount] = useState(0)
 const [age, setAge] = useState(0)

 
const increment = () =>{
  setCount(count + 1)
}
const decrement = () =>{
  setCount(count - 1)
}


  return (
    <div className="app">
      <h1>Welcome to my counter app</h1>
      <p>The count is : {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}



export default App;


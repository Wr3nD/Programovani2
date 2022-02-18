import React, { useState } from 'react'
import Product from './Product'
import styles from "./App.module.css"

function App() {
  
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const addTodo = (e) => {
        e.preventDefault() //this prevents a REFRESH!!
        setTodos([...todos, input])
        setInput("")
    }
    return (
    <div>
        <h1>Welcome to My TODO list</h1>
        <form>

        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
        <button type="submit" onClick={addTodo}>Add todo</button>

        </form>
        <h2>List of Todos</h2>
        {todos.map(todo => (<p>{todo}</p>))}





        {/* <Product 
        name="Amazon Echo" 
        description="Your AI assistent" 
        price={59.99}
        />
        <Product 
        name="Iphote 12 Pro max" 
        description="the best phone" 
        price={1200}
        />
        <Product 
        name="Macbook Pro" 
        description="Your favorite PC" 
        price={2000}
        />
        <Product 
        name="Preflop Mage" 
        description="Your preflop asistent" 
        price={9.99}
        /> */}

        
        
    </div>
  )
}

export default App
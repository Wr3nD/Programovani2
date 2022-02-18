import  { useRef, useState } from 'react'
import useRandomJoke from './useRandomJoke'

function Joke() {
    //custom hook
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const [firstName, setFirstName] = useState("Vít")
    const [lastName, setLastName] = useState("Radosta")
    
    const joke = useRandomJoke(firstName,lastName)

    const generateJoke = e => {
        e.preventDefault()
        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
        
    } 
  
    return (
    <div>
        <center>

            <h1>The Joke generator</h1>
            <h2>{joke}</h2>

            <form>
                <input placeholder='first name' ref={firstNameRef} />
                <input placeholder='last name' ref={lastNameRef} />
            <button onClick={generateJoke}> generate joke</button>
            </form>
        </center>
    </div>
  )
}

export default Joke
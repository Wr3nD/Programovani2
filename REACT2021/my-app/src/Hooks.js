import React, { useEffect, useState } from 'react'


function Hooks() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [name, setName] = useState("")

    //On every render
    useEffect(() =>{
        console.log("i re-rendered")
    }) 

    //on first Render/mount ONLY ! - component Did mount alternative
    useEffect(() =>{
        console.log("the component Mounted")
    },[]) //dependency array => only run this on the first render= Mount

    //On first render + whenever depenancy changes! - component did update alternative
    useEffect(() =>{
        console.log(`the name changed!:${name}`)
    },[name]) // when we include variable ( and any time this variable changes this change trigers use effect)

    //folow the same rules, except this handles the unmounting on a component - componentWillUnmount alternative
    useEffect(() =>{
        window.addEventListener("resize",updateWindowWidth)
        //when component unmounts, this cleanup code runs ...
        return() => { // cleanup function zamezí nesmyslnému přidávání event listeneru které by zatěžovali vykon naší app 
            window.removeEventListener("resize",updateWindowWidth)
        }
    },[]) // když tu necháme ten array provede se to jenom jednou když ho dáme pryč bude to furt přidávat a odmazávat ten listener , takže
         //záleží na usecasu 

    const updateWindowWidth = () =>{
        setWindowWidth(window.innerWidth)
    }
    return (
    <div className="app">
        <center>
            <h1>The useEffect HOOK</h1>
            <h2>The window width is : {windowWidth}</h2>
        </center>
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter a name" />

    </div>
  )
}

export default Hooks
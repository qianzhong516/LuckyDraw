import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [roll, setRoll] = useState(false)
  const [names, setNames] = useState(["Simon", "Boblooba", "Bean", "Mandi"])
  const [prizes, setPrizes] = useState(["TV", "$5000", "Trip", "Nothing"])
  const [name, setName] = useState("Who's the")
  const [prize, setPrize] = useState("Lucky Guy !?")
  const [myVal, setMyVal] = useState()

  useEffect(()=>{


    const callback = () => {

      // generate number between 0 - length of the names array 
        let luckyIndex = Math.floor(Math.random()*names.length) 
     
        setName(names[luckyIndex])

  
        let luckyPrize = Math.floor(Math.random()*prizes.length)
        setPrize(prizes[luckyPrize])

    }


    if(roll){
      if(names.length > 1){
        let myVal = setInterval(callback,50)
        setMyVal(myVal)
      }else{
        setName(names[0])
        setPrize(prizes[0])
        let button = document.querySelector('.get-lucky')
        button.disabled = true
        button.innerHTML = "All done!"
      }

    }else{
      setNames(names.filter( n => n!== name))
      setPrizes(prizes.filter( p => p !== prize ))
      clearInterval(myVal)
    }

  },[roll])


  return (
    <div className="container">
      <div className="candidates">Candidates left: {names.join(', ')}</div>
      <div className="prize">Prize left: {prizes.join(', ')}</div>
      <div className="name"><h1>{name}</h1></div>
      <div className="prize"><h1>{prize}</h1></div>
      <button className="get-lucky" onClick={ () => setRoll(!roll) }>{ roll ? "Confirm!" : "Get Lucky!" }</button>
    </div>
  );
}

export default App;

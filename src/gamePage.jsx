import React from 'react';
import './GamePage.css';
import { useState } from 'react';

function gamePage() {
const [selectedButton, setselectedButton]=useState(null);
const [diceValue, setdiceValue]=useState(1);
const [scoreValue, setscoreValue]=useState(0);
const [imageValue, setimageValue]=useState(1);



const hendelButton = (num) => {
    console.log(num)
    if (selectedButton === num) {
        setselectedButton(null); // Deselect if the same button is clicked
      } else {
        setselectedButton(num); // Select the clicked button
      }
}     

const handelDice = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    setdiceValue(number);
    setimageValue(number);
    // if(diceValue == selectedButton){
    //     setscoreValue(scoreValue+2)
    // } else if(scoreValue > 0){
    //     setscoreValue( scoreValue-1)
    // }
    setscoreValue((prevScore) => {
        if (number === selectedButton) {
          return prevScore + 2; // Increment score by 2
        } else if (prevScore > 0) {
          return prevScore - 1; // Decrement score by 1 if score is greater than 0
        }
        return prevScore; // Keep score the same if no match and score is 0
      });
}

console.log(selectedButton);
console.log(diceValue)

const resetGame = () => {
    setselectedButton(null);
    setdiceValue(1);
    setscoreValue(0);
    setimageValue(1);
  };

  return (
    <div>
    <header className='header'>
        <div className="scoreCard">
            <p className="score" >{scoreValue}</p>
            <h1>Total Score</h1>
        </div>
        <div className="numberContainer">
            <div className="numberCards">
                {[1,2,3,4,5,6].map((num) => (
                 <button key={num} id={num} onClick={() => hendelButton(num)}
                 style={{
                    backgroundColor: selectedButton === num ? "black" : "white",
                    color: selectedButton === num ? "white" : "black",
                 }}
                 >{num}</button>   
                ))}

            </div>
            <p>Select Number</p>
        </div>
    </header>
    <div className="mainInterface">
        <button className="dice" onClick={() => handelDice()}
            style={{
                backgroundImage: `url(/imges/dice${imageValue}.png)`,
        }}> </button>
        <h1>Click On Dice To Roll</h1>
        <button className='reset' onClick={resetGame}>Reset Score</button>
        <button className='rules'>Show rules</button>
    </div>
    </div>
  );
}

export default gamePage;
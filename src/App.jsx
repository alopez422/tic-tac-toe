import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to keep track of the total moves made
  const [count, setCount] = useState(0);

  // State to store the game result (win/tie message)
  const [win, setWin] = useState("");

  // State for each grid cell (Top-Left, Top-Middle, etc.)
  const [TL, setTL] = useState("");
  const [TM, setTM] = useState("");
  const [TR, setTR] = useState("");
  const [ML, setML] = useState("");
  const [MM, setMM] = useState("");
  const [MR, setMR] = useState("");
  const [BL, setBL] = useState("");
  const [BM, setBM] = useState("");
  const [BR, setBR] = useState("");

  // useEffect will check for a winner or tie every time the count changes
  useEffect(() => {
    checkWinOrLose();
  }, [count]);

  // Handles clicking on a square
  const changeLetter = (setLetter, letter) => {
    // Only allow changing a square if it's empty
    if (letter == "" && win == "") {
      setCount((prev) => prev + 1); // Increase move count

      // Alternate turns between player one ('x') and player two ('o')
      if (count % 2 == 0) {
        setLetter("x");
      } else {
        setLetter("o");
      }
    }
  }


const checkWinOrLose = () => {

switch(true){       
  // checking if 3 are in a row
  case TL == "x" && TM == "x" && TR == "x":
    setWin ("player one wins")
    break; 
  case ML == "x" && MM == "x" && MR == "x":
    setWin ( "player one wins")
    break;
  case BL == "x" && BM == "x" && BR == "x":
    setWin ( "player one wins")
    break;
  case TL == "x" && ML == "x" && BL == "x":
    setWin ( "player one wins")
    break;
  case TM == "x" && MM == "x" && BM == "x":
    setWin ( "player one wins")
    break;
  case TR == "x" && MR == "x" && BR == "x":
    setWin ( "player one wins")
    break;
  case TL == "x" && MM == "x" && BR == "x":
    setWin ( "player one wins")
    break;
  case TR == "x" && MM == "x" && BL == "x":
    setWin ( "player one wins")
    break;

  case TL == "o" && TM == "o" && TR == "o":
    setWin ("player two wins")
    break; 
  case ML == "o" && MM == "o" && MR == "o":
    setWin ("player two wins")
    break;
  case BL == "o" && BM == "o" && BR == "o":
    setWin ("player two wins")
    break;
  case TL == "o" && ML == "o" && BL == "o":
    setWin ("player two wins")
    break;
  case TM == "o" && MM == "o" && BM == "o":
    setWin ("player two wins")
    break;
  case TR == "o" && MR == "o" && BR == "o":
    setWin ("player two wins")
    break;
  case TL == "o" && MM == "o" && BR == "o":
    setWin ("player two wins")
    break;
  case TR == "o" && MM == "o" && BL == "o":
    setWin ("player two wins")
    break;
  // If 9 moves are made and no winner, it's a tie
  case count == 9:
    setWin ("tie game")

}




}





  const reset = () => {
    setTL("");
    setTM("");
    setTR("");
    setML("");
    setMM("");
    setMR("");
    setBL("");
    setBM("");
    setBR("");
    setWin("")
    setCount(0)
  }





  return (
    <>

<h1>
  {win}
</h1>


    <div className='grid'>

  <button id="TL"onClick={() => changeLetter(setTL, TL)}>{TL}</button>  
  <button id="TM"onClick={() => changeLetter(setTM, TM)}>{TM}</button> 
  <button id="TR"onClick={() => changeLetter(setTR, TR)}>{TR}</button> 
  <button id="ML"onClick={() => changeLetter(setML, ML)}>{ML}</button> 
  <button id="MM"onClick={() => changeLetter(setMM, MM)}>{MM}</button> 
  <button id="MR"onClick={() => changeLetter(setMR, MR)}>{MR}</button> 
  <button id="BL"onClick={() => changeLetter(setBL, BL)}>{BL}</button> 
  <button id="BM"onClick={() => changeLetter(setBM, BM)}>{BM}</button> 
  <button id="BR"onClick={() => changeLetter(setBR, BR)}>{BR}</button> 

  </div>
 <button  className="reset" onClick={reset}> reset </button>
  </>
  )
}

export default App
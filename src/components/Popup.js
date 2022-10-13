import React , {useEffect} from 'react'
import { cheakWin } from '../helper/helper';

const Popup = ({correctLetters,wrongLetter,selectedWord,setPlayable,playAgain}) => {
  let finalMessage = '';
  let finalMessageRevelWord = '';
  let playable = true;
  if(cheakWin(correctLetters,wrongLetter,selectedWord) === 'win'){
    finalMessage = 'Congratulations';
    playable = false
  }
  else if(cheakWin(correctLetters,wrongLetter,selectedWord) === 'lose'){
    console.log('hjvhii')
    finalMessage = 'Unfortunately You Lost';
    finalMessageRevelWord = `... the word was : ${selectedWord}`
    playable = false;
  } 
  useEffect(() => setPlayable(playable))
  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevelWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}
export default Popup;

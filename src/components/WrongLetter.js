import React from 'react'

const WrongLetter = ({wrongLetters}) => {
  return (
    <div className="wrong-letters-container">
        <div>
          {wrongLetters.legth > 0 && <p>Wrong</p>}
          {wrongLetters.map((letter,i) => <span key={i}>{letter}</span>)
          .reduce((prv,cur) => prv === null ? [cur] : [prv ,', ',cur] ,null)}
        </div>
      </div>
  )
}
export default WrongLetter;

import React,{useState} from 'react'
import Board from './Board'

const PLAYER_X="X"
const PLAYER_O="O"

function TicTacToe() {
  const [tiles,setTiles]=useState(Array(9).fill(null))
  const [playerTurn,setPlayerTurn]=useState(PLAYER_X)

  const handleTileClick=(index)=>{
        console.log(index)
  }
  return (
    <div>
        <h1>TicTacToe</h1>
        <Board  tiles={tiles} onTileClick={handleTileClick}/>

    </div>
  )
}
  
export default TicTacToe
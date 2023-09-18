import React,{useState,useEffect} from 'react'
import Board from './Board'
import GameOver from './GameOver'
import GameState from './GameState'
import Reset from './Reset'
import gameOverSoundAsset from "../sounds/gameOver.wav"
import clickSoundAsset from "../sounds/click.wav"
import winningSoundAsset from "../sounds/winning.wav"

const gameOverSound=new Audio(gameOverSoundAsset)
const clickSound=new Audio(clickSoundAsset)
const winningSound=new Audio(winningSoundAsset)

console.log(winningSound)
const PLAYER_X="X"
const PLAYER_O="O"
const winningCombination=[
  //row
  {combo:[0,1,2],strikeClass:"strike-row-1"},
  {combo:[3,4,5],strikeClass:"strike-row-2"},
  {combo:[6,7,8],strikeClass:"strike-row-3"},
  //column
  {combo:[0,3,6],strikeClass:"strike-column-1"},
  {combo:[1,4,7],strikeClass:"strike-column-2"},
  {combo:[2,5,8],strikeClass:"strike-column-3"},
  //diagonal
  {combo:[0,4,8],strikeClass:"strike-diagonal-1"},
  {combo:[2,4,6],strikeClass:"strike-diagonal-2"},
  
]

function  checkWinner(tiles,setStrikeClass,setGameState){
     for(let {combo,strikeClass} of winningCombination){
      if(tiles[combo[0]]!==null && tiles[combo[0]]===tiles[combo[1]] && tiles[combo[0]]===tiles[combo[2]]){
           setStrikeClass((pre)=>(strikeClass))
           if(tiles[combo[0]]==="X"){
            setGameState(GameState.playerXwin)
            
           }else{
            setGameState(GameState.playerOwin)
           }
           winningSound.play()
           return;
      }
     }
   const checkAllIndex=tiles.every((ele)=> ele!==null);
   if(checkAllIndex){
    setGameState(GameState.draw)
    gameOverSound.play()
   }
   return;
}

function TicTacToe() {
  const [tiles,setTiles]=useState(Array(9).fill(null))
  const [playerTurn,setPlayerTurn]=useState(PLAYER_X)
  const [strikeClass,setStrikeClass]=useState("")
  const [gameState,setGameState]=useState(GameState.inprogress)
  useEffect(()=>{
    checkWinner(tiles,setStrikeClass,setGameState)
    
    if(tiles.some((el)=>el!==null)){
      clickSound.play();
    }
    

  },[tiles])

  const handleTileClick=(index)=>{
     if(gameState!==GameState.inprogress){
      return;
     }
        let newTiles=[...tiles]
        if(newTiles[index]!==null){
          return;
        }
          newTiles[index]=playerTurn
          setTiles(newTiles)
          if(playerTurn===PLAYER_X){
            setPlayerTurn(PLAYER_O)
          }else{
            setPlayerTurn(PLAYER_X)
          }
  }
  const handleReset=()=>{
       setTiles(Array(9).fill(null))
       setPlayerTurn(PLAYER_X)
       setStrikeClass("")
       setGameState(GameState.inprogress)
  }
  return (
    <div>
        <h1>Tic-Tac-Toe</h1>
        <Board  tiles={tiles} onTileClick={handleTileClick} classHover={playerTurn} strikeClass={strikeClass}/>
        <GameOver gameState={gameState}/>
        <Reset gameState={gameState} onReset={handleReset}/>
    </div>
  )
}
  
export default TicTacToe
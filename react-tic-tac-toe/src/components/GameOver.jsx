import React from 'react'
import GameState from './GameState';
function GameOver({gameState}) {
 
    switch (gameState) {
        case GameState.inprogress:
                return <></>;
        case GameState.playerXwin:
               return <div className='game-over'>X-Win</div>;
       case GameState.playerOwin:
             return <div className='game-over'>O-win</div>;
        case GameState.draw:
            return <div className='game-over'>Draw</div>
        default:
            return <></>;
    }
  
}

export default GameOver
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";


function App() {
  const [activePlayert, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayert === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayert === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayert}/>
      </div>
    </main>
  );
}

export default App;

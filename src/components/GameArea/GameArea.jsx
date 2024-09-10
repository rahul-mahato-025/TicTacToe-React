import { useState } from "react";
import Matrix from "../Matrix/Matrix";
import GameInfo from "../GameInfo/GameInfo";

function GameArea() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [usedCells, setUsedCells] = useState(0);
  const [player, setPlayer] = useState({ name: "Player X", value: "X" });
  const [gameStatus, setGameStatus] = useState("idle");
  const [winningPositions, setWinningPositions] = useState([]);

  function togglePlayer() {
    if (player.name === "Player X") {
      setPlayer({ name: "Player O", value: "O" });
    } else {
      setPlayer({ name: "Player X", value: "X" });
    }
  }

  function updateBoard(rowIdx, colIdx) {
    if (board[rowIdx][colIdx] !== "") return false;

    const newBoard = [...board];
    newBoard[rowIdx][colIdx] = player.value;
    setBoard(newBoard);
    if (usedCells === 8) {
      setGameStatus("draw");
      return false;
    }
    setUsedCells((p) => p + 1);
    return true;
  }

  function resetBoard() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setUsedCells(0);
  }

  function updateGameStatus(value) {
    setGameStatus(value);
  }

  return (
    <>
      <div className="w-[50%] h-full bg-zinc-900 flex flex-row items-center justify-center">
        <Matrix
          board={board}
          updateBoard={updateBoard}
          resetBoard={resetBoard}
          usedCells={usedCells}
          setUsedCells={setUsedCells}
          player={player}
          togglePlayer={togglePlayer}
          gameStatus={gameStatus}
          updateGameStatus={updateGameStatus}
          winningPositions={winningPositions}
          setWinningPositions={setWinningPositions}
        />
      </div>
      <div className="w-[50%] h-full bg-zinc-900 flex flex-row items-center justify-center">
        <GameInfo
          player={player}
          gameStatus={gameStatus}
          updateGameStatus={updateGameStatus}
          resetBoard={resetBoard}
          setWinningPositions={setWinningPositions}
        />
      </div>
    </>
  );
}

export default GameArea;

import Cell from "../Cell/Cell";

function Matrix({
  player,
  togglePlayer,
  gameStatus,
  updateGameStatus,
  board,
  updateBoard,
  usedCells,
  setUsedCells,
}) {
  function hasWinningConfiguration(rowIdx, colIdx) {
    // Check in the current row
    let win = true;
    for (let col = 0; col < 3; col++) {
      if (board[rowIdx][col] !== player.value) {
        win = false;
        break;
      }
    }
    if (win) return true;

    // Check in the current col
    win = true;
    for (let row = 0; row < 3; row++) {
      if (board[row][colIdx] !== player.value) {
        win = false;
        break;
      }
    }
    if (win) return true;

    // Check in the left diagonal
    win = true;
    for (let idx = 0; idx < 3; idx++) {
      if (board[idx][idx] !== player.value) {
        win = false;
        break;
      }
    }
    if (win) return true;

    // Check in the right diagonal
    win = true;
    for (let idx = 2; idx >= 0; idx--) {
      if (board[idx][2 - idx] !== player.value) {
        win = false;
        break;
      }
    }
    if (win) return true;

    return false;
  }

  return (
    <div className="w-[550px] h-[550px] grid grid-cols-3 grid-rows-3 gap-0.5 ml-32">
      {board.map((row, rowIdx) => {
        return row.map((cellValue, colIdx) => {
          return (
            <Cell
              key={"" + rowIdx + colIdx}
              position={{ rowIdx, colIdx }}
              value={cellValue}
              updateBoard={updateBoard}
              togglePlayer={togglePlayer}
              hasWinningConfiguration={hasWinningConfiguration}
              gameStatus={gameStatus}
              updateGameStatus={updateGameStatus}
              usedCells={usedCells}
              setUsedCells={setUsedCells}
            />
          );
        });
      })}
    </div>
  );
}

export default Matrix;

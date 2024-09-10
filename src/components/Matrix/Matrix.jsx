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
  winningPositions,
  setWinningPositions,
}) {
  function hasWinningConfiguration(rowIdx, colIdx) {
    // Check in the current row
    let positions = [];
    let win = true;
    for (let col = 0; col < 3; col++) {
      if (board[rowIdx][col] !== player.value) {
        win = false;
        break;
      }
      positions.push({ rowIdx, colIdx: col });
    }

    if (win) {
      setWinningPositions(positions);
      return true;
    }

    // Check in the current col
    positions = [];
    win = true;
    for (let row = 0; row < 3; row++) {
      if (board[row][colIdx] !== player.value) {
        win = false;
        break;
      }
      positions.push({ rowIdx: row, colIdx });
    }

    if (win) {
      setWinningPositions(positions);
      return true;
    }

    // Check in the left diagonal
    positions = [];
    win = true;
    for (let idx = 0; idx < 3; idx++) {
      if (board[idx][idx] !== player.value) {
        win = false;
        break;
      }
      positions.push({ rowIdx: idx, colIdx: idx });
    }

    if (win) {
      setWinningPositions(positions);
      return true;
    }

    // Check in the right diagonal
    positions = [];
    win = true;
    for (let idx = 2; idx >= 0; idx--) {
      const rowIdx = 2 - idx;
      const colIdx = idx;
      if (board[idx][2 - idx] !== player.value) {
        win = false;
        break;
      }
      positions.push({ rowIdx, colIdx });
    }

    if (win) {
      setWinningPositions(positions);
      return true;
    }

    return false;
  }

  function hasAnimation(position) {
    let animate = false;
    winningPositions.forEach((winPos) => {
      if (
        winPos.rowIdx === position.rowIdx &&
        winPos.colIdx === position.colIdx
      ) {
        animate = true;
      }
    });
    return animate;
  }

  return (
    <div className="w-[550px] h-[550px] grid grid-cols-3 grid-rows-3 gap-0.5 ml-32">
      {board.map((row, rowIdx) => {
        return row.map((cellValue, colIdx) => {
          const animate = hasAnimation({ rowIdx, colIdx });
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
              animate={animate}
            />
          );
        });
      })}
    </div>
  );
}

export default Matrix;

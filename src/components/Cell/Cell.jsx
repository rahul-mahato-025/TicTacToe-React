import { GiCrossMark } from "react-icons/gi";
import { SiOpencollective } from "react-icons/si";

function Cell({
  position,
  value,
  updateBoard,
  togglePlayer,
  hasWinningConfiguration,
  gameStatus,
  updateGameStatus,
  animate,
}) {
  function handleClick(rowIdx, colIdx) {
    if (gameStatus !== "inProgress") return;
    const boardUpdated = updateBoard(rowIdx, colIdx);
    if (hasWinningConfiguration(rowIdx, colIdx)) {
      updateGameStatus("won");
      return;
    }
    if (boardUpdated) togglePlayer();
  }

  return (
    <div
      className={`bg-rose-500 flex items-center justify-center ${
        animate === true ? "animate" : ""
      }`}
      onClick={() => handleClick(position.rowIdx, position.colIdx)}
    >
      {value === "X" ? (
        <GiCrossMark size={48} color="white" />
      ) : value === "O" ? (
        <SiOpencollective size={48} color="white" />
      ) : (
        ""
      )}
    </div>
  );
}

export default Cell;

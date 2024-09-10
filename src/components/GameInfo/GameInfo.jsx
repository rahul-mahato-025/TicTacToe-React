import Button from "../Button/Button";
import { CgBoy } from "react-icons/cg";

function GameInfo({ player, gameStatus, updateGameStatus, resetBoard }) {
  if (gameStatus === "idle")
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-gray-300 text-5xl">Welcome !!!</h2>
        <Button
          text={"Start Game"}
          onClick={() => updateGameStatus("inProgress")}
        />
      </div>
    );

  if (gameStatus !== "inProgress")
    return (
      <div className=" flex flex-col items-center justify-center gap-5">
        <h2 className="text-gray-300 text-4xl">
          {gameStatus === "won" ? (
            <>
              <span className="text-rose-400">{player.name} </span> has won
            </>
          ) : (
            "Match Drawn"
          )}
        </h2>
        <Button
          onClick={() => {
            updateGameStatus("inProgress");
            resetBoard();
          }}
          text={"Restart"}
        />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <CgBoy color="white" size={54} />
      <h2 className="text-gray-300 text-4xl ">
        Current Player : <span className="text-rose-400">{player.name}</span>
      </h2>
    </div>
  );
}

export default GameInfo;

import React from "react";

export default function Card({
  board,
  setBoard,
  token,
  secondToken,
  index,
  actualPlayer,
  setActualPlayer,
}) {
  return (
    <div
      className="card"
      onClick={() => {
        setActualPlayer((prev) => {
          // Vê se o player atual é o 0
          const newPlayer = prev === 0 ? 1 : 0;
          return newPlayer;
        });

        setBoard((prev) => {
          prev[index] = actualPlayer === 0 ? token : secondToken;
          return [...prev];
        });
      }}
    >
      <img
        className="icon"
        src={
          board[index] === "O"
            ? "./circleRender.svg"
            : board[index] === "X"
            ? "./crossRender.svg"
            : ""
        }
      ></img>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/molecules/Card";

function App() {
  const [token, setToken] = useState(null);
  const [secondToken, setSecondToken] = useState(null);
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [actualPlayer, setActualPlayer] = useState(0);
  const [playerWinner, setPlayerWinner] = useState("");

  const checkLines = (checkToken, player) => {
    if (
      board[0] === checkToken &&
      board[1] === checkToken &&
      board[2] === checkToken
    )
      setPlayerWinner(player);
    if (
      board[3] === checkToken &&
      board[4] === checkToken &&
      board[5] === checkToken
    )
      setPlayerWinner(player);
    if (
      board[6] === checkToken &&
      board[7] === checkToken &&
      board[8] === checkToken
    )
      setPlayerWinner(player);
  };

  const checkColumns = (checkToken, player) => {
    if (
      board[0] === checkToken &&
      board[3] === checkToken &&
      board[6] === checkToken
    )
      setPlayerWinner(player);
    if (
      board[1] === checkToken &&
      board[4] === checkToken &&
      board[7] === checkToken
    )
      setPlayerWinner(player);
    if (
      board[2] === checkToken &&
      board[5] === checkToken &&
      board[8] === checkToken
    )
      setPlayerWinner(player);
  };

  const checkDiagon = (checkToken, player) => {
    if (
      board[0] === checkToken &&
      board[4] === checkToken &&
      board[8] === checkToken
    )
      setPlayerWinner(player);
    if (
      board[2] === checkToken &&
      board[4] === checkToken &&
      board[6] === checkToken
    )
      setPlayerWinner(player);
  };

  useEffect(() => {
    // CHECAR SE ALGUEM GANHOU
    checkLines(token, "primeiro jogador "); // "X"
    checkLines(secondToken, "segundo jogador "); // "O"
    checkColumns(token, "primeiro jogador ");
    checkColumns(secondToken, "segundo jogador ");
    checkDiagon(token, "primeiro jogador ");
    checkDiagon(secondToken, "segundo jogador ");
  }, [board]);

  const resetBoard = () => {
    setToken(null);
    setSecondToken(null);
    setBoard(new Array(9).fill(""));
    setActualPlayer(0);
    setPlayerWinner("");
  };

  return (
    <div className="App">
      {playerWinner && (
        <>
          <h1>{playerWinner} ganhou!</h1>
          <button
            className="resetButton"
            onClick={() => {
              resetBoard();
            }}
          >
            JOGAR NOVAMENTE
          </button>
        </>
      )}
      <>
        <h1>Jogo da velha</h1>
        {token === null && (
          <>
            <h3>Player 1: Escolha seu token</h3>
            <div className="tokens">
              <div
                className="token"
                onClick={() => {
                  setToken("O"), setSecondToken("X");
                }}
              >
                <img src="./circle.png"></img>
              </div>
              <div
                className="token"
                onClick={() => {
                  setToken("X"), setSecondToken("O");
                }}
              >
                <img src="./cross.png"></img>
              </div>
            </div>
          </>
        )}
        <div className="grid">
          {board.map((item, index) => {
            return (
              <Card
                board={board}
                setBoard={setBoard}
                token={token}
                secondToken={secondToken}
                index={index}
                actualPlayer={actualPlayer}
                setActualPlayer={setActualPlayer}
              ></Card>
            );
          })}
        </div>
      </>
    </div>
  );
}

export default App;

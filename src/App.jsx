import { useState,useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [player1Score, setPlayer1Score] = useState([]);
  const [player2Score, setPlayer2Score] = useState([]);
  const [updateScore, setUpdateScore] = useState(false);

  useEffect(() => {
  axios.get('http://localhost:4444/score')
    .then(res => {
      setPlayer1Score(res.data[0].score);
      setPlayer2Score(res.data[1].score);
    })
    .catch(err => console.log(err));
}, []);

const handleScore = () => {
  if (winner === 'Player 1' && !updateScore) {
    axios.put('http://localhost:4444/player1win')
      .then(() => {
        setUpdateScore(true);
        setPlayer1Score(player1Score + 1);
      })
      .catch(err => console.log(err));
  } else if (winner === 'Player 2' && !updateScore) {
    axios.put('http://localhost:4444/player2win')
      .then(() => {
        setUpdateScore(true);
        setPlayer2Score(player2Score + 1);
      })
      .catch(err => console.log(err));
  }
}

  const [square, setSquare] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(square) || square[i]) {
      return;
    }
    const newSquare = [...square];
    newSquare[i] = player ? 'X' : 'O';
    setSquare(newSquare);
    setPlayer(!player);
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {square[i]}
      </button>
    );
  };

  let winner = calculateWinner(square);
  if(winner == 'X'){
    winner = "Player 1"
  }
  else if(winner == 'O'){
    winner = 'Player 2'
  }

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
    handleScore()
  } else {
    status = 'Current player: ' + (player ? 'Player 1' : 'Player 2');
  }
  
  const playAgainBtn = () => {
    location.reload()
  }

  return (
    <div className="tictactoe">
      <h1>TicTacToe</h1>
      <div className="squares-container">
        <div className="squares-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="squares-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="squares-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div><h2>{status}</h2></div>
        <div>
          <h2>Player Scores</h2>
          <p><strong>player 1:</strong> {player1Score}</p>
          <p><strong>player 2:</strong> {player2Score}</p>
          <button onClick={playAgainBtn}>Play Again</button>
        </div>
      </div>
    </div>
  );
}

const calculateWinner = (squares) => {
  const tictacRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < tictacRows.length; i++) {
    const [a, b, c] = tictacRows[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default App;

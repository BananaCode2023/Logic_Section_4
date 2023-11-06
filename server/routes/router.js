const express = require('express')
const router = express.Router()

// I just made a data for the score
let scoreData = [
  {
    "id": 1,
    "player": "player 1",
    "score": 0
  },
  {
    "id": 2,
    "player": "player 2",
    "score": 0
  }
]

//router for getting the score of the players
router.get('/score', (req,res) => {
  res.send(scoreData)
})

//router for editing the score of player 1
router.put('/player1win',(req,res) => {
  const player1 = scoreData.find(item => item.player === "player 1");

  if (player1) {
    player1.score += 1 ;
    res.send(player1);
  }
})

//router for editing the score of player 1
router.put('/player2win',(req,res) => {
  const player2 = scoreData.find(item => item.player === "player 2");

  if (player2) {
    player2.score += 1 ;
    res.send(player2);
  }
})

module.exports = router
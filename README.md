# React + Vite
# Express JS
# Node Js

# Project Title
Technical Exam

## Description
I created the logical part of the tech exam using react + vite, express js, node js. I decided to use javascript as it is the one that was taught to us and I am comfortable with.

## StepByStep Explanation
* I first created a react js file using npm create vite@latest
* Then I created a server folder for the backend part using express js for connecting the endpoints and node js for the server
* I started doing the frontend part first. I created squares first using useState and array it then fill it with null for it to not have any value or string into it. Then I created a useState for the player.
* I created the renderSquare to render the squares in the screen and I use the  i or index for the parameter to render how many square will be inputted in the app using renderSquare(indexNumber).
* After that I created a handleClick function and putting also the i as the parameter for it to be exactly inputted in the square that will be clicked. Its function is to know which player will be the winner by using the calculateWinner function at the bottom part.
* I created a calculateWinner function and predefine the data for the one who will win the game. As you can see, I input a set of arrays of the possible numbers that will win the game. Then I created a for loop for it to define if someone had created a pattern yet or not. If a pattern is not created, it will return null and the calculateWinner will have null value and must press the play again button to reset the game
* After that, I created a newSquare variable for have a turn by turn system for player 1 and player 2 then set the move either X : O and set the value of the square by using the useState(input the newSquare variable) then setPlayer to !player for the next player to do the move
* At this point, I cant get the value for the player who wins the game, so I created a winner variable by making its value to calculateWinner(square), the player who created a pattern will win.
* I created a condition that if winner == 'X' or the square that created a pattern it will be player 1 and player 2 viceversa
* Then I created a status variable for the winner if a winner is decided then status is 'Winner:' + the value of the winner which is either Player 1 or Player 2. Later on I also inputted inside it the handleScore() function which will be explained later on. if no winner is decided yet, the status will continue on showing who is the current player that is making the move
* As you can see, the playAgainBtn is my favorite because it is the most simple function I created in this tech exam yet it is the one that creates the bug T-T which I cant fix but if more time and effort is given I may be able to solve it 
* After doing all this frontend part codes, I started on doing the backend part.
* I started the backend by creating an index.js file in the server folder and installing express and cors for connecting with the node js server
* I inputted the required codes like the require express, cors and router, I also created a routes folder and router file for it not to be messy and practice clean coding as possible
* I input the cors origin, methods and credentials for me to connect to the cross origin resources, more codes then created the server port at port 4444
* After it, I created the first endpoint of which is a get Method for getting the current score of the player1 and player 2. I just created a scoreData for them
* I tested it in the postman and it works so now I inputted it and connected it in the frontend
* I first created 2 useStates, one for player1score and for player2score and set its value to [] as an array as I used to objects inside the scoreData array
* I used useEffect for connecting the frontend to the backend using the axios and use the router I set for it. After that, I set the player1 and scores using the response, data, number of array and the score. [0] is for the player 1 and [1] is for player2
* After that I inputted the player score inside the app to render its value which is 0 at start
* Now the score is being shown, I now created another router for everytime a winner is set it will add a score for either player 1 or player2. I decided to use the put method instead of post for me to update the score instead of just creating it. I created a separated router for player1 and 2 as for now I dont have an idea on how I can put them in the same router. For its function, everytime a player win it will add 1 incrementally to the scoreData.
* The router for adding score is now set, I inputted it in the frontend and created a function which is the handleScore function. It will determine whethere a player wins or not. I also created another useState updateScore for me to update the current score whenever a player wins.
* Since the value of the updateScore is false, everytime there is a winner, the handleScore function will determine the winner either 'Player 1 or 'Player 2', it will result to making the setUpdateScore to true and adding 1 to the player's score by adding 1 to player1 or player2Score
* After that, it is not showing in the score and I wonder, so I inputted it inside the condition of whether a winner is announced or currentPlayer turn. I inputted it after the status is updated and call the handleScore function
* Now the game is set and I think it concludes my explanation for this examination. Thankyou!

# Thankyou KodeGo!

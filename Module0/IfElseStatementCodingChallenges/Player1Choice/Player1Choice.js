/*We are going to complete a function that takes in one parameter, a string representing the choice of Player 1 in a game of rock/paper/scissors, and returns a specific string for four different cases. Your function should use an if else if statement to determine which choice the player has made, then should return: 'Player 1 chose rock'; 'Player 1 chose paper'; 'Player 1 chose scissors'; or, 'Player 1 has chosen poorly!', depending upon the value of the input parameter. Below are examples of the code running, assuming that you will have completed the described function: player1Choice.

var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4); */

function player1Choice(choice) {
    // if player1 chose rock
      // return "Player 1 chose rock"
    // otherwise if player1 chose paper
      // return "Player 1 chose paper"
    // otherwise if player1 chose scissors
      // return "Player 1 chose scissors"
    // otherwise
      // return "Player 1 has chosen poorly!"
    if(choice === 'rock'){
        return 'Player 1 chose rock';  
    }else if(choice === 'paper'){
        return 'Player 1 chose paper';
    }else if(choice === 'scissors'){
        return 'Player 1 chose scissors';
    }else{
        return 'Player 1 has chosen poorly!';
    }
}

var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4);
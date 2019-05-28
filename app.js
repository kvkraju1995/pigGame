/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundscore, activeplayer, checkStatus;
var dicevalue, prevdice, scorelimit;
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
   
    if(checkStatus){
        
        dicevalue = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dicevalue + '.png';
       

        if (dicevalue === 1 || (prevdice ===6 && dicevalue ===6)) {
                

                roundscore = 0;
                document.getElementById('current-' + activePlayer).textContent = roundscore;
                if (dicevalue === 6){
                    score[activeplayer]=0;
                    document.getElementById('score-'+activePlayer).textContent = '0';
                }

                nextplayer();
            }
            else {
                roundscore += dicevalue;
                document.getElementById('current-' + activePlayer).textContent = roundscore;
            }


        // if (dicevalue !== 1 ) {
        //     roundscore += dicevalue;
        //     document.getElementById('current-' + activePlayer).textContent = roundscore;
        // }
        // else {
        //     roundscore = 0;
        //     document.getElementById('current-' + activePlayer).textContent = roundscore;
        //     nextplayer();
        // }

        
       //console.log(prevdice, dicevalue);
       prevdice = dicevalue;
      
        
    }
   
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if(checkStatus){

        score[activePlayer] += roundscore;

        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = '0';
        roundscore = 0;
        scorelimit= document.querySelector('.scoreLimit').nodeValue;
        if (score[activePlayer] >= scorelimit) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            checkStatus = false;
        }
        else {
            nextplayer();
        }
    
    }

});

document.querySelector('.btn-new').addEventListener('click', init);


function init() {

score = [0, 0];
roundscore = 0;
activePlayer = 0;
scorelimit = 0;
checkStatus = true;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.add('active');


}



function nextplayer() {

    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}


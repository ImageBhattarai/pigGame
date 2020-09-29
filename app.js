var score, roundScore, activePlayer, gamePlaying;

init();

// This is a getter
var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
        var diceDOM = document.querySelector('.dice');
        //display dice
        diceDOM.style.display = 'block';

        //generate random dice number
        var dice = Math.floor(Math.random()*6) + 1;
        //generate image
        diceDOM.src = 'dice-' + dice + '.png';

      
        
        document.getElementById('current-'+ activePlayer).textContent = 0;
        roundScore += dice;
        document.querySelector('#current-' + activePlayer ).textContent = roundScore;

        //if 1 on dice
        if (dice === 1) { 
            nextPlayer();
        }
    }
     
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;   
        } 
        else {
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    roundScore = 0;
    document.getElementById('current-'+ activePlayer).textContent = 0;
    activePlayer == 0 ? activePlayer = 1: activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('#name-0').textContent = 'PLayer 0';
    document.querySelector('#name-1').textContent = 'Player 1';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
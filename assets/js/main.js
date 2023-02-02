
const optionsComputer = ["scissors", "paper", "rock"];
const rounds5 = document.querySelector("#rounds5");
const rounds10 = document.getElementById("rounds10");
const rounds15 = document.getElementById("rounds15");
const rounds20 = document.getElementById("rounds20");
const score1 = document.getElementById("scorePlayer");
const score2 = document.getElementById("scoreComputer");
const result = document.getElementById("result");
const winner = document.getElementById("winner");
let movesLeft = document.getElementById("movesLeft");
let scorePlayer = 0;
let scoreComputer = 0;
let round = 0;
let roundsToBePlayed ;


const rounds = document.querySelector('#rounds').addEventListener("click", howManyRounds = () => {
    roundsToBePlayed = document.querySelector('input[name="rounds"]:checked').value;
    console.log(roundsToBePlayed);
})

const form = document.querySelector('#form').addEventListener("change", getInput = () => {
    movePlayer = document.querySelector('input[name="choice"]:checked').value;
    round++;
    // console.log(movePlayer);
    
    const random = Math.floor(Math.random() * optionsComputer.length)
// console.log(options[random]);

    const moveComputer = optionsComputer[random];
// console.log(moveComputer);
// console.log(roundsToBePlayed);

    const game = () => {
        if (movePlayer === moveComputer) {
            result.innerHTML = "Unentschieden";
        } else if (movePlayer === "rock" && moveComputer === "scissors") {
            result.innerHTML = "Player wins this round!";
            scorePlayer++;
            score1.innerHTML = scorePlayer; 
        } else if (movePlayer === "paper" && moveComputer === "rock") {
            result.innerHTML = "Player wins this round!";
            scorePlayer++;
            score1.innerHTML = scorePlayer;
        } else if (movePlayer === "scissor" && moveComputer === "paper") {
            result.innerHTML = "Player wins this round!";
            scorePlayer++;
            score1.innerHTML = scorePlayer ;
        } else {
            result.innerHTML = "Comnputer wins this round!";
            scoreComputer++;
            score2.innerHTML = scoreComputer;
        }

        if (round >= roundsToBePlayed) {
            if (scorePlayer > scoreComputer) {
                winner.innerHTML = `PLAYER WINS THIS GAME`;
            } else if (scorePlayer < scoreComputer) {
                winner.innerHTML = `COMPUTER WINS THIS GAME`;
            } else {
                
                winner.innerHTML = `UNENTSCHIEDEN`;
            
        } }

        movesLeft.innerHTML = `Moves left: ${roundsToBePlayed - round}`;
        
    }
    console.log(round);
    
game()

// console.log(scorePlayer);
// console.log(scoreComputer);
});
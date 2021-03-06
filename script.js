let userPlay;
const divResults = document.querySelector("#divResults");
let userScore = 0;
let compScore = 0;

const rock = document.querySelector("#rock")
rock.addEventListener("click", () => {
    clearText();
    userPlay = "rock";
    let results = playRound(userPlay, computerPlay());
    const paragraph = document.createElement('p');
    const scoreParagraph = document.createElement('p');
    if (results === "win") {
        paragraph.textContent = "You win! Rock beats scissors!";
        divResults.appendChild(paragraph);
        userScore++;
        scoreParagraph.textContent = "Player points: " + userScore + " Computer points: " + compScore;
        divResults.appendChild(scoreParagraph);
        if (userScore > 4) {
            alert("You win with 5 points!");
        } else if (comScore > 4) {
            alert("Computer wins with 5 points!");
        }
    } else if (results === "lose") {
        paragraph.textContent = "You lose! Paper beats rock!";
        divResults.appendChild(paragraph);
        compScore++;
        scoreParagraph.textContent = "Player points: " + userScore + " Computer points: " + compScore;
        divResults.appendChild(scoreParagraph);
    } else {
        paragraph.textContent = "It's a draw!";
        divResults.appendChild(paragraph);                   
    }
});

const paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
    clearText();
    userPlay = "paper";
    let results = playRound(userPlay, computerPlay());
    const paragraph = document.createElement('p');
    const scoreParagraph = document.createElement('p');  
    if (results === "win") {
        paragraph.textContent = "You win! Paper beats rock!";
        divResults.appendChild(paragraph);  
        userScore++;
        scoreParagraph.textContent = "Player points: " + userScore + " Computer points: " + compScore;
        divResults.appendChild(scoreParagraph);      
        if (userScore > 4) {
            alert("You win with 5 points!");
        } else if (comScore > 4) {
            alert("Computer wins with 5 points!");
        }    
    } else if (results === "lose") {
        paragraph.textContent = "You lose! Scissors beats paper!";
        divResults.appendChild(paragraph);
        compScore++;
        scoreParagraph.textContent = "Player points: " + userScore + " Computer points: " + compScore;
        divResults.appendChild(scoreParagraph);
    } else {
        paragraph.textContent = "It's a draw!";
        divResults.appendChild(paragraph);
    }
});

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    clearText();
    userPlay = "scissors"
    let results = playRound(userPlay, computerPlay());
    const paragraph = document.createElement('p');
    const scoreParagraph = document.createElement('p');
    if (results === "win") {
        paragraph.textContent = "You win! Scissors beats paper!";
        divResults.appendChild(paragraph);    
        userScore++;
        scoreParagraph.textContent = "Player points: " + userScore + " Computer points: " + compScore;
        divResults.appendChild(scoreParagraph);     
        if (userScore > 4) {
            alert("You win with 5 points!");
        } else if (comScore > 4) {
            alert("Computer wins with 5 points!");
        }           
    } else if (results === "lose") {
        paragraph.textContent = "You lose! Rock beats scissors!";
        divResults.appendChild(paragraph);
        compScore++;
        scoreParagraph.textContent = "Player points: " + userScore + " Computer points: " + compScore;
        divResults.appendChild(scoreParagraph);
    } else {
        paragraph.textContent = "It's a draw!";
        divResults.appendChild(paragraph);
    } 
});

let computerSelection = computerPlay();
function computerPlay() { //computer generates a random answer.
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
    
}

function playRound(playerSelection, computerSelection) { //plays a round of the game.
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "draw";
        } else if (computerSelection === "paper") {
            return "lose";
        } else {
            return "win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "win";
        } else if (computerSelection === "paper") {
            return "draw";
        } else {
            return "lose";
        }
    } else {
        if (computerSelection === "rock") {
            return "lose";
        } else if (computerSelection === "paper") {
            return "win";
        } else {
            return "draw";
        }
    }
}

function clearText() { //clears the divResults box 
    divResults.textContent = "";
};
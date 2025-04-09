// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;
let run = true;
let getDiff = "easy";


function setDiff(){
  //GET DIFF SETTING
  getDiff = document.getElementById("difficulty").value;
  //CHANGE GAME TIMER 
  switch(getDiff){
    case "easy":
      timeEl.innerText ="20s";
      time = 20;
      break;
    case "medium":
      timeEl.innerText ="15s";
      time = 15;
      break;
    case "hard":
      timeEl.innerText ="10s";
      time = 10;
      break;
  }

}

function addWordToDOM(){
  //PULL A RANDOM WORD
  randomWord = words[Math.floor(Math.random()*words.length)];

  //ADD WORD TO DOM
  word.innerText = randomWord;

}

function updateScore(){
  //TURN THE GAME TIMER OFF 
  run = false;
  //CHECK IF THE WORD MATCHES DOM
  if(text.value == randomWord){
    score += 1;
    scoreEl.innerText = score;
    //ADD 5 SECS TO TIMER
    time += 5;
    text.value = "";
    //PICK A NEW WORD
    addWordToDOM();
  }else{
    score = score;
    scoreEl.innerText = score;
  }
}

function updateTime(){

  //SET INTERVAL FOR TIME
  setInterval(
    function(){

      if(time > 0 ){
        time -= 1;
        timeEl.innerText =`${time}s`;
      }else{
        //IF TIMER IS OUT DISPLAY END GAME
        endgameEl.style.display = "flex";
      }
    },
    1000);

}


//START THE GAME
addWordToDOM();

function playGame(){
  //RUN THE TIMER ONCE PER GAME
   if(run == true){
    updateTime();
   }
    updateScore();
    
}

text.addEventListener("input", playGame);

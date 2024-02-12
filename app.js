
const cardColors = [
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "teal",
  "pink",
  "yellow",
];
const cardPairs = 8;
const dupeColors = dupeCardColors(cardColors, 2);
let clickedCards = [];
let gameStarted = false;
let firstCard, secondCard;

/*----- cached elements  -----*/
const boardEl = document.querySelector(".container");
const cardEls = document.querySelectorAll(".card");
const resetBtn = document.querySelector(".reset");
const playBtn = document.querySelector(".play");

/*----- event listeners -----*/
playBtn.addEventListener("click", initGame);
resetBtn.addEventListener("click", resetGame);




/*----- functions -----*/


function initGame() {
  hideCards();
  const shuffleColors = shuffle(dupeColors);
  hidePlayBtn();
  unlockBoard();
  gameStarted = true;
}
playBtn.addEventListener("click", function() {
  initGame();
});

function dupeCardColors(cardColors, times) {
  const dupeColors = [];
  cardColors.forEach((item) => {
    for (let i = 0; i < times; i++) {
      dupeColors.push(item);
    }
  });
  return dupeColors;
}

function shuffle(dupeArray) {
  const shuffledArray = [...dupeArray];
  for (let i = dupeArray.length - 1; i > 0; i--) {
    const randomIdx = Math.floor(Math.random() * (i + 1));
    [dupeArray[i], dupeArray[randomIdx]] = [dupeArray[randomIdx], dupeArray[i]];
  }
  return dupeArray;
}

function flippedCard(e) {
  if (!gameStarted) return;
  const cardClick = e.target;
  let idx;
  for (let i = 0; i < cardEls.length; i++) {
    if (cardEls[i] === cardClick) {
      idx = i;
      break;
    }
  }
  if (clickedCards.length < 2 && !clickedCards.includes(idx)) {
    const color = dupeColors[idx]; 
    cardClick.style.backgroundColor = color;
    clickedCards.push(idx);
    if (clickedCards.length === 2) {
      lockBoard(); 
      setTimeout(compareCards, 1000);
    }
  }   
} 

function compareCards() {
  const [firstCard, secondCard] = clickedCards;
  const firstColor = dupeColors[firstCard];
  const secondColor = dupeColors[secondCard];
  if (firstColor === secondColor) {
    clickedCards = [];
  } else {
    const firstCardEl = cardEls[firstCard];
    const secondCardEl = cardEls[secondCard];
    setTimeout(() => {
      firstCardEl.style.backgroundColor = "";
      secondCardEl.style.backgroundColor = "";
      clickedCards = []; 
    }, 500);
  }
  unlockBoard();  
} 

function unlockBoard() {
  if (gameStarted) {
    cardEls.forEach(cardEl => {
      cardEl.addEventListener("click", flippedCard);
    });
  }  
  hidePlayBtn();
}

function hidePlayBtn() {
  playBtn.style.display = "none";
  playBtn.classList.add("hidden");
}

function lockBoard() {
  cardEls.forEach((cardEl) => {
    cardEl.removeEventListener("click", flippedCard);
  });
}

function resetGame() {
  cardEls.forEach((cardEl) => {
    cardEl.style.backgroundColor = "";
    cardEl.classList.add("card-back");
  });
  clickedCards = [];
  lockBoard();
  showPlayBtn();
}

function showPlayBtn() {
  playBtn.textContent = "Play";
  playBtn.style.display = "inline";
  playBtn.classList.remove("hidden");
}

function hideCards() {
  cardEls.forEach(cardEl => {
    cardEl.style.backgroundColor = "";
    cardEl.classList.add("card-back");
  });
}





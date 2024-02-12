/*----- constants -----*/
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
// Duped array of cardColors for pairs
const dupeColors = dupeCardColors(cardColors, 2);
// Array to keep track of clicked cards
let clickedCards = [];
// Check if game has started when playBtn is clicked
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

// Start game
function initGame() {
  hideCards();
  const shuffleColors = shuffle(dupeColors);
  hidePlayBtn();
  unlockBoard();
  gameStarted = true;
}
playBtn.addEventListener("click", function() {
  //initGame function is called when playBtn is clicked
  initGame();
});

// Dupe cardColors to make 16 total, 8 pairs
function dupeCardColors(cardColors, times) {
  // Creates empty array to store colors
  const dupeColors = [];
  // Run through each color in cardColors array twice pushing it into new array
  cardColors.forEach((item) => {
    for (let i = 0; i < times; i++) {
      dupeColors.push(item);
    }
  });
  return dupeColors;
}

// Fisher-Yates to shuffle 
function shuffle(dupeArray) {
  //creates copy of "dupeArray" using ... assigned to new variable so OG array is not changed
  const shuffledArray = [...dupeArray];
  // Goes through loop starting from last El to first
  for (let i = dupeArray.length - 1; i > 0; i--) {
    // Creates randomIdx between 0 and array length which is 16 and swaps
    const randomIdx = Math.floor(Math.random() * (i + 1));

    [dupeArray[i], dupeArray[randomIdx]] = [dupeArray[randomIdx], dupeArray[i]];
  }
  return dupeArray;
}

// Unlocks board, allows cards to be clicked
function unlockBoard() {
  if (gameStarted) {
    // Adds event listener for a "click" to each card element, which then triggers "flippedCard" function 
    cardEls.forEach(cardEl => {
      cardEl.addEventListener("click", flippedCard);
    });
  }  
  hidePlayBtn();
}

// Resets game, flips cards back over, clears clickedCards array and locks board until playBtn is clicked 
function resetGame() {
  cardEls.forEach((cardEl) => {
    cardEl.style.backgroundColor = "";
    cardEl.classList.add("card-back");
  });
  clickedCards = [];
  lockBoard();
  showPlayBtn();
}

//Brings playBtn back after clicking resetBtn
function showPlayBtn() {
  // Sets text of playBtn
  playBtn.textContent = "Play";
  playBtn.style.display = "inline";
  playBtn.classList.remove("hidden");
}

//Hides playBtn when clicked to start game
function hidePlayBtn() {
  playBtn.style.display = "none";
  playBtn.classList.add("hidden");
}

// Locks board and disables cards from being clicked
function lockBoard() {
  cardEls.forEach((cardEl) => {
    cardEl.removeEventListener("click", flippedCard);
  });
}

// Hides cards, was added because when play button was clicked; it revealed all cards
function hideCards() {
  cardEls.forEach(cardEl => {
    cardEl.style.backgroundColor = "";
    cardEl.classList.add("card-back");
  });
}

// Compares two cards that were clicked
function compareCards() {
  const [firstCard, secondCard] = clickedCards;
  // Gets colors of first & second flipped cards
  const firstColor = dupeColors[firstCard];
  const secondColor = dupeColors[secondCard];

  // Checks for a match
  if (firstColor === secondColor) {
    // Resets clickCards array if a match is found, and waits for two more to be flipped
    clickedCards = [];
  } else {
    // If colors don't match, cards are reset to starting position after 1/2 sec (500ms)
    const firstCardEl = cardEls[firstCard];
    const secondCardEl = cardEls[secondCard];
    setTimeout(() => {
      firstCardEl.style.backgroundColor = "";
      secondCardEl.style.backgroundColor = "";
      clickedCards = []; 
    }, 500);
  }
  // If there is a match, unlocks board to allow other cards to be clicked
  unlockBoard();  
} 

// Allows cards to be flipped
function flippedCard(e) {
  if (!gameStarted) return;
  const cardClick = e.target;
  // Checks to see which card was clicked in the array, to find the idx, loop stops when it is found
  let idx;
  for (let i = 0; i < cardEls.length; i++) {
    if (cardEls[i] === cardClick) {
      idx = i;
      break;
    }
  }
  // Checks for if less than 2 cards were clicked and if so, allows another to be clicked 
  // while checking if it hasn't been clicked before in the array.
  if (clickedCards.length < 2 && !clickedCards.includes(idx)) {
    // Gets color of clicked cards from dupeColors array based on it's index
    const color = dupeColors[idx]; 
    cardClick.style.backgroundColor = color;
    clickedCards.push(idx); // Adds index of clicked card to array to keep track
    // Checks for 2 cards being clicked
    if (clickedCards.length === 2) {
      // Locks board if true, to not allow more than 2 to be flipped
      lockBoard(); 
      setTimeout(compareCards, 1000);
    }
  }   
}  








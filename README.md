# cardMatchGame

## WIREFRAME

[Wireframe link](https://excalidraw.com/#room=b7ad31a5872e1bf9911d,Jqb4b2_kEczDYxOKbn3zJQ)

### Main objective of the game is for the player to match all 8 pairs, 16 cards in total.
```
Define all variables, cache elements, add eventListeners, and start game:
CONST boardEl = addEventListener // for when cards are clicked on the board; will allow it to flip
CONST msgEl = addEventListener // display correct or wrong card messages
CONST btnEl = addEventListener // will either start or reset game


function cardChoice():
//Card is clicked, it will flip. Only two cards can be selected
//Choices will be in an array
    if card is picked;
         show cardFace;
    else
         show cardBack;
//There will also be a delay added for when cards flip and inflip (setinterval() & traffic light loop?)
//If there is a match, cards will remain faced up and cannot be clicked


function checkMatch():
//Will check if there is a match
    if card[1] is equal to card[2]; 
        keep cards facing up show msg "Match" 
        continue game; 
    else 
        cards will flip back into starting position with msg "Try Again" 
        continue game; 


function checkWin():
//Will check if all pairs have been found and allow player to restart game
    if all cards are matched;
        show message "GAME OVER"
    cardChoice will be shuffled/randomized, when reset/play button is clicked
    
    


    
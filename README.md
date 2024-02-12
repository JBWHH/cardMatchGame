# Concentration
A simple game of concentration or in this case, card matching using colors. There are 16 colors, 8 pairs total and you need to match them by flipping 2 cards at a time. 

For this project I kept it simple, sort of like the bare-bones or base, for what I plan to add as I continue to learn throughout this bootcamp.

[Link to game](https://jbwhh.github.io/cardMatchGame/)   

## Wireframe

[Wireframe link](https://excalidraw.com/#room=b7ad31a5872e1bf9911d,Jqb4b2_kEczDYxOKbn3zJQ)

## Screenshots
![CARD-MATCH1](https://github.com/JBWHH/cardMatchGame/assets/156638460/6b1d2589-d8c0-4652-8d73-20499d4858a2)
This shows all cards faced down before game is started

![COMPLETED](https://github.com/JBWHH/cardMatchGame/assets/156638460/99d0ddfa-e394-4665-a5f6-83ca084d64b1)
This shows all pairs found, cards faced up and board is locked until the reset button is clicked to play again.
## Pseudocode
```
Define all variables, cache elements, add eventListeners, and start game:
CONST boardEl = addEventListener // for when cards are clicked on the board; will allow it to flip
CONST msgEl = addEventListener // display correct or wrong card messages
CONST btnEl = addEventListener // will either start or reset game


function cardChoice():
//Card is clicked, it will flip. Only two cards can be selected
//Choices will be in an array of 8, then duplicated
    if card is picked;
         show cardFace;
    else
         show cardBack;
//There will also be a delay added for when cards flip and inflip (setinterval() & traffic light loop?)
//If there is a match, cards will remain faced up and cannot be clicked


function compareCards():
//Will check if there is a match
    if card[1] is equal to card[2]; 
        keep cards facing up show msg "Match" 
        continue game; 
    else 
        cards will flip back into starting position with msg "Try Again" 
        continue game; 


function resetGame():
//Will check if all pairs have been found and allow player to restart game
    if all cards are matched;
        show message "GAME OVER"
    cardChoice will be shuffled/randomized, when reset/play button is clicked
    
```
## Technologies Used

I used HTML, CSS AND JavaScript to create my game. 

HTML was used to create the cards and gameboard. I also added a reset and play button to start and reset the board when all colors are paired. I used CSS to then style the game, adding colors, font and shapping the gameboard, cards and buttons. Last I used JavaScript to bring it to life. I used loops quite a bit to duplicate the original array creating 16 cards, then passing it through another loop to shuffle them; each time the play button is clicked. Also used "if" statements to check if game is running, compare cards for a match and to help make sure only two cards are being chosen at a time.

## Next Steps

While completing this game, there are a couple things I thought of adding. I didn't get chance to include messages for when a match is found or to "Try Again" when one isn't found. Different color borders when a match is found to increase visibility, along with some animation. Not sure if it's possible, but an animation showing the cards being shuffled would be cool too.

I also wanted to find a way to increase the difficulty, since the game be beaten easily. A timer for one would be good to add along with # of tries. Also to add levels, increasing in difficulty, shorter reveal times and adding more rows and columns each level. And last, a reshuffle feature after a certain amount of wrong guesses it kicks in.  
# Magnificent Memory Game

*TODO: Screenshot from the game*

Magnificent Memory Game is a project for [Udacity Front-End Web Developer Nanodegree](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001)

## Functionality Requirements

| Function     | Definition     |  Comments|
| ------------- |-------------| -----|
| Memory Game Logic   | Cards have been randomized, there is 2 each, game is over when all pairs have been found | |
| Congratulations pop-up-window    | When all pairs have been found pop-up window appears. It includes: congratulation-message, want to play again? - question, timer value and stars.      |   |
| Restart Game | A reset function resets the game board, the timer, and the star rating.    |     |
| Star Rating / Points | 1 - 3 stars, 3 is best score. Ratings should depend on the moves/time it took to complete the game.      |    |
| Timer | Timer starts when game starts and stops when all the pairs have been found.    |   What is start, first click on the card? |
| Move Counter | How many card pairs have been revealed   |    One card = move or a pair = move ? |


## Element Requirements

| Element    | Purpose     |  Amount|
|:-------------:|:-------------:| :-----:|
| Cards   | Essential for game play  | 16 |
| Pictures      | Differentiate cards  |  16 + |
| Stars | For pictures, selected pictures    |    2+ |
| Moves | For pictures, selected pictures    |    2+ |
| Start/End Time| To make a timer    |    1 each |
| Modal | Gongrats, scores and playAgain?    |   1 |

## Style Requirements

- [Style Requirements can be found here](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)

## Short description of the execution

*[X] Game randomizes 8 pictures from pictures array.
*[X] Randomizes positions in the game
*[X] Cards added to game array twice
*[X] Cards added to the game board, pictures hidden.
*[ ] Stars = 3, view updated
*[ ] Moves = 0, view updated
*[ ] Status: winning = false
*[ ] When game board ready start timer -> [set start time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
*[ ] Move functionality: one move is 2 cards visible, classes = unselected, selected. When paired added to pairedUp array, class paired.
*[ ] After 2 cards selected, check if src-attribute is the same, feedback, cards back to unselected or added to pairedUp array, class paired.
*[ ] Check if all cards are pairedUp, array length = allCards length. If all pairedUp, then winning = true.
*[ ] When winning = true -> modal
*[ ] If playAgain = yes, start game again.
*[ ] If in any time player presses reset, game starts from the beginning and values are reset.


# Tech

- HTML
- CSS
- Vanilla JavaScript

## Future development - TODOs

- Degree of difficulty: Easy - Medium - Hard - Levels (how many cards, how many points related to "moves")
- Game will start / create a game "board" after start/choosing the degree of the difficulty
- CSS animations
- Keyboard shortcuts
- Local Storage
- Database - MongoDB
- Different categories of pictures (cats, flowers, numbers, letters or all), player can choose.
- Leader board (MongoDB)


> If I would need a
> awesome quote.

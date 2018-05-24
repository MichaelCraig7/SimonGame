# Obey Simon

Obey Simon is my version of the classic game where the user repeats back a sequence displayed by the computer.  
When the page is opened, the clean GUI presents all information necessary to being playing the game instantly.
Once a difficulty setting has been selected and the start button pressed, the Simon AI begins with the 
first button press and accompanying tune. The page then waits for user input via a click or keydown event. If the user's 
input matches the AI's, the user's score is updates, the next round begins, and another value is added to the AI's sequence.  
If the user's input is wrong, an audio cue alerts the user that they have lost, and the final score is displayed. The user 
can then choose to change the difficulty and play again.

##### Game: http://obeysimon.bitballoon.com/


## Technologies

Languages: HTML, CSS, JavaScript, jQuery

Styling: Materialize CSS

Editor: Visual Studio Code

Planning: [Trello](https://trello.com/b/5Gu8LtKC/simon-says), [Draw.io](https://github.com/MichaelCraig7/SimonGame/blob/master/etc/wireframes/wireframe.xml)


## Wireframes

[Wireframe 1](https://github.com/MichaelCraig7/SimonGame/blob/master/etc/wireframes/wireframe.xml)

[Wireframe 2](https://github.com/MichaelCraig7/SimonGame/blob/master/etc/wireframes/wireframe2.jpg)


## Future Iterations

- Secret modes unlocked through entering specific usernames
- Button shake animations for when the user passes a specified score threshold 
- A scoreboard that doesn't reset when the page is refreshed

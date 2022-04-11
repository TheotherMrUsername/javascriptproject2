

The project is an attempt to make a card matching. 
Cards being by being face up for a small time period, half a second maybe, to give the player a chance to memorise them. 
The player then clicks on each card to attempt to match it with its pair. 

I started by taking the Loves Maths challenge to use the game area. 
I removed the main game and replaced it with a grid area of 10 divs. 
I then took out three of the buttons and changed the addition game button to a start button. 

I wanted to use a font awesome start button but so far have been unable to make it work. The button displayed it different from the start button I wanted. 

I have tried to use code from Code Institute challenges to change the card border to red when clicked and to change the card color. So far this has not worked. 

I need to asign a random color selection from an array and pair the cards in order to match them and increase the score. 

The code to change the colours when the cards are clicked on seems to work in a different IDE JSFiddle but not on Gitpod. 



Have added more code to cycle thorugh the array of colours twice in order to assign cokour pairs to the DOM using getElementsByClassName. 

I want to chage each div 

"Uncaught TypeError: color.style is undefined" in console.
 "TypeError: card.addEventListener is not a function" in JSFiddle.


I have failed to loop through the divs displaying the cards in order to assign them new colours from the cardArray. 
I cannot figure out what the correct syntax is supposed to be. 


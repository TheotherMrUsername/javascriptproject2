/** 
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "start"){
                runGame("gameStart");
            
            }
        })
    }

    

    runGame("gameStart");
})
*/


//pick 5 colors



//assign them to an Array


//randomise the array 
function shuffle(array) {
    cardArray.sort(() => Math.random() - 0.5);
}

let cardArray = [blue, yellow, green, red, black];
shuffle(cardArray);
alert(cardArray);

//assign the colors to 2 cards each

let pair1 = cardArray[0]
let pair2 = cardArray[1]
let pair3 = cardArray[2]
let pair4 = cardArray[3]
let pair5 = cardArray[4]

//append.css(random) wait 4seconds 
cardArray[0];


function assignColor(){

}

//function changeCards() {
 ///   let changeCards = document.getElementsByClassName('card').style.borderColor = "red";
//}




let card = document.getElementById("card");

function changeBorder() {
    card.style.borderColor = "red";
}

function changeBackground() {
    card.style.backgroundColor = ("blue");
}
/*
function revertBack() {
    card.style.borderColor = "white";
    card.style.backgroundColor = "darkgreen";
}

card.addEventListener('click', changeBorder);
card.addEventListener('click', changeBackground);
card.addEventListener('mouseleave', revertBack);
*/


//reset colors  
let change = document.getElementsByClassName("card");
function cardClicked(event) {
        if (this.style.backgroundColor === "darkgreen"){
            this.style.backgroundColor = "orange";
            this.style.borderColor = "red";
        } else {
            this.style.backgroundColor = "darkgreen";
            this.style.borderColor = "white"
        }
}
for (i = 0; i < change.length; i++){
    change[i].addEventListener("click", cardClicked);
}


//if the class matches the card clicked 
//run match 
//then increment score by 1

//when all cards are matched then displaymessage well done
//function(win){

//}

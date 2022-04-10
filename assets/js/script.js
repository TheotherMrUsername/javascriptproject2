
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
		
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "start"){
                
            
            }
        })
    }

    

    
})


 function shuffle(Array) {
    cardArray.sort(() => Math.random() - 0.5);
}

let cardArray = ["blue", "yellow", "green", "red", "black"];
shuffle(cardArray);

console.log(cardArray);

//assign the colors to 2 cards each

let pair1 = cardArray[0]
let pair2 = cardArray[1]
let pair3 = cardArray[2]
let pair4 = cardArray[3]
let pair5 = cardArray[4]

//append.css(random) wait 4seconds 
//
let pairArray 

pairArray = [pair1, pair2, pair3, pair4, pair5];

for(let i = 0; i < pairArray.length; i++){
    console.log(pairArray[i])
    let color = document.getElementsByClassName("card")
        color.style.backgroundColor(pairArray[i])
    }

//want to do a loop in a loop so that the divs with the class cards have pair1 assigned twice before moviung on to the next pair. 
//for pairs in pairArray{
 //   let i = 0; if i < 2; i++;
   // $('div').document.getelementsbyClassName('card').next;

//}
//cycle through the arrays and console log the results


//assign pair array into the divs twice each 






//function assignColor(){

//}

//function changeCards() {
 ///   let changeCards = document.getElementsByClassName('card').style.borderColor = "red";
//}


//let cardElements = document.getElementsByClassName("card")
//for(let i = 0; i < cardArray.length; i++) {cardElementsArray[i].addEventListener("click", displayCard)}

let card = document.getElementsByClassName("card");

function changeBorder() {
    card.style.borderColor = "red";
}

function changeBackground() {
    card.style.backgroundColor = ("");
   
}

function revertBack() {
    card.style.borderColor = "white";
    card.style.backgroundColor = "darkgreen";
}

card.addEventListener('click', changeBorder);
card.addEventListener('click', changeBackground);
card.addEventListener('mouseleave', revertBack);
    

let storedValue = []
let secondValue = []

// cannot figure this out 

let Values = document.getElementsByClassName("card");
function cardClicked(event) {
        if (storedValue == [] ){
            storedValue = this.cardClicked;
        } else if(secondValue == []){
            secondValue = this.cardClicked;
            checkValue;
        }
}
for (i = 0; i < change.length; i++){
    change[i].addEventListener("click", cardClicked);
}

function checkValue(){
  if (storedValue == secondValue) {
	alert("Plus 1!")
  score++
  } else {
  	revertBack
  }
  check.addEventListener('click', checkValue)
}
  

//reset colors 
//** */  
//let change = document.getElementsByClassName("card");
//function cardClicked(event) {
//        if (this.style.backgroundColor === "darkgreen"){
//            this.style.backgroundColor = "orange";
 //           this.style.borderColor = "red";
   //     } else {
   //         this.style.backgroundColor = "darkgreen";
   //         this.style.borderColor = "white";
    //    }
//}
//for (i = 0; i < change.length; i++){
//    change[i].addEventListener("click", cardClicked);
//} */ 


//if the class matches the card clicked 
//run match 
//then increment score by 1

//when all cards are matched then displaymessage well done
//function(win){

